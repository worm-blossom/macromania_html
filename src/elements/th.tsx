import type { Children, Expression } from "macromania";
import {
  attrUnorderedSetOfUniqueSpaceSeparatedTokens,
  renderGlobalAttributes,
  type TagProps,
} from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_NOT_IN_TH,
  cmAllFlow,
  cmAnd,
  cmNoDescendant,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Th} macro.
 *
 * https://html.spec.whatwg.org/multipage/tables.html#the-th-element
 */
export type ThProps = {
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
  /**
   * Specifies which cells the header cell applies to.
   */
  scope?: "row" | "col" | "rowgroup" | "colgroup" | "auto";
  /**
   * Alternative label to use for the header cell when referencing the cell in other contexts.
   */
  abbr?: Expression;
} & TagProps;

/**
 * The [th element](https://html.spec.whatwg.org/multipage/tables.html#the-th-element) represents a header [cell](https://html.spec.whatwg.org/multipage/tables.html#concept-cell) in a table.
 */
export function Th(
  props: ThProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderThAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const renderThAttributes = {
  ...renderGlobalAttributes,
  headers: attrUnorderedSetOfUniqueSpaceSeparatedTokens,
};

const dom = new DOMNodeInfo(
  "th",
  cmAnd([cmAllFlow, cmNoDescendant(CAT_NOT_IN_TH)]),
);
