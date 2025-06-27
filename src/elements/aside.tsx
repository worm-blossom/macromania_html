import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FLOW_CONTENT,
  CmCategory,
  CmZeroOrMore,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [aside element](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element) represents a section of a page that consists of content that is tangentially related to the content around the [aside element](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element), and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.

The element can be used for typographical effects like pull quotes or sidebars, for advertising, for groups of [nav elements](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element), and for other content that is considered separate from the main content of the page.
 */
export function Aside(
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
  "aside",
  new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-aside-element",
);
