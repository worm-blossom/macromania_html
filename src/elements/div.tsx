import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  cmAllOptgroupElementInnerContentElements,
  cmAllOptionElementInnerContentElements,
  cmAllSelectElementInnerContentElements,
  type DOMNode,
  DOMNodeInfo,
  logContentModelViolation,
} from "../contentModel.tsx";
import { info, warn } from "../mod.tsx";

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

function divContentModel(
  ctx: Context,
  node: DOMNode<TagProps>,
): boolean {
  // If the element is a child of a dl element: One or more dt elements followed by one or more dd elements, optionally intermixed with script-supporting elements.
  // Otherwise, if the element is a descendant of an option element: Zero or more option element inner content elements.
  // Otherwise, if the element is a descendant of an optgroup element: Zero or more optgroup element inner content elements.
  // Otherwise, if the element is a descendant of a select element: Zero or more select element inner content elements.
  // Otherwise: flow content.
  if (node.parent === undefined) {
    return cmAllFlow(ctx, node);
  } else if (node.parent.info.tag === "dl") {
    // If the element is a child of a dl element: One or more dt elements followed by one or more dd elements, optionally intermixed with script-supporting elements.

    let endingOnDd = false;

    for (const child of node.children) {
      const tag = child.info.tag;

      // Always ignore script-supporting elements.
      if (["script", "template"].includes(tag)) {
        continue;
      }

      if (tag === "dd") {
        endingOnDd = true;
      } else if (tag === "dt") {
        endingOnDd = false;
      } else {
        logContentModelViolation(ctx, node, child);
        return false;
      }
    }

    if (endingOnDd) {
      return true;
    } else {
      warn(
        ctx,
        `When a ${ctx.fmtCode("dl")} tag has a ${
          ctx.fmtCode("dt")
        } child tag, then its final child tag must be a ${
          ctx.fmtCode("dd")
        } tag.`,
      );
      ctx.loggingGroup(() => {
        info(
          ctx,
          `Outer ${ctx.fmtCode("dl")} tag at ${
            ctx.fmtDebuggingInformation(
              node.definedAt!,
            )
          }`,
        );
      });
      return false;
    }
  } else {
    // See whether the div has a funny ancestor.
    let n: DOMNode<TagProps> | undefined = node.parent;

    while (n !== undefined) {
      if (n.info.tag === "option") {
        // If the element is a descendant of an option element: Zero or more option element inner content elements.
        return cmAllOptionElementInnerContentElements(ctx, node);
      } else if (n.info.tag === "optgroup") {
        // If the element is a descendant of an optgroup element: Zero or more optgroup element inner content elements.
        return cmAllOptgroupElementInnerContentElements(ctx, node);
      } else if (n.info.tag === "select") {
        // If the element is a descendant of of a select element: Zero or more select element inner content elements.
        return cmAllSelectElementInnerContentElements(ctx, node);
      } else {
        n = n.parent;
      }
    }

    // Reached the root of the DOM tree without encountering a funny ancestor. Hence entering case:
    // Otherwise: flow content.
    return cmAllFlow(ctx, node);
  }
}

const dom = new DOMNodeInfo(
  "div",
  divContentModel,
);
