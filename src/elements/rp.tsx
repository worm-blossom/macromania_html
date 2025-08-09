import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmNoChildElements,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [rp element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element) can be used to provide parentheses or other content around a ruby text component of a ruby annotation, to be shown by user agents that don't support ruby annotations.
 */
export function Rp(
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
  "rp",
  cmNoChildElements,
);
