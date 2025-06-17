import {
  Children,
  Context,
  // @ts-types="../../macromania/mod.ts"
  DebuggingInformation,
  EvaluationTreePosition,
  Expression,
} from "macromania";

import {
  Info,
  info,
  logEmptyLine,
  LoggingConfig,
  TagProps,
  Warn,
  warn,
  withOtherKeys,
} from "./mod.tsx";
import { SetCurrentKeys } from "./mod.tsx";
import { fail } from "@std/assert/fail";

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

  /**
   * Returns true iff the given node belongs to this category.
   */
  abstract belongsToCategory<Props extends TagProps>(
    ctx: Context,
    node: DOMNode<Props>,
  ): boolean;
}

export class CategorySpecificTag extends Category {
  tag: string;

  constructor(specURL: string, tag: string) {
    super(specURL);
    this.tag = tag;
  }

  override name(ctx: Context): string {
    return `${ctx.fmtCode(this.tag)} tag`;
  }

  override belongsToCategory<Props extends TagProps>(
    _ctx: Context,
    node: DOMNode<Props>,
  ): boolean {
    return node.info.tag === this.tag;
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
export const CAT_TITLE = new CategorySpecificTag(
  "https://html.spec.whatwg.org/multipage/semantics.html#the-title-element",
  "title",
);
export const CAT_BASE = new CategorySpecificTag(
  "https://html.spec.whatwg.org/multipage/semantics.html#the-base-element",
  "base",
);

export class CategorySetOfElements extends Category {
  setName: string;
  tags: Set<string>;

  constructor(specURL: string, setName: string, tags: string[]) {
    super(specURL);
    this.setName = setName;
    this.tags = new Set(tags);
  }

  override name(ctx: Context): string {
    return `${this.setName} content, i.e., one of the following tags: ${
      Array.from(this.tags.keys().map((tag) => ctx.fmtCode(tag))).join(", ")
    }`;
  }

  override belongsToCategory<Props extends TagProps>(
    _ctx: Context,
    node: DOMNode<Props>,
  ): boolean {
    return this.tags.has(node.info.tag);
  }
}

export const CAT_METADATA_CONTENT = new CategorySetOfElements(
  "https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2",
  "metadata",
  ["base", "link", "meta", "noscript", "script", "style", "template", "title"],
);

export interface ContentModel {
  /**
   * Returns true iff the children are valid. Does not log anything.
   */
  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean;

  /**
   * Log with the `info` function a human-friendly description of what was expected (and optionally, where things went wrong).
   */
  expected(ctx: Context, children: DOMNode<TagProps>[]): void;
}

/**
 * To be called after printing an `expected` content of a ContentModel which was not satisfied.
 */
function thingsWentWrongHere(ctx: Context) {
  info(ctx, `${ctx.fmt.bgBrightRed(`^^^^ things went wrong here ^^^^`)}`);
}

/**
 * Works iff there are no contents at all
 */
export class CmNothing implements ContentModel {
  constructor() {
  }

  checkChildren(_ctx: Context, children: DOMNode<TagProps>[]): boolean {
    return children.length === 0;
  }

  expected(ctx: Context) {
    info(ctx, `no inner content at all`);
  }
}

/**
 * Works iff there are no contained tags (text is okay, however).
 */
export class CmNoTags implements ContentModel {
  constructor() {
  }

  checkChildren(_ctx: Context, children: DOMNode<TagProps>[]): boolean {
    return children.length === 0;
  }

  expected(ctx: Context) {
    info(ctx, `no inner html elements at all (text content is fine, however)`);
  }
}

/**
 * Always works, because we have not implemented the check.
 */
export class CmUnverified implements ContentModel {
  constructor() {
  }

  checkChildren(_ctx: Context, _children: DOMNode<TagProps>[]): boolean {
    return true;
  }

  expected(ctx: Context) {
    info(
      ctx,
      `anything whatsoever (we do not check this part of the html spec)`,
    );
  }
}

/**
 * Works iff there is exactly one child and its categories include this `category` (object identity, not just equality).
 */
export class CmCategory implements ContentModel {
  category: Category;

  constructor(category: Category) {
    this.category = category;
  }

  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean {
    return children.length === 1 &&
      this.category.belongsToCategory(ctx, children[0]);
  }

  expected(ctx: Context) {
    info(
      ctx,
      `one ${this.category.name(ctx)} (see ${
        ctx.fmtURL(this.category.specifiedAt())
      } )`,
    );
  }
}

/**
 * Works iff exactly one of the children matches the `inner` content model.
 */
export class CmContainsExactlyOne implements ContentModel {
  inner: ContentModel;

  constructor(inner: ContentModel) {
    this.inner = inner;
  }

  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean {
    let matches = 0;

    children.forEach((child) => {
      if (this.inner.checkChildren(ctx, [child])) {
        matches += 1;
      }
    });

    return matches === 1;
  }

  expected(ctx: Context, children: DOMNode<TagProps>[]) {
    info(
      ctx,
      `exactly one child tag satisfying the following:`,
    );
    ctx.loggingGroup(() => {
      this.inner.expected(ctx, children);
    });

    const matchIndices: number[] = [];

    children.forEach((child, i) => {
      if (this.inner.checkChildren(ctx, [child])) {
        matchIndices.push(i);
      }
    });

    ctx.loggingGroup(() => {
      if (matchIndices.length === 0) {
        info(
          ctx,
          `but ${ctx.fmt.italic("no")} child satisfied the requirement`,
        );
      } else {
        info(
          ctx,
          `but ${
            ctx.fmt.italic("too many")
          } children satisfied the requirement, namely those at`,
        );
        ctx.loggingGroup(() => {
          matchIndices.forEach((i) => {
            info(
              ctx,
              `- ${ctx.fmtDebuggingInformation(children[i].definedAt!)}`,
            );
          });
        });
      }
    });
  }
}

/**
 * Works iff at most one of the children matches the `inner` content model.
 */
export class CmContainsAtMostOne implements ContentModel {
  inner: ContentModel;

  constructor(inner: ContentModel) {
    this.inner = inner;
  }

  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean {
    let matches = 0;

    children.forEach((child) => {
      if (this.inner.checkChildren(ctx, [child])) {
        matches += 1;
      }
    });

    return matches <= 1;
  }

  expected(ctx: Context, children: DOMNode<TagProps>[]) {
    info(
      ctx,
      `at most one child tag to satisfy the following:`,
    );
    ctx.loggingGroup(() => {
      this.inner.expected(ctx, children);
    });

    const matchIndices: number[] = [];

    children.forEach((child, i) => {
      if (this.inner.checkChildren(ctx, [child])) {
        matchIndices.push(i);
      }
    });

    ctx.loggingGroup(() => {
      if (matchIndices.length > 1) {
        info(
          ctx,
          `but ${
            ctx.fmt.italic("too many")
          } children satisfied the requirement, namely those at`,
        );
        ctx.loggingGroup(() => {
          matchIndices.forEach((i) => {
            info(
              ctx,
              `- ${ctx.fmtDebuggingInformation(children[i].definedAt!)}`,
            );
          });
        });
      }
    });
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

  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean {
    return this.options.some((opt) => opt.checkChildren(ctx, children));
  }

  expected(ctx: Context, children: DOMNode<TagProps>[]) {
    info(ctx, `any one of the following:`);
    ctx.loggingGroup(() => {
      this.options.forEach((opt) => {
        opt.expected(ctx, children);
      });
    });
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

  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean {
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

  expected(ctx: Context, children: DOMNode<TagProps>[]) {
    info(ctx, `an exact sequence of the following:`);
    ctx.loggingGroup(() => {
      for (let i = 0; i < this.sequence.length; i++) {
        this.sequence[i].expected(ctx, [children[i]]);

        if (i < children.length) {
          if (!this.sequence[i].checkChildren(ctx, [children[i]])) {
            thingsWentWrongHere(ctx);
          }
        } else {
          if (!this.sequence[i].checkChildren(ctx, [])) {
            thingsWentWrongHere(ctx);
          }
        }
      }
    });
  }
}

/**
 * Works iff all the children correspond to the `inner` content model.
 */
export class CmZeroOrMore implements ContentModel {
  inner: ContentModel;

  constructor(inner: ContentModel) {
    this.inner = inner;
  }

  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean {
    return children.every((child) => this.inner.checkChildren(ctx, [child]));
  }

  expected(ctx: Context, children: DOMNode<TagProps>[]) {
    info(ctx, `zero or more of the following:`);
    ctx.loggingGroup(() => {
      this.inner.expected(ctx, children);
    });
  }
}

/**
 * Works iff there is at least one child and all the children correspond to the `inner` content model.
 */
export class CmOneOrMore implements ContentModel {
  inner: ContentModel;

  constructor(inner: ContentModel) {
    this.inner = inner;
  }

  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean {
    return children.length > 0 &&
      children.every((child) => this.inner.checkChildren(ctx, [child]));
  }

  expected(ctx: Context, children: DOMNode<TagProps>[]) {
    info(ctx, `one or more of the following:`);
    ctx.loggingGroup(() => {
      this.inner.expected(ctx, children);
    });
  }
}

/**
 * Works iff there is at least one child and all the children correspond to the `inner` content model.
 */
export class CmAnd implements ContentModel {
  inner: ContentModel[];

  constructor(inner: ContentModel[]) {
    this.inner = inner;
  }

  checkChildren(ctx: Context, children: DOMNode<TagProps>[]): boolean {
    return this.inner.every((cm) => cm.checkChildren(ctx, children));
  }

  expected(ctx: Context, children: DOMNode<TagProps>[]) {
    const failureIndices: Set<number> = new Set();

    this.inner.forEach((cm, i) => {
      if (!cm.checkChildren(ctx, children)) {
        failureIndices.add(i);
      }
    });

    info(ctx, `contents satisfying all of the following criteria:`);
    ctx.loggingGroup(() => {
      this.inner.forEach((cm, i) => {
        cm.expected(ctx, children);
        if (failureIndices.has(i)) {
          thingsWentWrongHere(ctx);
        }
      });
    });
  }
}

export class DOMNodeInfo {
  contentModel: ContentModel;
  /**
   * E.g. "div".
   */
  tag: string;
  specLink: string;

  constructor(
    tag: string,
    contentModel: ContentModel,
    specLink: string,
  ) {
    this.tag = tag;
    this.contentModel = contentModel;
    this.specLink = specLink;
  }
}

const dummyNodeInfo = new DOMNodeInfo("dummy", new CmNoTags(), "");

export type EvaledProps<Props> = {
  [Attr in keyof Props]?: boolean | number | string;
};

type DOMNode<Props extends TagProps> = {
  info: DOMNodeInfo;
  parent?: DOMNode<TagProps>;
  children: DOMNode<TagProps>[];
  etp?: EvaluationTreePosition;
  definedAt?: DebuggingInformation;
  attrs?: Props;
  evaledAttrs?: EvaledProps<Props>;
};

const [TreeScope, getCurrentDOMNode] = Context.createScopedState<
  DOMNode<TagProps>
>(
  (parent?: DOMNode<TagProps>) => {
    return { parent, info: dummyNodeInfo, children: [] };
  },
);

export type AttrRendering<Props> = {
  [Attr in keyof Props]: (
    ctx: Context,
    attr: Required<Props>[Attr],
  ) => Expression;
};

/**
 * To be the outermost expression returned by each statically typed html macro. Builds up a tree structure for verifying html (and performs verification related to content models).
 */
// TODO rename this
export function BuildVerificationDOM<Attrs extends TagProps>(
  { children, dom, isVoid, attrs, attrRendering }: {
    children?: Children;
    dom: DOMNodeInfo;
    attrs: Attrs;
    attrRendering: AttrRendering<Attrs>;
    isVoid?: boolean;
  },
): Expression {
  return (
    <TreeScope>
      <effect
        fun={(ctx) => {
          const node = getCurrentDOMNode(ctx);
          node.info = dom;
          node.etp = ctx.getEvaluationTreePosition();
          node.definedAt = ctx.getCurrentDebuggingInformation();
          node.evaledAttrs = {};
          node.attrs = attrs;

          return (
            <SetCurrentKeys keys={["verify", dom.tag as (keyof LoggingConfig)]}>
              <map
                fun={(ctx, evaled) => {
                  // Fully evaluated all children, now it is time to verify things.
                  const node = getCurrentDOMNode(ctx);

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
                    withOtherKeys(ctx, [
                      "verify",
                      dom.tag as (keyof LoggingConfig),
                      (`${dom.tag}ContentModel`) as (keyof LoggingConfig),
                    ], () => {
                      warn(
                        ctx,
                        `Failed content model verification for a ${
                          ctx.fmtCode(
                            dom.tag,
                          )
                        } tag, expected its content to be:`,
                      );
                      ctx.loggingGroup(() => {
                        dom.contentModel.expected(ctx, node.children);
                        info(
                          ctx,
                          `at ${
                            ctx.fmtDebuggingInformation(
                              ctx.getCurrentDebuggingInformation(),
                            )
                          }`,
                        );
                      });
                      logEmptyLine(ctx, "warn");
                    });
                  }

                  // We are done verifying ourselves.

                  // Finally, register ourselves as children of our parent, so that they can resume *their* verification.
                  if (node.parent) {
                    node.parent.children.push(node);
                  }

                  // Return the created html string.
                  return evaled;
                }}
              >
                {/* Render the tag and its attributes. */}
                {isVoid
                  ? (
                    <>
                      {"<"}
                      {dom.tag}
                      <RenderAttrs
                        attrs={attrs}
                        attrRendering={attrRendering}
                        node={node}
                      />
                      {" />"}
                    </>
                  )
                  : (
                    <>
                      {"<"}
                      {dom.tag}
                      <RenderAttrs
                        attrs={attrs}
                        attrRendering={attrRendering}
                        node={node}
                      />
                      {">"}
                      {children}
                      {"</"}
                      {dom.tag}
                      {">"}
                    </>
                  )}
              </map>
            </SetCurrentKeys>
          );
        }}
      />
    </TreeScope>
  );
}

function RenderAttrs<Attrs extends TagProps>(
  { attrs, attrRendering, node }: {
    attrs: Attrs;
    attrRendering: AttrRendering<Attrs>;
    node: DOMNode<Attrs>;
  },
): Expression {
  return (
    <effect
      fun={(ctx) => {
        const exps = [];
        let first = true;

        for (const attr in attrs) {
          if (Object.prototype.hasOwnProperty.call(attrs, attr)) {
            const attrVal = attrs[attr];

            if (typeof attrVal === "boolean" && !attrVal) {
              node.evaledAttrs![attr] = attrVal;
              continue;
            }

            if (!first) {
              exps.push(" ");
              first = false;
            }

            let attrName: string = attr;
            switch (attrName) {
              case "clazz":
                attrName = "class";
                break;

              default:
                break;
            }

            if (typeof attrVal === "boolean") {
              node.evaledAttrs![attr] = attrVal;
              exps.push(attrName);
            } else if (
              typeof attrVal === "number" || typeof attrVal === "string"
            ) {
              node.evaledAttrs![attr] = attrVal;
              exps.push(<>{attrName}="{`${attrVal}`}"</>);
            } else {
              exps.push(
                <map
                  fun={(_ctx, evaled) => {
                    node.evaledAttrs![attr] = evaled;
                    return evaled;
                  }}
                >
                  {attrRendering[attr](ctx, attrVal)}
                </map>,
              );
            }
          }
        }
        return <fragment x={exps} />;
      }}
    />
  );
}
