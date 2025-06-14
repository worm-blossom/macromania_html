import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [address element](https://html.spec.whatwg.org/multipage/sections.html#the-address-element) represents the contact information for its nearest [article](https://html.spec.whatwg.org/multipage/sections.html#the-article-element) or [body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element) element ancestor. If that is the body element, then the contact information applies to the document as a whole.
 */
export function Address(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="address"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
