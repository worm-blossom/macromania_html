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
 * Props for the {@linkcode Optgroup} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element
 */
export type OptgroupProps = {
  disabled?: boolean;
  label?: Expression;
} & TagProps;

/**
 * The [optgroup element](https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element) represents a group of [option elements](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element) with a common label.
 */
export function Optgroup(
  props: OptgroupProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="optgroup"
      attrs={<RenderOptgroupAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderOptgroupAttributes(
  { attrs }: { attrs?: OptgroupProps },
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
    </>
  );
}
