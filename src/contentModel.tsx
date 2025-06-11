import {
  Children,
  Context,
  EvaluationTreePosition,
  Expression,
} from "macromania";

import { Info, info, LoggingConfig, Warn, warn } from "./mod.tsx";
import { SetCurrentKeys } from "./mod.tsx";

/**
 * https://html.spec.whatwg.org/multipage/dom.html#content-categories
 */
export abstract class Category {
  protected specURL: string;

  constructor(specURL: string) {
    this.specURL = specURL;
  }

  /**
   * Returns a hyperlink to the specification of this category in the living standard.
   */
  specifiedAt(): string {
    return this.specURL;
  }

  /**
   * Renders a human-friendly name for this category.
   */
  abstract name(ctx: Context): string;
}

export class CategorySpecificTag extends Category {
  tag: string;

  constructor(specURL: string, tag: string) {
    super(specURL);
    this.tag = tag;
  }

  override name(ctx: Context): string {
    return `a ${ctx.fmtCode(this.tag)} tag`;
  }
}

export const CAT_HEAD = new CategorySpecificTag(
  "https://html.spec.whatwg.org/multipage/semantics.html#the-head-element",
  "head",
);
export const CAT_BODY = new CategorySpecificTag(
  "https://html.spec.whatwg.org/multipage/sections.html#the-body-element",
  "body",
);

// type Category =
//   | "Metadata Content"
//   | "Flow Content"
//   | "Sectioning Content"
//   | "Heading Content"
//   | "Phrasing Content"
//   | "Embedded Content"
//   | "Interactive Content"
//   | "Palpable Content"
//   | { specificTag: string };

export interface ContentModel {
  /**
   * Returns true iff the children are valid. Does not log anything.
   */
  checkChildren(ctx: Context, children: DOMNode[]): boolean;

  /**
   * Renders a human-friendly description of what was expected.
   */
  expected(ctx: Context): Expression;
}

/**
 * Works iff there are no contents
 */
export class CmEmpty implements ContentModel {
  constructor() {
  }

  checkChildren(ctx: Context, children: DOMNode[]): boolean {
    return children.length === 0;
  }

  expected(ctx: Context): Expression {
    return (
      <>
        no inner html at all
      </>
    );
  }
}

/**
 * Works iff there is exactly one child and its categories include this `category` (object identity, not just equality).
 */
export class CmExactly implements ContentModel {
  category: Category;

  constructor(category: Category) {
    this.category = category;
  }

  checkChildren(ctx: Context, children: DOMNode[]): boolean {
    return children.length === 1 &&
      children[0].info.categories.has(this.category);
  }

  expected(ctx: Context): Expression {
    return (
      <>
        a {this.category.name} (see {ctx.fmtURL(this.category.specifiedAt())} )
      </>
    );
  }
}

/**
 * Works iff at least one of its `options` works.
 */
export class CmChoice implements ContentModel {
  options: ContentModel[];

  constructor(options: ContentModel[]) {
    this.options = options;
  }

  checkChildren(ctx: Context, children: DOMNode[]): boolean {
    return this.options.some((opt) => opt.checkChildren(ctx, children));
  }

  expected(ctx: Context): Expression {
    return (
      <>
        one of the following:
        <loggingGroup>
          {this.options.map((opt, i) => (
            <Info>
              {opt.expected(ctx)}${i + 1 === this.options.length ? "." : ",\n"}
            </Info>
          ))}
        </loggingGroup>
      </>
    );
  }
}

/**
 * Works iff the children correspond exactly to the `sequence`.
 */
export class CmSequence implements ContentModel {
  sequence: ContentModel[];

  constructor(sequence: ContentModel[]) {
    this.sequence = sequence;
  }

  checkChildren(ctx: Context, children: DOMNode[]): boolean {
    if (children.length !== this.sequence.length) {
      return false;
    } else {
      for (let i = 0; i < this.sequence.length; i++) {
        if (!this.sequence[i].checkChildren(ctx, [children[i]])) {
          return false;
        }
      }
    }

    return true;
  }

