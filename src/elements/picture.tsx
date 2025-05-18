import { Expression, Expressions } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [picture element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element) element is a container which provides multiple sources to its contained [img element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children
 */
export function Picture(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="picture"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
