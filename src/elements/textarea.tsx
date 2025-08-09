import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmNoChildElements,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Textarea} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element
 */
export type TextareaProps = {
  autocomplete?: Expression;
  cols?: number;
  dirname?: Expression;
  disabled?: boolean;
  form?: Expression;
  maxlength?: number;
  minlength?: number;
  name?: Expression;
  placeholder?: Expression;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  wrap?: "soft" | "hard";
} & TagProps;

/**
 * The [textarea element](https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element) represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.
 */
export function Textarea(
  props: TextareaProps & { children?: Children },
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
  "textarea",
  cmNoChildElements,
);
