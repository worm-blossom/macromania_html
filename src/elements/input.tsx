import type { Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import type { FormEnctype, FormMethod } from "./form.tsx";
import {
  BuildVerificationDOM,
  cmTrivial,
  DOMNodeInfo,
} from "../contentModel.tsx";

export type InputType =
  | "hidden"
  | "text"
  | "search"
  | "tel"
  | "url"
  | "email"
  | "password"
  | "date"
  | "month"
  | "week"
  | "time"
  | "datetime-local"
  | "number"
  | "range"
  | "color"
  | "checkbox"
  | "radio"
  | "file"
  | "submit"
  | "image"
  | "reset"
  | "button";

export type PopoverTargetAction = "toggle" | "show" | "hide";

/**
 * Props for the {@linkcode Input} macro.
 *
 * https://html.spec.whatwg.org/multipage/input.html#the-input-element
 */
export type InputProps = {
  type_?: InputType;
  accept?: Expression;
  alpha?: boolean;
  alt?: Expression;
  autocomplete?: Expression;
  checked?: boolean;
  colorspace?: "limited-srgb" | "display-p3";
  dirname?: Expression;
  disabled?: boolean;
  form?: Expression;
  formaction?: Expression;
  formenctype?: FormEnctype;
  formmethod?: FormMethod;
  formnovalidate?: boolean;
  formtarget?: Expression;
  height?: number;
  list?: Expression;
  max?: Expression;
  maxlength?: number;
  min?: Expression;
  minlength?: number;
  multiple?: boolean;
  name?: Expression;
  pattern?: Expression;
  placeholder?: Expression;
  popovertarget?: Expression;
  popovertargetaction?: PopoverTargetAction;
  readonly?: boolean;
  required?: boolean;
  size?: number;
  src?: Expression;
  step?: Expression;
  value?: Expression;
  width?: number;
} & TagProps;

/**
 * The [input element](https://html.spec.whatwg.org/multipage/input.html#the-input-element) represents a typed data field, usually with a form control to allow the user to edit the data.
 */
export function Input(
  props: InputProps,
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
  "input",
  cmTrivial,
);
