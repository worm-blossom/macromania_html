import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [dd element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element) represents the description, definition, or value, part of a term-description group in a description list ([dl element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)).
 */
export function Dd(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="dd"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
