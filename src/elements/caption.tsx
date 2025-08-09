import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_TABLE,
  cmAllPhrasing,
  cmAnd,
  cmNoDescendant,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [caption element](https://html.spec.whatwg.org/multipage/tables.html#the-caption-element) represents the title of the [table](https://html.spec.whatwg.org/multipage/tables.html#the-table-element) that is its parent, if it has a parent and that is a [table element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element).
 *
 * When a [table element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element) is the only content in a [figure element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element) other than the [figcaption](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element), the [caption element](https://html.spec.whatwg.org/multipage/tables.html#the-caption-element) should be omitted in favor of the [figcaption](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element).
 */
export function Caption(
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
  "caption",
  cmAnd([cmAllPhrasing, cmNoDescendant(CAT_TABLE)]),
);
