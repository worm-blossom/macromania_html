import { Expression, Children } from "macromania";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";

/**
 * The [nav element](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.
 */
export function Nav(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="nav"
      attrs={<RenderGlobalAttributes attrs={props} />}
      children={props.children}
    />
  );
}
