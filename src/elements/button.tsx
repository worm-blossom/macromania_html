import { Expression, Expressions } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderExpressions,
  RenderNonVoidElement,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { FormEnctype, FormMethod } from "./form.tsx";
import { PopoverTargetAction } from "./input.tsx";

export type ButtonType = "submit" | "reset" | "button";

/**
 * Props for the {@linkcode Button} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element
 */
export type ButtonProps = {
  command?: Expressions;
  commandfor?: Expressions;
  disabled?: boolean;
  form?: Expressions;
  formaction?: Expressions;
  formenctype?: FormEnctype;
  formmethod?: FormMethod;
  formnovalidate?: boolean;
  formtarget?: Expressions;
  name?: Expressions;
  popovertarget?: Expressions;
  popovertargetaction?: PopoverTargetAction;
  type_?: ButtonType;
  value?: Expressions;
} & TagProps;

/**
 * The [button element](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element) represents a button labeled by its contents.
 */
export function Button(
  props: ButtonProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="button"
      attrs={<RenderButtonAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderButtonAttributes(
  { attrs }: { attrs?: ButtonProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.command !== undefined
        ? <RenderExpressions attr="command" value={attrs.command} />
        : ""}
      {attrs.commandfor !== undefined
        ? <RenderExpressions attr="commandfor" value={attrs.commandfor} />
        : ""}
      {attrs.disabled !== undefined
        ? <RenderBoolean attr="disabled" value={attrs.disabled} />
        : ""}
      {attrs.form !== undefined
        ? <RenderExpression attr="form" value={<exps x={attrs.form} />} />
        : ""}
      {attrs.formaction !== undefined
        ? (
          <RenderExpression
            attr="formaction"
            value={<exps x={attrs.formaction} />}
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
            value={<exps x={attrs.formtarget} />}
          />
        )
        : ""}
      {attrs.name !== undefined
        ? <RenderExpression attr="name" value={<exps x={attrs.name} />} />
        : ""}
      {attrs.popovertarget !== undefined
        ? (
          <RenderExpression
            attr="popovertarget"
            value={<exps x={attrs.popovertarget} />}
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
      {attrs.type_ !== undefined
        ? <RenderExpression attr="type" value={<exps x={attrs.type_} />} />
        : ""}
      {attrs.value !== undefined
        ? <RenderExpression attr="value" value={<exps x={attrs.value} />} />
        : ""}
    </>
  );
}
