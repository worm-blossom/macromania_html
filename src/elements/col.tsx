import type { Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmTrivial,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Col} macro.
 *
 * https://html.spec.whatwg.org/multipage/tables.html#the-col-element
 */
export type ColProps = {
  /**
   *  Number of columns spanned by the element.
   */
  span?: number;
} & TagProps;

/**
 * If a [col element](https://html.spec.whatwg.org/multipage/tables.html#the-col-element) has a parent and that is a [colgroup element](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element) that itself has a parent that is a [table element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element), then the [col element](https://html.spec.whatwg.org/multipage/tables.html#the-col-element) represents one or more [columns](https://html.spec.whatwg.org/multipage/tables.html#concept-column) in the [column group](https://html.spec.whatwg.org/multipage/tables.html#concept-column-group) represented by that [colgroup](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element).
 */
export function Col(
  props: ColProps,
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
      isVoid
    />
  );
}

const dom = new DOMNodeInfo(
  "col",
  cmTrivial,
);
