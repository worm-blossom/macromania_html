import { Expression, Children } from "macromania";
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
 * Props for the {@linkcode Option} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element
 */
export type OptionProps = {
  disabled?: boolean;
  label?: Expression;
  selected?: boolean;
  value?: Expression;
} & TagProps;

/**
 * The [option element](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element) represents an option in a [select element](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) or as part of a list of suggestions in a [datalist element](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element).
 */
export function Option(
  props: OptionProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="option"
      attrs={<RenderOptionAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderOptionAttributes(
  { attrs }: { attrs?: OptionProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      {attrs.disabled !== undefined
        ? <RenderBoolean attr="disabled" value={attrs.disabled} />
        : ""}
      {attrs.label !== undefined
        ? <RenderExpression attr="label" value={attrs.label} />
        : ""}
      {attrs.selected !== undefined
        ? <RenderBoolean attr="selected" value={attrs.selected} />
        : ""}
      {attrs.value !== undefined
        ? <RenderExpression attr="value" value={attrs.value} />
        : ""}
    </>
  );
}
