import {
  Children,
  Context,
  // @ts-types="../../macromania/mod.ts"
  DebuggingInformation,
  EvaluationTreePosition,
  Expression,
} from "macromania";

import {
  AProps,
  DynamicAttributes,
  EscapeHtml,
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
import { isLinkAllowedInBody } from "./elements/link.tsx";
import { AudioProps } from "./elements/audio.tsx";
import { VideoProps } from "./elements/video.tsx";
import { ImgProps } from "./elements/img.tsx";
import { InputProps } from "./elements/input.tsx";

type VerificationState = {
  currentlyInsideMapElement: boolean;
};

const [getVerificationState, _] = Context.createState<VerificationState>(
  () => ({
    currentlyInsideMapElement: false,
  }),
);

function isCurrentlyInsideMapElement(ctx: Context): boolean {
  const state = getVerificationState(ctx);
  return state.currentlyInsideMapElement;
}

export function setCurrentlyInsideMapElement(ctx: Context, newVal: boolean) {
  const state = getVerificationState(ctx);
  state.currentlyInsideMapElement = newVal;
}

/**
 * Call this function to report on invalid content models in content model checks (`DOMNodeInfo.check`) to a child element which should not be there.
 */
export function logContentModelViolation(
  ctx: Context,
  ancestor: DOMNode<TagProps>,
  offending: DOMNode<TagProps>,
  elaboration?: string,
) {
  warn(
    ctx,
    `Must not nest ${ctx.fmtCode(offending.info.tag)} tag inside ${
      ctx.fmtCode(ancestor.info.tag)
    } tag${elaboration === undefined ? "." : ` like this.`}`,
  );

  ctx.loggingGroup(() => {
    if (elaboration) {
      info(ctx, elaboration);
    }
    info(
      ctx,
      `Offending ${ctx.fmtCode(offending.info.tag)} tag at ${
        ctx.fmtDebuggingInformation(
          offending.definedAt!,
        )
      }`,
    );
    info(
      ctx,
      `Outer ${ctx.fmtCode(ancestor.info.tag)} tag at ${
        ctx.fmtDebuggingInformation(
          ancestor.definedAt!,
        )
      }`,
    );
  });
}

/**
 * The type of functions we use to check whether an individual html node is fine in some context. Returns `true` if it is ok, `false` if not and nothing would change that, and an elaboration string if it is not ok but that requires an explanation beyond its tag.
 *
 * Does not do any logging.
 */
type CheckElement<Props extends TagProps> = (
  ctx: Context,
  node: DOMNode<Props>,
) => boolean | string;

export function singleTagCategory<Props extends TagProps>(
  tag: string,
): CheckElement<Props> {
  return (_ctx: Context, node: DOMNode<Props>) => node.info.tag === tag;
}

export const CAT_HEAD = singleTagCategory("head");
export const CAT_BODY = singleTagCategory("body");
export const CAT_TITLE = singleTagCategory("title");
export const CAT_BASE = singleTagCategory("base");
export const CAT_LI = singleTagCategory("li");

export function choiceCategory(
  cats: CheckElement<TagProps>[],
): CheckElement<TagProps> {
  return (ctx: Context, node: DOMNode<TagProps>) => {
    for (const cat of cats) {
      const result = cat(ctx, node);
      if (result === true) {
        return true;
      } else if (typeof result === "string") {
        return result;
      }
      // Else, go to next iteration.
    }

    return false;
  };
}

export const CAT_METADATA_CONTENT = choiceCategory([
  singleTagCategory("base"),
  singleTagCategory("link"),
  singleTagCategory("meta"),
  singleTagCategory("noscript"),
  singleTagCategory("script"),
  singleTagCategory("style"),
  singleTagCategory("template"),
  singleTagCategory("title"),
]);

export const CAT_HEADER_OR_FOOTER = choiceCategory([
  singleTagCategory("header"),
  singleTagCategory("footer"),
]);

export const CAT_SCRIPT_SUPPORTING = choiceCategory([
  singleTagCategory("script"),
  singleTagCategory("template"),
]);

export const CAT_LI_OR_SCRIPT_SUPPORTING = choiceCategory([
  singleTagCategory("li"),
  singleTagCategory("script"),
  singleTagCategory("template"),
]);

export const CAT_NOT_IN_ADDRESS = choiceCategory([
  singleTagCategory("h1"),
  singleTagCategory("h2"),
  singleTagCategory("h3"),
  singleTagCategory("h4"),
  singleTagCategory("h5"),
  singleTagCategory("h6"),
  singleTagCategory("hgroup"),
  singleTagCategory("article"),
  singleTagCategory("aside"),
  singleTagCategory("nav"),
  singleTagCategory("section"),
  singleTagCategory("header"),
  singleTagCategory("footer"),
  singleTagCategory("address"),
]);

export const CAT_NOT_IN_DT = choiceCategory([
  singleTagCategory("h1"),
  singleTagCategory("h2"),
  singleTagCategory("h3"),
  singleTagCategory("h4"),
  singleTagCategory("h5"),
  singleTagCategory("h6"),
  singleTagCategory("hgroup"),
  singleTagCategory("article"),
  singleTagCategory("aside"),
  singleTagCategory("nav"),
  singleTagCategory("section"),
  singleTagCategory("header"),
  singleTagCategory("footer"),
]);

export const CAT_FLOW_AREA = (ctx: Context, node: DOMNode<TagProps>) => {
  if (node.info.tag === "area") {
    if (isCurrentlyInsideMapElement(ctx)) {
      return true;
    } else {
      return `In this context, an ${
        ctx.fmtCode("area")
      } tag is only allowed if it is a descendant of a ${
        ctx.fmtCode("map")
      } element.`;
    }
  } else {
    return false;
  }
};

export const CAT_LINK_ALLOWED_IN_BODY = (
  ctx: Context,
  node: DOMNode<TagProps>,
) => {
  if (node.info.tag === "link") {
    if (isLinkAllowedInBody(node)) {
      return true;
    } else {
      return `In this context, a ${
        ctx.fmtCode("link")
      } tag is only allowed if it is allowed in the body (see ${
        ctx.fmtURL(
          "https://html.spec.whatwg.org/multipage/semantics.html#allowed-in-the-body",
        )
      } ).`;
    }
  } else {
    return false;
  }
};

export const CAT_META_WITH_ITEMPROP = (
  ctx: Context,
  node: DOMNode<TagProps>,
) => {
  if (node.info.tag === "meta") {
    if (node.attrs!.itemprop !== undefined) {
      return true;
    } else {
      return `In this context, a ${
        ctx.fmtCode("meta")
      } tag is only allowed if it has an ${ctx.fmtCode("itemprop")} attribute.`;
    }
  } else {
    return false;
  }
};

export const CAT_FLOW_CONTENT = choiceCategory([
  singleTagCategory("a"),
  singleTagCategory("abbr"),
  singleTagCategory("address"),
  CAT_FLOW_AREA,
  singleTagCategory("article"),
  singleTagCategory("audio"),
  singleTagCategory("b"),
  singleTagCategory("bdi"),
  singleTagCategory("bdo"),
  singleTagCategory("blockquote"),
  singleTagCategory("br"),
  singleTagCategory("canvas"),
  singleTagCategory("cite"),
  singleTagCategory("code"),
  singleTagCategory("data"),
  singleTagCategory("datalist"),
  singleTagCategory("del"),
  singleTagCategory("details"),
  singleTagCategory("dfn"),
  singleTagCategory("dialog"),
  singleTagCategory("div"),
  singleTagCategory("dl"),
  singleTagCategory("em"),
  singleTagCategory("embed"),
  singleTagCategory("fieldset"),
  singleTagCategory("figure"),
  singleTagCategory("footer"),
  singleTagCategory("form"),
  singleTagCategory("h1"),
  singleTagCategory("h2"),
  singleTagCategory("h3"),
  singleTagCategory("h4"),
  singleTagCategory("h5"),
  singleTagCategory("h6"),
  singleTagCategory("header"),
  singleTagCategory("hgroup"),
  singleTagCategory("hr"),
  singleTagCategory("i"),
  singleTagCategory("iframe"),
  singleTagCategory("img"),
  singleTagCategory("input"),
  singleTagCategory("ins"),
  singleTagCategory("kbd"),
  singleTagCategory("label"),
  CAT_LINK_ALLOWED_IN_BODY,
  singleTagCategory("main"),
  singleTagCategory("map"),
  singleTagCategory("mark"),
  singleTagCategory("menu"),
  CAT_META_WITH_ITEMPROP,
  singleTagCategory("meter"),
  singleTagCategory("nav"),
  singleTagCategory("noscript"),
  singleTagCategory("object"),
  singleTagCategory("ol"),
  singleTagCategory("output"),
  singleTagCategory("p"),
  singleTagCategory("picture"),
  singleTagCategory("pre"),
  singleTagCategory("progress"),
  singleTagCategory("q"),
  singleTagCategory("ruby"),
  singleTagCategory("s"),
  singleTagCategory("samp"),
  singleTagCategory("script"),
  singleTagCategory("search"),
  singleTagCategory("section"),
  singleTagCategory("select"),
  singleTagCategory("slot"),
  singleTagCategory("small"),
  singleTagCategory("span"),
  singleTagCategory("strong"),
  singleTagCategory("sub"),
  singleTagCategory("sup"),
  singleTagCategory("table"),
  singleTagCategory("template"),
  singleTagCategory("textarea"),
  singleTagCategory("time"),
  singleTagCategory("u"),
  singleTagCategory("ul"),
  singleTagCategory("var"),
  singleTagCategory("video"),
  singleTagCategory("wbr"),
]);

export const CAT_PHRASING_CONTENT = choiceCategory([
  singleTagCategory("a"),
  singleTagCategory("abbr"),
  CAT_FLOW_AREA,
  singleTagCategory("audio"),
  singleTagCategory("b"),
  singleTagCategory("bdi"),
  singleTagCategory("bdo"),
  singleTagCategory("br"),
  singleTagCategory("button"),
  singleTagCategory("canvas"),
  singleTagCategory("cite"),
  singleTagCategory("code"),
  singleTagCategory("data"),
  singleTagCategory("datalist"),
  singleTagCategory("del"),
  singleTagCategory("dfn"),
  singleTagCategory("em"),
  singleTagCategory("embed"),
  singleTagCategory("i"),
  singleTagCategory("iframe"),
  singleTagCategory("img"),
  singleTagCategory("input"),
  singleTagCategory("ins"),
  singleTagCategory("kbd"),
  singleTagCategory("label"),
  CAT_LINK_ALLOWED_IN_BODY,
  singleTagCategory("map"),
  singleTagCategory("mark"),
  CAT_META_WITH_ITEMPROP,
  singleTagCategory("meter"),
  singleTagCategory("noscript"),
  singleTagCategory("object"),
  singleTagCategory("output"),
  singleTagCategory("picture"),
  singleTagCategory("progress"),
  singleTagCategory("q"),
  singleTagCategory("ruby"),
  singleTagCategory("s"),
  singleTagCategory("samp"),
  singleTagCategory("script"),
  singleTagCategory("select"),
  singleTagCategory("slot"),
  singleTagCategory("small"),
  singleTagCategory("span"),
  singleTagCategory("strong"),
  singleTagCategory("sub"),
  singleTagCategory("sup"),
  singleTagCategory("template"),
  singleTagCategory("textarea"),
  singleTagCategory("time"),
  singleTagCategory("u"),
  singleTagCategory("var"),
  singleTagCategory("video"),
  singleTagCategory("wbr"),
]);

export const CAT_SELECT_ELEMENT_INNER_CONTENT_ELEMENTS = choiceCategory([
  singleTagCategory("option"),
  singleTagCategory("optgroup"),
  singleTagCategory("hr"),
  singleTagCategory("script"),
  singleTagCategory("template"),
  singleTagCategory("noscript"),
  singleTagCategory("div"),
]);

export const CAT_OPTGROUP_ELEMENT_INNER_CONTENT_ELEMENTS = choiceCategory([
  singleTagCategory("option"),
  singleTagCategory("script"),
  singleTagCategory("template"),
  singleTagCategory("noscript"),
  singleTagCategory("div"),
]);

const SIMPLE_INTERACTIVE_CONTENT = choiceCategory([
  singleTagCategory("button"),
  singleTagCategory("details"),
  singleTagCategory("embed"),
  singleTagCategory("iframe"),
  singleTagCategory("label"),
  singleTagCategory("select"),
  singleTagCategory("textarea"),
]);

export const CAT_INTERACTIVE_CONTENT: CheckElement<TagProps> = (
  ctx: Context,
  node: DOMNode<TagProps>,
) => {
  if (node.info.tag === "a") {
    if ((node as DOMNode<AProps>).evaledAttrs!["href"] === undefined) {
      return `An ${ctx.fmtCode("a")} tag must have its ${
        ctx.fmtCode("href")
      } attribute specified to qualify as interactive content.`;
    } else {
      return true;
    }
  } else if (node.info.tag === "audio") {
    if ((node as DOMNode<AudioProps>).evaledAttrs!["controls"] === undefined) {
      return `An ${ctx.fmtCode("audio")} tag must have its ${
        ctx.fmtCode("controls")
      } attribute specified to qualify as interactive content.`;
    } else {
      return true;
    }
  } else if (node.info.tag === "video") {
    if ((node as DOMNode<VideoProps>).evaledAttrs!["controls"] === undefined) {
      return `A ${ctx.fmtCode("video")} tag must have its ${
        ctx.fmtCode("controls")
      } attribute specified to qualify as interactive content.`;
    } else {
      return true;
    }
  } else if (node.info.tag === "img") {
    if ((node as DOMNode<ImgProps>).evaledAttrs!["usemap"] === undefined) {
      return `An ${ctx.fmtCode("img")} tag must have its ${
        ctx.fmtCode("usemap")
      } attribute specified to qualify as interactive content.`;
    } else {
      return true;
    }
  } else if (node.info.tag === "input") {
    if ((node as DOMNode<InputProps>).evaledAttrs!["type_"] === "hidden") {
      return `An ${ctx.fmtCode("input")} tag must have a ${
        ctx.fmtCode("type")
      } attribute that is not set to ${
        ctx.fmtCode("hidden")
      } to qualify as interactive content.`;
    } else {
      return true;
    }
  } else {
    return SIMPLE_INTERACTIVE_CONTENT(ctx, node);
  }
};

export const CAT_OPTION_ELEMENT_INNER_CONTENT_ELEMENTS = (
  ctx: Context,
  node: DOMNode<TagProps>,
) => {
  if (node.info.tag === "div") {
    return true;
  } else {
    const phrasing_result = CAT_PHRASING_CONTENT(ctx, node);
    if (phrasing_result !== true) {
      return phrasing_result;
    } else {
      // It is phrasing content, now we can filter the disallowed ones.
      if (node.info.tag === "datalist" || node.info.tag === "object") {
        return false;
      } else if (node.evaledAttrs!["tabindex"] !== undefined) {
        return `A ${ctx.fmtCode("option")} tag must not contain tags whose ${
          ctx.fmtCode("tabindex")
        } attribute is specified`;
      } else if (CAT_INTERACTIVE_CONTENT(ctx, node) === true) {
        return `A ${
          ctx.fmtCode("option")
        } tag must not contain interactive content (see ${
          ctx.fmtURL(
            "https://html.spec.whatwg.org/multipage/dom.html#interactive-content",
          )
        } ).`;
      } else {
        // Yay, this is non-excluded phrasing content
        return true;
      }
    }
  }
};

export const cmAllFlow = cmAllChildrenPass(CAT_FLOW_CONTENT);
export const cmAllPhrasing = cmAllChildrenPass(CAT_PHRASING_CONTENT);
export const cmAllSelectElementInnerContentElements = cmAllChildrenPass(
  CAT_SELECT_ELEMENT_INNER_CONTENT_ELEMENTS,
);
export const cmAllOptgroupElementInnerContentElements = cmAllChildrenPass(
  CAT_OPTGROUP_ELEMENT_INNER_CONTENT_ELEMENTS,
);
export const cmAllOptionElementInnerContentElements = cmAllChildrenPass(
  CAT_OPTION_ELEMENT_INNER_CONTENT_ELEMENTS,
);

/**
 * Passes verification iff the children correspond exactly to the given sequence of element checks.
 */
export function cmSequence(
  elements: CheckElement<TagProps>[],
): CheckHtml<TagProps> {
  return (ctx: Context, node: DOMNode<TagProps>) => {
    if (node.children.length !== elements.length) {
      warn(
        ctx,
        `Expected exactly ${elements.length} child tags, but got ${node.children.length}.`,
      );

      ctx.loggingGroup(() => {
        info(
          ctx,
          `Tag with wrong number of children at ${
            ctx.fmtDebuggingInformation(
              node.definedAt!,
            )
          }`,
        );
        logEmptyLine(ctx, "warn");
      });

      return false;
    } else {
      for (let i = 0; i < node.children.length; i++) {
        const ret = elements[i](ctx, node.children[i]);

        if (typeof ret === "string") {
          logContentModelViolation(ctx, node, node.children[i], ret);
          return false;
        } else if (ret === false) {
          logContentModelViolation(ctx, node, node.children[i]);
          return false;
        }
        // Else, continue by checking the next child.
      }

      // All children passed.
      return true;
    }
  };
}

/**
 * Passes verification iff *all* the given `cms` pass verification.
 */
export function cmAnd(
  cms: CheckHtml<TagProps>[],
): CheckHtml<TagProps> {
  return (ctx: Context, node: DOMNode<TagProps>) => {
    for (const cm of cms) {
      if (!cm(ctx, node)) {
        return false;
      }
    }

    return true;
  };
}

/**
 * Passes verification iff all children pass the given element check.
 */
export function cmAllChildrenPass(
  checkChild: CheckElement<TagProps>,
): CheckHtml<TagProps> {
  return (ctx: Context, node: DOMNode<TagProps>) => {
    for (let i = 0; i < node.children.length; i++) {
      const ret = checkChild(ctx, node.children[i]);

      if (typeof ret === "string") {
        logContentModelViolation(ctx, node, node.children[i], ret);
        return false;
      } else if (ret === false) {
        logContentModelViolation(ctx, node, node.children[i]);
        return false;
      }
      // Else, continue by checking the next child.
    }

    // All children passed.
    return true;
  };
}

/**
 * Passes verification iff among all children exactly one passes the given element check.
 */
export function cmExactlyOneChild(
  checkChild: CheckElement<TagProps>,
  expected: (ctx: Context) => string,
): CheckHtml<TagProps> {
  return (ctx: Context, node: DOMNode<TagProps>) => {
    const matches: DebuggingInformation[] = [];

    for (const child of node.children) {
      if (checkChild(ctx, child) === true) {
        matches.push(child.definedAt!);
      }
    }

    if (matches.length === 0) {
      warn(
        ctx,
        `Expected exactly one ${expected(ctx)} among the children of this ${
          ctx.fmtCode(node.info.tag)
        } tag, but got none.`,
      );
      ctx.loggingGroup(() => {
        info(
          ctx,
          `Outer ${ctx.fmtCode(node.info.tag)} tag at ${
            ctx.fmtDebuggingInformation(
              node.definedAt!,
            )
          }`,
        );
      });
      return false;
    } else if (matches.length === 1) {
      return true;
    } else {
      warn(
        ctx,
        `Expected exactly one ${expected(ctx)} among the children of this ${
          ctx.fmtCode(node.info.tag)
        } tag, but got ${matches.length}.`,
      );
      ctx.loggingGroup(() => {
        info(
          ctx,
          `Outer ${ctx.fmtCode(node.info.tag)} tag at ${
            ctx.fmtDebuggingInformation(
              node.definedAt!,
            )
          }`,
        );

        for (const match of matches) {
          info(
            ctx,
            `Found ${expected(ctx)} at ${
              ctx.fmtDebuggingInformation(
                match,
              )
            }`,
          );
        }
      });
      return false;
    }
  };
}

/**
 * Passes verification iff among all children at most one passes the given element check.
 */
export function cmAtMostOneChild(
  checkChild: CheckElement<TagProps>,
  expected: (ctx: Context) => string,
): CheckHtml<TagProps> {
  return (ctx: Context, node: DOMNode<TagProps>) => {
    const matches: DebuggingInformation[] = [];

    for (const child of node.children) {
      if (checkChild(ctx, child) === true) {
        matches.push(child.definedAt!);
      }
    }

    if (matches.length <= 1) {
      return true;
    } else {
      warn(
        ctx,
        `Expected at most one ${expected(ctx)} among the children of this ${
          ctx.fmtCode(node.info.tag)
        } tag, but got ${matches.length}.`,
      );
      ctx.loggingGroup(() => {
        info(
          ctx,
          `Outer ${ctx.fmtCode(node.info.tag)} tag at ${
            ctx.fmtDebuggingInformation(
              node.definedAt!,
            )
          }`,
        );

        for (const match of matches) {
          info(
            ctx,
            `Found ${expected(ctx)} at ${
              ctx.fmtDebuggingInformation(
                match,
              )
            }`,
          );
        }
      });
      return false;
    }
  };
}

/**
 * Passes verification iff there are no child elements.
 */
export function cmNoChildElements(
  ctx: Context,
  node: DOMNode<TagProps>,
): boolean {
  if (node.children.length === 0) {
    return true;
  } else {
    warn(
      ctx,
      `Expected no children for this ${ctx.fmtCode(node.info.tag)} tag.`,
    );
    ctx.loggingGroup(() => {
      info(
        ctx,
        `Outer ${ctx.fmtCode(node.info.tag)} tag at ${
          ctx.fmtDebuggingInformation(
            node.definedAt!,
          )
        }`,
      );
    });

    return false;
  }
}

/**
 * Always passes verification.
 */
export function cmTrivial(
  _ctx: Context,
  _node: DOMNode<TagProps>,
): boolean {
  return true;
}

/**
 * Always passes verification, because we chose not to check this.
 */
export function cmUnverified(
  _ctx: Context,
  _node: DOMNode<TagProps>,
): boolean {
  return true;
}

/**
 * Passes verification iff no strict descendant passes the given `forbiddenCm` check.
 */
export function cmNoDescendant(
  forbiddenElements: CheckElement<TagProps>,
  elaboration?: string,
): CheckHtml<TagProps> {
  return (ctx: Context, ancestor: DOMNode<TagProps>) => {
    function checkFunction(ctx: Context, node: DOMNode<TagProps>): boolean {
      if (forbiddenElements(ctx, node) === true) {
        warn(
          ctx,
          `Must have no ${
            ctx.fmtCode(node.info.tag)
          } tag as a descendant of any ${ctx.fmtCode(ancestor.info.tag)} tag${
            elaboration === undefined ? "." : ` like this.`
          }`,
        );

        ctx.loggingGroup(() => {
          if (elaboration) {
            info(ctx, elaboration);
          }
          info(
            ctx,
            `Offending ${ctx.fmtCode(node.info.tag)} descendant tag at ${
              ctx.fmtDebuggingInformation(
                node.definedAt!,
              )
            }`,
          );
          info(
            ctx,
            `Ancestor ${ctx.fmtCode(ancestor.info.tag)} tag at ${
              ctx.fmtDebuggingInformation(
                ancestor.definedAt!,
              )
            }`,
          );
        });

        return false;
      } else {
        for (const child of node.children) {
          if (!checkFunction(ctx, child)) {
            return false;
          }
        }

        return true;
      }
    }

    for (const child of ancestor.children) {
      if (!checkFunction(ctx, child)) {
        return false;
      }
    }

    return true;
  };
}

/**
 * Return `true` if the element is valid, `false` otherwise. If `false`, this function should also log the offending part of the html, using the `warn` (`import { warn } from "../mod.tsx";`) function.
 *
 * The checking function is called with the DOMNode after the children have been checked. Parent links, children, etp, definedAt, attra, and evaledAttrs are all set. The evaledAttrs are available on the descendents, but not on the ancestors.
 */
type CheckHtml<Props extends TagProps> = (
  ctx: Context,
  node: DOMNode<Props>,
) => boolean;

/**
 * The static part of information specific to this kind of element.
 */
export class DOMNodeInfo<Props extends TagProps> {
  /**
   * Return `true` if the element is valid, `false` otherwise. If `false`, this function should also log the offending part of the html, using the `warn` (`import { warn } from "../mod.tsx";`) function.
   *
   * The checking function is called with the DOMNode after the children have been checked. Parent links, children, etp, definedAt, attra, and evaledAttrs are all set. The evaledAttrs are available on the descendents, but not on the ancestors.
   */
  checkContentModel: CheckHtml<Props>;
  /**
   * E.g. "div".
   */
  tag: string;

  constructor(
    tag: string,
    checkContentModel: CheckHtml<Props>,
  ) {
    this.tag = tag;
    this.checkContentModel = checkContentModel;
  }
}

const dummyNodeInfo = new DOMNodeInfo(
  "dummy",
  (_ctx: Context, _node: DOMNode<TagProps>) => true,
);

export type EvaledProps<Props extends TagProps> = {
  [Attr in keyof Props]?: boolean | number | string;
};

export type DOMNode<Props extends TagProps> = {
  info: DOMNodeInfo<Props>;
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

export type AttrRendering<Props extends TagProps> = {
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
    dom: DOMNodeInfo<Attrs>;
    attrs: Attrs;
    attrRendering: AttrRendering<Attrs>;
    isVoid?: boolean;
  },
): Expression {
  return (
    <TreeScope>
      <effect
        fun={(ctx) => {
          const node = getCurrentDOMNode(ctx) as unknown as DOMNode<Attrs>;
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
                  const node = getCurrentDOMNode(ctx) as unknown as DOMNode<
                    Attrs
                  >;

                  // First, sort all children that registered themselves by their ordering in the macromania source code.
                  node.children.sort((
                    childA,
                    childB,
                  ) => (childA.etp!.isStrictlyEarlierThan(childB.etp!)
                    ? -1
                    : 1)
                  );

                  // Now, check our content model.
                  ctx.loggingGroup(() => {
                    withOtherKeys(ctx, [
                      "verify",
                      dom.tag as (keyof LoggingConfig),
                      (`${dom.tag}ContentModel`) as (keyof LoggingConfig),
                    ], () => {
                      if (!dom.checkContentModel(ctx, node)) {
                        logEmptyLine(ctx, "warn");
                      }
                    });
                  });
                  // We are done verifying ourselves.

                  // Finally, register ourselves as children of our parent, so that they can resume *their* verification.
                  if (node.parent) {
                    node.parent.children.push(
                      node as unknown as DOMNode<TagProps>,
                    );
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
            } else if (attr === "data") {
              for (const key in attrVal) {
                exps.push(
                  <>{`data-${key}`}="{attrVal[key]}"</>,
                );
              }
            } else if (attr === "dynamicAttributes") {
              for (const key in (attrVal as DynamicAttributes)) {
                exps.push(
                  <>
                    {key}="<EscapeHtml>
                      {(attrVal as DynamicAttributes)[key]}
                    </EscapeHtml>"
                  </>,
                );
                exps.push(" ");
              }
            } else {
              exps.push(
                <map
                  fun={(_ctx, evaled) => {
                    node.evaledAttrs![attr] = evaled;
                    return evaled;
                  }}
                >
                  {attrName}="<EscapeHtml>
                    {attrRendering[attr]
                      ? attrRendering[attr](ctx, attrVal)
                      : attrVal as Expression}
                  </EscapeHtml>"
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

export function RenderDynamicAttributes(
  { attrs }: { attrs?: DynamicAttributes },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  const exps: Expression[] = [];

  for (const key in attrs) {
    exps.push(" ");
    exps.push(key);
    exps.push(`="`);
    exps.push(
      <EscapeHtml>
        {attrs[key]}
      </EscapeHtml>,
    );
    exps.push(`"`);
  }

  return <>{exps}</>;
}
