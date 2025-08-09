import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_BASE,
  CAT_METADATA_CONTENT,
  CAT_TITLE,
  cmAllChildrenPass,
  cmAnd,
  cmAtMostOneChild,
  cmExactlyOneChild,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [head element](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element) represents a collection of metadata for the Document.
 */
export function Head(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom = new DOMNodeInfo(
  "head",
  cmAnd(
    [
      cmAllChildrenPass(CAT_METADATA_CONTENT),
      cmExactlyOneChild(
        CAT_TITLE,
        (ctx: Context) => `${ctx.fmtCode("title")} tag`,
      ),
      cmAtMostOneChild(
        CAT_BASE,
        (ctx: Context) => `${ctx.fmtCode("base")} tag`,
      ),
    ],
  ),
);
