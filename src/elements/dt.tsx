import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [dt element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element) represents the term, or name, part of a term-description group in a description list ([dl element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)).
 */
export function Dt(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="dt"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
