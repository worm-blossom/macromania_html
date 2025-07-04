import { Expression, Children } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderChildren,
  RenderNonVoidElement,
  RenderNumber,
  RenderSpaceSeparatedList,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";

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
    <RenderNonVoidElement
      name="th"
      attrs={<RenderThAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderThAttributes(
  { attrs }: { attrs?: ThProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.colspan !== undefined
        ? <RenderNumber attr="colspan" value={attrs.colspan} />
        : ""}
      {attrs.rowspan !== undefined
        ? <RenderNumber attr="rowspan" value={attrs.rowspan} />
        : ""}
      {attrs.headers !== undefined
        ? <RenderSpaceSeparatedList attr="headers" value={attrs.headers} />
        : ""}
      {attrs.scope !== undefined
        ? <RenderEnum attr="scope" value={attrs.scope} />
        : ""}
      {attrs.abbr !== undefined
        ? <RenderChildren attr="abbr" value={attrs.abbr} />
        : ""}
    </>
  );
}
