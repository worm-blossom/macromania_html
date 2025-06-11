import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [body element](https://html.spec.whatwg.org/multipage/sections.html#sections) represents the contents of the document.
 */
export function Body(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="body"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
