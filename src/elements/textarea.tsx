import { Expression, Expressions } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderNonVoidElement,
  RenderNumber,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { FormEnctype, FormMethod } from "./form.tsx";
import { PopoverTargetAction } from "./input.tsx";

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
  props: TextareaProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="textarea"
      attrs={<RenderTextareaAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderTextareaAttributes(
  { attrs }: { attrs?: TextareaProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      {attrs.autocomplete !== undefined
        ? (
          <RenderExpression
            attr="autocomplete"
            value={<exps x={attrs.autocomplete} />}
          />
        )
        : ""}
      {attrs.cols !== undefined
        ? <RenderNumber attr="cols" value={attrs.cols} />
        : ""}
      {attrs.dirname !== undefined
        ? (
          <RenderExpression
            attr="dirname"
            value={<exps x={attrs.dirname} />}
          />
        )
        : ""}
      {attrs.disabled !== undefined
        ? <RenderBoolean attr="disabled" value={attrs.disabled} />
        : ""}
      {attrs.form !== undefined
        ? (
          <RenderExpression
            attr="form"
            value={<exps x={attrs.form} />}
          />
        )
        : ""}
      {attrs.maxlength !== undefined
        ? <RenderNumber attr="maxlength" value={attrs.maxlength} />
        : ""}
      {attrs.minlength !== undefined
        ? <RenderNumber attr="minlength" value={attrs.minlength} />
        : ""}
      {attrs.name !== undefined
        ? (
          <RenderExpression
            attr="name"
            value={<exps x={attrs.name} />}
          />
        )
        : ""}
      {attrs.placeholder !== undefined
        ? (
          <RenderExpression
            attr="placeholder"
            value={<exps x={attrs.placeholder} />}
          />
        )
        : ""}
      {attrs.readonly !== undefined
        ? <RenderBoolean attr="readonly" value={attrs.readonly} />
        : ""}
      {attrs.required !== undefined
        ? <RenderBoolean attr="required" value={attrs.required} />
        : ""}
      {attrs.rows !== undefined
        ? <RenderNumber attr="rows" value={attrs.rows} />
        : ""}
      {attrs.wrap !== undefined
        ? <RenderEnum attr="wrap" value={attrs.wrap} />
        : ""}
    </>
  );
}
