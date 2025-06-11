import { Expression, Children } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderChildren,
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
  command?: Expression;
  commandfor?: Expression;
  disabled?: boolean;
  form?: Expression;
  formaction?: Expression;
  formenctype?: FormEnctype;
  formmethod?: FormMethod;
  formnovalidate?: boolean;
  formtarget?: Expression;
  name?: Expression;
  popovertarget?: Expression;
  popovertargetaction?: PopoverTargetAction;
  type_?: ButtonType;
  value?: Expression;
} & TagProps;

/**
 * The [button element](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element) represents a button labeled by its contents.
 */
export function Button(
  props: ButtonProps & { children?: Children },
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
        ? <RenderChildren attr="command" value={attrs.command} />
        : ""}
      {attrs.commandfor !== undefined
        ? <RenderChildren attr="commandfor" value={attrs.commandfor} />
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
      {attrs.name !== undefined
        ? <RenderExpression attr="name" value={attrs.name} />
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
      {attrs.type_ !== undefined
        ? <RenderExpression attr="type" value={attrs.type_} />
        : ""}
      {attrs.value !== undefined
        ? <RenderExpression attr="value" value={attrs.value} />
        : ""}
    </>
  );
}
