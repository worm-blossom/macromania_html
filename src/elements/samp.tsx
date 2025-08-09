import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [samp element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element) represents sample or quoted output from another program or computing system.
 */
export function Samp(
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
  "samp",
  cmAllPhrasing,
);
