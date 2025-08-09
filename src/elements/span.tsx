import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllOptionElementInnerContentElements,
  cmAllPhrasing,
  type DOMNode,
  DOMNodeInfo,
  logContentModelViolation,
} from "../contentModel.tsx";

/**
 * The [span element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element) doesn't mean anything on its own, but can be useful when used together with the [global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes), e.g. [class](https://html.spec.whatwg.org/multipage/dom.html#classes), [lang](https://html.spec.whatwg.org/multipage/dom.html#attr-lang), or [dir](https://html.spec.whatwg.org/multipage/dom.html#attr-dir).
 */
export function Span(
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

function spanContentModel(
  ctx: Context,
  node: DOMNode<TagProps>,
): boolean {
  // If the element is a descendant of an option element: Zero or more option element inner content elements, except div elements.
  // Otherwise: Phrasing content.
  if (node.parent === undefined) {
    return cmAllPhrasing(ctx, node);
  } else {
    // See whether the span has an option element ancestor.
    let n: DOMNode<TagProps> | undefined = node.parent;

    while (n !== undefined) {
      if (n.info.tag === "option") {
        // If the element is a descendant of an option element: Zero or more option element inner content elements, except div elements.
        for (const child of node.children) {
          if (child.info.tag === "div") {
            logContentModelViolation(
              ctx,
              node,
              child,
              `A ${ctx.fmtCode("span")} tag whose ancestors include an ${
                ctx.fmtCode("option")
              } tag must not contain any ${ctx.fmtCode("div")} tags.`,
            );
            return false;
          }
        }

        return cmAllOptionElementInnerContentElements(ctx, node);
      } else {
        n = n.parent;
      }
    }

    // Reached the root of the DOM tree without encountering an option element ancestor. Hence entering case:
    // Otherwise: Phrasing content.
    return cmAllPhrasing(ctx, node);
  }
}

const dom = new DOMNodeInfo(
  "span",
  spanContentModel,
);
