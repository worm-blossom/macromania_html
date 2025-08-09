import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_TD_OR_TH_OR_SCRIPT_SUPPORTING,
  cmAllChildrenPass,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [tr element](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element) represents a [row](https://html.spec.whatwg.org/multipage/tables.html#concept-row) of [cells](https://html.spec.whatwg.org/multipage/tables.html#concept-cell) in a [table](https://html.spec.whatwg.org/multipage/tables.html#concept-table).
 */
export function Tr(
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
  cmAllChildrenPass(CAT_TD_OR_TH_OR_SCRIPT_SUPPORTING),
);
