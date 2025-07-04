import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [summary element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element) represents a summary, caption, or legend for the rest of the contents of the [summary element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element)'s parent [details element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element), if any.
 */
export function Summary(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="summary"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
