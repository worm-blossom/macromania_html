import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [section element](https://html.spec.whatwg.org/multipage/sections.html#the-section-element) represents a generic section of a document or application. A section, in this context, is a thematic grouping of content, typically with a heading.
 */
export function Section(
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
  "section",
  cmAllFlow,
);
