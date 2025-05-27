import { Expression, Expressions } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [legend element](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element) a caption for the rest of the contents of the [legend element](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element)'s parent [fieldset element](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element), if any.
 */
export function Legend(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="legend"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
