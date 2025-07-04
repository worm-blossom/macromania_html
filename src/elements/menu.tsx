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
 * The [menu element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element) represents a toolbar consisting of its contents, in the form of an unordered list of items (represented by [li elements](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)), each of which represents a command that the user can perform or activate.
 */
export function Menu(
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
  "menu",
  new CmZeroOrMore(
    new CmZeroOrMore(
      new CmChoice([
        new CmCategory(CAT_LI),
        new CmCategory(CAT_SCRIPT_SUPPORTING),
      ]),
    ),
  ),
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element",
);
