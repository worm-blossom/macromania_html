import type { Children, Expression } from "macromania";
import {
  attrUnorderedSetOfUniqueSpaceSeparatedTokens,
  renderGlobalAttributes,
  type TagProps,
} from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Td} macro.
 *
 * https://html.spec.whatwg.org/multipage/tables.html#the-td-element
 */
export type TdProps = {
  /**
   *  Number of columns that the cell is to span.
   */
  colspan?: number;
  /**
   *  Number of rows that the cell is to span.
   */
  rowspan?: number;
  /**
   * The header cells for this cell. When given as an array, the arrays are joined by spaces.
   */
  headers?: Expression | Expression[];
} & TagProps;

/**
 * The [td element](https://html.spec.whatwg.org/multipage/tables.html#the-td-element) represents a data [cell](https://html.spec.whatwg.org/multipage/tables.html#concept-cell) in a table.
 */
export function Td(
  props: TdProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderTdAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const renderTdAttributes = {
  ...renderGlobalAttributes,
  headers: attrUnorderedSetOfUniqueSpaceSeparatedTokens,
};

const dom = new DOMNodeInfo(
  "td",
  cmAllFlow,
);
