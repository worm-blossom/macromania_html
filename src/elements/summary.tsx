import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [summary element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element) represents a summary, caption, or legend for the rest of the contents of the [summary element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element)'s parent [details element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element), if any.
 */
export function Summary(
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
  "summary",
  cmUnverified,
);
