import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [strong element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element) represents strong importance, seriousness, or urgency for its contents.
 */
export function Strong(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="strong"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
