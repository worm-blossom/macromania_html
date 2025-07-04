import { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_LI,
  CAT_SCRIPT_SUPPORTING,
  CmCategory,
  CmChoice,
  CmZeroOrMore,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [ul element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element) represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.
 *
 * The items of the list are the [li element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element) child nodes of the [ul element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element).
 */
export function Ul(
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
  "ul",
  new CmZeroOrMore(
    new CmZeroOrMore(
      new CmChoice([
        new CmCategory(CAT_LI),
        new CmCategory(CAT_SCRIPT_SUPPORTING),
      ]),
    ),
  ),
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element",
);
