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
 * The [body element](https://html.spec.whatwg.org/multipage/sections.html#sections) represents the contents of the document.
 */
export function Body(
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
  "body",
  new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-body-element",
);
