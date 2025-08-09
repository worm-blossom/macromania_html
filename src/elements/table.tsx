import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [table element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element) represents data with more than one dimension, in the form of a [table](https://html.spec.whatwg.org/multipage/tables.html#concept-table).

The [table element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element) takes part in the [table model](https://html.spec.whatwg.org/multipage/tables.html#table-model). Tables have rows, columns, and cells given by their descendants. The rows and columns form a grid; a table's cells must completely cover that grid without overlap.
 */
export function Table(
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
  "table",
  cmUnverified,
);