  expected(ctx: Context): Expression {
    return (
      <>
        an exact sequence of the following:
        <loggingGroup>
          {this.sequence.map((cm, i) => (
            <Info>
              {cm.expected(ctx)}${i + 1 === this.sequence.length ? "." : ",\n"}
            </Info>
          ))}
        </loggingGroup>
      </>
    );
  }
}

// export type ContentModel = {sequence: ContentModel[]} | {many: ContentModel};

export class DOMNodeInfo {
  contentModel: ContentModel;
  /**
   * E.g. "div".
   */
  tag: string;
  categories: Set<Category>;
  specLink: string;

  constructor(
    tag: string,
    contentModel: ContentModel,
    categories: Set<Category>,
    specLink: string,
  ) {
    this.tag = tag;
    this.contentModel = contentModel;
    this.categories = categories;
    this.specLink = specLink;
  }
}

const dummyNodeInfo = new DOMNodeInfo("dummy", new CmEmpty(), new Set(), "");

type DOMNode = {
  info: DOMNodeInfo;
  parent?: DOMNode;
  children: DOMNode[];
  etp?: EvaluationTreePosition;
};

const [TreeScope, getCurrentDOMNode] = Context.createScopedState<DOMNode>(
  (parent?: DOMNode) => {
    return { parent, info: dummyNodeInfo, children: [] };
  },
);

/**
 * To be the outermost expression returned by each statically typed html macro. Builds up a tree structure for verifying html (and performs verification related to content models).
 */
export function BuildVerificationDOM(
  { children, dom }: {
    children?: Children;
    dom: DOMNodeInfo;
  },
): Expression {
  return (
    <TreeScope>
      <effect
        fun={(ctx) => {
          const node = getCurrentDOMNode(ctx);
          node.info = dom;
          node.etp = ctx.getEvaluationTreePosition();

          return (
            <SetCurrentKeys keys={["verify", dom.tag as (keyof LoggingConfig)]}>
              <map
                fun={(ctx, evaled) => {
                  // Fully evaluated all children, now it is time to verify things.
                  const node = getCurrentDOMNode(ctx);

                  const collectedWarnings: Expression[] = [];

                  // First, sort all children that registered themselves by their ordering in the macromania source code.
                  node.children.sort((
                    childA,
                    childB,
                  ) => (childA.etp!.isStrictlyEarlierThan(childB.etp!)
                    ? -1
                    : 1)
                  );

                  // Now, check our content model.
                  if (!dom.contentModel.checkChildren(ctx, node.children)) {
                    collectedWarnings.push(
                      <SetCurrentKeys
                        keys={[
                          "verify",
                          dom.tag as (keyof LoggingConfig),
                          (`${dom.tag}ContentModel`) as (keyof LoggingConfig),
                        ]}
                      >
                        <Warn>
                          Failed content model verification for a ${ctx.fmtCode(
                            dom.tag,
                          )} tag:
                        </Warn>
                        <loggingGroup>
                          <Info>Expected {dom.contentModel.expected(ctx)}</Info>
                          <Info>
                            {ctx.fmtDebuggingInformation(
                              ctx.getCurrentDebuggingInformation(),
                            )}
                          </Info>
                        </loggingGroup>
                      </SetCurrentKeys>,
                    );
                  }

                  // We are done verifying ourselves.

                  // Finally, register ourselves as children of our parent, so that they can resume *their* verification.
                  if (node.parent) {
                    node.parent.children.push(node);
                  }

                  // Return the collected warnings, and the created html string.
                  return (
                    <>
                      {collectedWarnings}
                      {evaled}
                    </>
                  );
                }}
              >
                {children}
              </map>
            </SetCurrentKeys>
          );
        }}
      />
    </TreeScope>
  );
}
