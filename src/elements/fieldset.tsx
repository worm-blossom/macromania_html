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
 * Props for the {@linkcode Fieldset} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element
 */
export type FieldsetProps = {
  disabled?: boolean;
  form?: Expression;
  name?: Expression;
} & TagProps;

/**
 * The [fieldset element](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element) represents a set of form controls (or other content) grouped together, optionally with a caption. The caption is given by the first legend element that is a child of the fieldset element, if any. The remainder of the descendants form the group.
 */
export function Fieldset(
  props: FieldsetProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="fieldset"
      attrs={<RenderFieldsetAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderFieldsetAttributes(
  { attrs }: { attrs?: FieldsetProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      {attrs.disabled !== undefined
        ? <RenderBoolean attr="disabled" value={attrs.disabled} />
        : ""}
      {attrs.form !== undefined
        ? <RenderExpression attr="form" value={<exps x={attrs.form} />} />
        : ""}
      {attrs.name !== undefined
        ? <RenderExpression attr="name" value={<exps x={attrs.name} />} />
        : ""}
    </>
  );
}
