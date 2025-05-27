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
 * Props for the {@linkcode Output} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element
 */
export type OutputProps = {
  for_?: Expressions;
  form?: Expressions;
  name?: Expressions;
} & TagProps;

/**
 * The [output element](https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element) represents the result of a calculation performed by the application, or the result of a user action.
 */
export function Output(
  props: OutputProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="output"
      attrs={<RenderOutputAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderOutputAttributes(
  { attrs }: { attrs?: OutputProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      {attrs.for_ !== undefined
        ? <RenderExpression attr="for" value={<exps x={attrs.for_} />} />
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
