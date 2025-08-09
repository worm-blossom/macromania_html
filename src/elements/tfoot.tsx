import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_TR_OR_SCRIPT_SUPPORTING,
  cmAllChildrenPass,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [tfoot element](https://html.spec.whatwg.org/multipage/tables.html#the-tfoot-element) represents the [block](https://html.spec.whatwg.org/multipage/tables.html#concept-row-group) of [rows](https://html.spec.whatwg.org/multipage/tables.html#concept-row) that consist of the column summaries (footers) for the parent [table element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element), if the [tfoot element](https://html.spec.whatwg.org/multipage/tables.html#the-tfoot-element) has a parent and it is a [table](https://html.spec.whatwg.org/multipage/tables.html#the-table-element).
 */
export function Tfoot(
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
  "tbody",
  cmAllChildrenPass(CAT_TR_OR_SCRIPT_SUPPORTING),
);
