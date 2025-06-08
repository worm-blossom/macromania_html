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
 * Props for the {@linkcode Select} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element
 */
export type SelectProps = {
  autocomplete?: Expression;
  disabled?: boolean;
  form?: Expression;
  multiple?: boolean;
  name?: Expression;
  required?: boolean;
  size?: number;
} & TagProps;

/**
 * The [select element](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) represents a control for selecting amongst a set of options.
 */
export function Select(
  props: SelectProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="select"
      attrs={<RenderSelectAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderSelectAttributes(
  { attrs }: { attrs?: SelectProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.autocomplete !== undefined
        ? (
          <RenderExpression
            attr="autocomplete"
            value={<exps x={attrs.autocomplete} />}
          />
        )
        : ""}
      {attrs.disabled !== undefined
        ? <RenderBoolean attr="disabled" value={attrs.disabled} />
        : ""}
      {attrs.form !== undefined
        ? <RenderExpression attr="form" value={<exps x={attrs.form} />} />
        : ""}
      {attrs.multiple !== undefined
        ? <RenderBoolean attr="multiple" value={attrs.multiple} />
        : ""}
      {attrs.name !== undefined
        ? <RenderExpression attr="name" value={<exps x={attrs.name} />} />
        : ""}
      {attrs.required !== undefined
        ? <RenderBoolean attr="required" value={attrs.required} />
        : ""}
      {attrs.size !== undefined
        ? <RenderNumber attr="size" value={attrs.size} />
        : ""}
    </>
  );
}
