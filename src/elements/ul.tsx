import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [ul element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element) represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.
 *
 * The items of the list are the [li element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element) child nodes of the [ul element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element).
 */
export function Ul(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="ul"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
