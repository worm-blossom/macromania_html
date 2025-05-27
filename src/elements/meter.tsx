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
 * Props for the {@linkcode Meter} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element
 */
export type MeterProps = {
  value: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  optimum?: number;
} & TagProps;

/**
 * The [meter element](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element) represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.
 */
export function Meter(
  props: MeterProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="meter"
      attrs={<RenderMeterAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderMeterAttributes(
  { attrs }: { attrs?: MeterProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderNumber attr="value" value={attrs.value} />
      {attrs.min !== undefined
        ? <RenderNumber attr="min" value={attrs.min} />
        : ""}
      {attrs.max !== undefined
        ? <RenderNumber attr="max" value={attrs.max} />
        : ""}
      {attrs.low !== undefined
        ? <RenderNumber attr="low" value={attrs.low} />
        : ""}
      {attrs.high !== undefined
        ? <RenderNumber attr="high" value={attrs.high} />
        : ""}
      {attrs.optimum !== undefined
        ? <RenderNumber attr="optimum" value={attrs.optimum} />
        : ""}
    </>
  );
}
