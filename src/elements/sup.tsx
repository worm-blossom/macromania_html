import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [sup element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements) represents a superscript.
 */
export function Sup(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="sup"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
