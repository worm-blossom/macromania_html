import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [kbd element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element) represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).
 */
export function Kbd(
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
  "kbd",
  cmAllPhrasing,
);
