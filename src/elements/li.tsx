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
 * Props for the {@linkcode Li} macro.
 *
 * https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element
 */
export type LiProps = {
  /**
   * The [value attribute](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-li-value), if present, must be a [valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer). It is used to determine the [ordinal value](https://html.spec.whatwg.org/multipage/grouping-content.html#ordinal-value) of the list item, when the [li](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)'s [list owner](https://html.spec.whatwg.org/multipage/grouping-content.html#list-owner) is an [ol element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element).
   */
  value?: number;
} & TagProps;

/**
 * The [li element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element) represents a list item. If its parent element is an [ol](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element), [ul](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element), or [menu](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element) element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other [li element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element).
 */
export function Li(
  props: LiProps & { children?: Children },
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
  "li",
  new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element",
);
