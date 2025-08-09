import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [code element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element) represents a fragment of computer code. This could be an XML element name, a filename, a computer program, or any other string that a computer would recognize.
 */
export function Code(
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
  "code",
  cmAllPhrasing,
);
