import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [section element](https://html.spec.whatwg.org/multipage/sections.html#the-section-element) represents a generic section of a document or application. A section, in this context, is a thematic grouping of content, typically with a heading.
 */
export function Section(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="section"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
