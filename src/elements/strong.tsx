import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [strong element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element) represents strong importance, seriousness, or urgency for its contents.
 */
export function Strong(
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
  "strong",
  cmAllPhrasing,
);
