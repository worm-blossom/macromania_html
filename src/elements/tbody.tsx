import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_TR_OR_SCRIPT_SUPPORTING,
  cmAllChildrenPass,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [tbody element](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element) represents a [block](https://html.spec.whatwg.org/multipage/tables.html#concept-row-group) of [rows](https://html.spec.whatwg.org/multipage/tables.html#concept-row) that consist of a body of data for the parent [table element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element), if the [tbody element](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element) has a parent and it is a [table](https://html.spec.whatwg.org/multipage/tables.html#the-table-element).
 */
export function Tbody(
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
