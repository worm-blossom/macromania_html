import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [code element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element) represents a fragment of computer code. This could be an XML element name, a filename, a computer program, or any other string that a computer would recognize.
 */
export function Code(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="code"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
