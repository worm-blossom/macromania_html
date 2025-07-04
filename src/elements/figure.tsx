import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FLOW_CONTENT,
  type ContentModel,
  type DOMNode,
  DOMNodeInfo,
} from "../contentModel.tsx";
import { info } from "../mod.tsx";

/**
 * The [figure element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element) represents some [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2), optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
 */
export function Figure(
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

const figureContentModel: ContentModel = {
  /**
   * Returns true iff the children are valid. Does not log anything.
   */
  checkChildren: (ctx: Context, children: DOMNode<TagProps>[]) => {
    // Either: one figcaption element followed by flow content.
    // Or: flow content followed by one figcaption element.
    // Or: flow content.

    let captionCount = 0;

    for (const child of children) {
      if (child.info.tag === "figcaption") {
        captionCount += 1;

        if (captionCount > 1) {
          return false;
        }
      } else {
        if (!CAT_FLOW_CONTENT.belongsToCategory(ctx, child)) {
          return false;
        }
      }
    }

    return true;
  },

  /**
   * Log with the `info` function a human-friendly description of what was expected (and optionally, where things went wrong).
   */
  expected: (ctx: Context, _children: DOMNode<TagProps>[]) => {
    info(
      ctx,
      `any amount of flow content and zero or one ${
        ctx.fmtCode("figcaption")
      } elements anywhere`,
    );
  },
};

const dom = new DOMNodeInfo(
  "figure",
  figureContentModel,
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element",
);
