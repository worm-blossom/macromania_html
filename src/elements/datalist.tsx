import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [datalist element](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element) represents a set of [option elements](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element) that represent predefined options for other controls. In the rendering, the [datalist element](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element) represents nothing and it, along with its children, should be hidden.
 */
export function Datalist(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="datalist"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
