import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_BASE,
  CAT_METADATA_CONTENT,
  CAT_TITLE,
  CmAnd,
  CmCategory,
  CmContainsAtMostOne,
  CmContainsExactlyOne,
  CmOneOrMore,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [head element](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element) represents a collection of metadata for the Document.
 */
export function Head(
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
  "head",
  new CmAnd([
    new CmOneOrMore(new CmCategory(CAT_METADATA_CONTENT)),
    new CmContainsExactlyOne(new CmCategory(CAT_TITLE)),
    new CmContainsAtMostOne(new CmCategory(CAT_BASE)),
  ]),
  "https://html.spec.whatwg.org/multipage/semantics.html#the-head-element",
);
