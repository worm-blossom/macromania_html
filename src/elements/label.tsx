import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Label} macro.
 *
 * https://html.spec.whatwg.org/multipage/forms.html#the-label-element
 */
export type LabelProps = {
  /**
   * Associate the label with form control.
   */
  for_?: Expression;
} & TagProps;

/**
 * The [label element](https://html.spec.whatwg.org/multipage/forms.html#the-label-element) represents a caption in a user interface.
 */
export function Label(
  props: LabelProps & { children?: Children },
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
  "label",
  cmUnverified,
);
