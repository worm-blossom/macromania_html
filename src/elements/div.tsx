import { Expression, Children, Context } from "macromania";
import { renderGlobalAttributes, RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";
import { BuildVerificationDOM, ContentModel, DOMNode, CAT_FLOW_CONTENT, DOMNodeInfo } from "../contentModel.tsx";
import { info } from "../mod.tsx";

/**
 * The [div element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element) has no special meaning at all. It represents its children.
 */
export function Div(
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

const divContentModel: ContentModel = {
  /**
   * Returns true iff the children are valid. Does not log anything.
   */
  checkChildren: (ctx: Context, children: DOMNode<TagProps>[], self: DOMNode<TagProps>) => {
    // If the element is a child of a dl element: one or more dt elements followed by one or more dd elements, optionally intermixed with script-supporting elements.
    // If the element is not a child of a dl element: flow content.

    if (self)

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
  "div",
  divContentModel,
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element",
);
