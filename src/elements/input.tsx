import { Expression, Children } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderNonVoidElement,
  RenderNumber,
  RenderVoidElement,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { FormEnctype, FormMethod } from "./form.tsx";

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
    <RenderVoidElement
      name="input"
      attrs={<RenderInputAttributes attrs={props} />}
    />
  );
}

function RenderInputAttributes(
  { attrs }: { attrs?: InputProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.type_ !== undefined
        ? <RenderEnum attr="type" value={attrs.type_} />
        : ""}
      {attrs.accept !== undefined
        ? <RenderExpression attr="accept" value={attrs.accept} />
        : ""}
      {attrs.alpha !== undefined
        ? <RenderBoolean attr="alpha" value={attrs.alpha} />
        : ""}
      {attrs.alt !== undefined
        ? <RenderExpression attr="alt" value={attrs.alt} />
        : ""}
      {attrs.autocomplete !== undefined
        ? (
          <RenderExpression
            attr="autocomplete"
            value={attrs.autocomplete}
          />
        )
        : ""}
      {attrs.checked !== undefined
        ? <RenderBoolean attr="checked" value={attrs.checked} />
        : ""}
      {attrs.colorspace !== undefined
        ? <RenderEnum attr="colorspace" value={attrs.colorspace} />
        : ""}
      {attrs.dirname !== undefined
        ? <RenderExpression attr="dirname" value={attrs.dirname} />
        : ""}
      {attrs.disabled !== undefined
        ? <RenderBoolean attr="disabled" value={attrs.disabled} />
        : ""}
      {attrs.form !== undefined
        ? <RenderExpression attr="form" value={attrs.form} />
        : ""}
      {attrs.formaction !== undefined
        ? (
          <RenderExpression
            attr="formaction"
            value={attrs.formaction}
          />
        )
        : ""}
      {attrs.formenctype !== undefined
        ? <RenderEnum attr="formenctype" value={attrs.formenctype} />
        : ""}
      {attrs.formmethod !== undefined
        ? <RenderEnum attr="formmethod" value={attrs.formmethod} />
        : ""}
      {attrs.formnovalidate !== undefined
        ? <RenderBoolean attr="formnovalidate" value={attrs.formnovalidate} />
        : ""}
      {attrs.formtarget !== undefined
        ? (
          <RenderExpression
            attr="formtarget"
            value={attrs.formtarget}
          />
        )
        : ""}
      {attrs.height !== undefined
        ? <RenderNumber attr="height" value={attrs.height} />
        : ""}
      {attrs.list !== undefined
        ? <RenderExpression attr="list" value={attrs.list} />
        : ""}
      {attrs.max !== undefined
        ? <RenderExpression attr="max" value={attrs.max} />
        : ""}
      {attrs.maxlength !== undefined
        ? <RenderNumber attr="maxlength" value={attrs.maxlength} />
        : ""}
      {attrs.min !== undefined
        ? <RenderExpression attr="min" value={attrs.min} />
        : ""}
      {attrs.minlength !== undefined
        ? <RenderNumber attr="minlength" value={attrs.minlength} />
        : ""}
      {attrs.multiple !== undefined
        ? <RenderBoolean attr="multiple" value={attrs.multiple} />
        : ""}
      {attrs.name !== undefined
        ? <RenderExpression attr="name" value={attrs.name} />
        : ""}
      {attrs.pattern !== undefined
        ? <RenderExpression attr="pattern" value={attrs.pattern} />
        : ""}
      {attrs.placeholder !== undefined
        ? (
          <RenderExpression
            attr="placeholder"
            value={attrs.placeholder}
          />
        )
        : ""}
      {attrs.popovertarget !== undefined
        ? (
          <RenderExpression
            attr="popovertarget"
            value={attrs.popovertarget}
          />
        )
        : ""}
      {attrs.popovertargetaction !== undefined
        ? (
          <RenderEnum
            attr="popovertargetaction"
            value={attrs.popovertargetaction}
          />
        )
        : ""}
      {attrs.readonly !== undefined
        ? <RenderBoolean attr="readonly" value={attrs.readonly} />
        : ""}
      {attrs.required !== undefined
        ? <RenderBoolean attr="required" value={attrs.required} />
        : ""}
      {attrs.size !== undefined
        ? <RenderNumber attr="size" value={attrs.size} />
        : ""}
      {attrs.src !== undefined
        ? <RenderExpression attr="src" value={attrs.src} />
        : ""}
      {attrs.step !== undefined
        ? <RenderExpression attr="step" value={attrs.step} />
        : ""}
      {attrs.value !== undefined
        ? <RenderExpression attr="value" value={attrs.value} />
        : ""}
      {attrs.width !== undefined
        ? <RenderNumber attr="width" value={attrs.width} />
        : ""}
    </>
  );
}
