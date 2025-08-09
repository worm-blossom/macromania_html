import type { Children, Expression } from "macromania";

import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Blockquote} macro.
 *
 * https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element
 */
export type BlockquoteProps = {
  /**
   * Content inside a [blockquote](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element) must be quoted from another source, whose address, if it has one, may be cited in the [cite attribute](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-blockquote-cite).
   *
   * If the [cite attribute](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-blockquote-cite) is present, it must be a valid URL potentially surrounded by spaces. To obtain the corresponding citation link, the value of the attribute must be [parsed](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url) relative to the element's [node document](https://dom.spec.whatwg.org/#concept-node-document). User agents may allow users to follow such citation links, but they are primarily intended for private use (e.g., by server-side scripts collecting statistics about a site's use of quotations), not for readers.
   */
  cite?: Expression;
} & TagProps;

/**
 * The [blockquote element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element) represents a section that is quoted from another source.
 */
export function Blockquote(
  props: BlockquoteProps & { children?: Children },
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
  "blockquote",
  cmAllFlow,
);
