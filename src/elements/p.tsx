import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_PHRASING_CONTENT,
  CmCategory,
  CmZeroOrMore,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [p element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element) represents a [paragraph](https://html.spec.whatwg.org/multipage/dom.html#paragraph).
 */
export function P(
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
  "p",
  new CmZeroOrMore(new CmCategory(CAT_PHRASING_CONTENT)),
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element",
);
