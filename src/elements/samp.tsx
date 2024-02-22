import { Expression, Expressions } from "../../deps.ts";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [samp element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element) represents sample or quoted output from another program or computing system.
 */
export function Samp(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="samp"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
