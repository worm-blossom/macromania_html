import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Colgroup} macro.
 *
 * https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element
 */
export type ColgroupProps = {
  /**
   *  Number of columns spanned by the element.
   */
  span?: number;
} & TagProps;

/**
 * The [colgroup element](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element) represents a [group](https://html.spec.whatwg.org/multipage/tables.html#concept-column-group) of one or more [columns](https://html.spec.whatwg.org/multipage/tables.html#concept-column) in the [table](https://html.spec.whatwg.org/multipage/tables.html#the-table-element) that is its parent, if it has a parent and that is a [table](https://html.spec.whatwg.org/multipage/tables.html#the-table-element) element.
 */
export function Colgroup(
  props: ColgroupProps & { children?: Children },
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
  "colgroup",
  cmUnverified,
);
