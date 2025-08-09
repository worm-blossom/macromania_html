import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [legend element](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element) a caption for the rest of the contents of the [legend element](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element)'s parent [fieldset element](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element), if any.
 */
export function Legend(
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
  "legend",
  cmUnverified,
);
