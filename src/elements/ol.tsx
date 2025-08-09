import type { Children, Expression } from "macromania";

import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_LI_OR_SCRIPT_SUPPORTING,
  cmAllChildrenPass,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Ol} macro.
 *
 * https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element
 */
export type OlProps = {
  /**
   * The [reversed attribute](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-reversed) indicates that the list is a descending list (..., 3, 2, 1). If the attribute is omitted, the list is an ascending list (1, 2, 3, ...).
   */
  reversed?: boolean;
  /**
   * The [start attribute](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-start), if present, must be a [valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer). It is used to determine the [starting value](https://html.spec.whatwg.org/multipage/grouping-content.html#concept-ol-start) of the list.
   */
  start?: number;
  /**
   * The [type attribute](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type) can be used to specify the kind of marker to use in the list, in the cases where that matters (e.g. because items are to be referenced by their number/letter).
   */
  type?:
    /**
     * Decimal numbers.
     */
    | "1"
    /**
     * Lowercase latin alphabet.
     */
    | "a"
    /**
     * Uppercase latin alphabet.
     */
    | "A"
    /**
     * Lowercase roman numerals.
     */
    | "i"
    /**
     * Uppercase roman numerals.
     */
    | "I";
} & TagProps;

/**
 * The [ol element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element) represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.
 *
 * The items of the list are the [li element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element) child nodes of the [ol element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element), in tree order.
 */
export function Ol(
  props: OlProps & { children?: Children },
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
  "ol",
  cmAllChildrenPass(CAT_LI_OR_SCRIPT_SUPPORTING),
);
