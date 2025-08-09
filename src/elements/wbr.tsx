import type { Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmTrivial,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [wbr element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element) represents a line break opportunity.
 */
export function Wbr(
  props: TagProps,
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
      isVoid
    />
  );
}

const dom = new DOMNodeInfo(
  "wbr",
  cmTrivial,
);
