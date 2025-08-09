import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_NOT_IN_ADDRESS,
  cmAllFlow,
  cmAnd,
  cmNoDescendant,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [address element](https://html.spec.whatwg.org/multipage/sections.html#the-address-element) represents the contact information for its nearest [article](https://html.spec.whatwg.org/multipage/sections.html#the-article-element) or [body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element) element ancestor. If that is the body element, then the contact information applies to the document as a whole.
 */
export function Address(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={new DOMNodeInfo(
        "address",
        cmAnd([
          cmAllFlow,
          cmNoDescendant(CAT_NOT_IN_ADDRESS),
        ]),
      )}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}
