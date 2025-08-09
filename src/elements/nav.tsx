import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [nav element](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.
 */
export function Nav(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom = new DOMNodeInfo(
  "nav",
  cmAllFlow,
);
