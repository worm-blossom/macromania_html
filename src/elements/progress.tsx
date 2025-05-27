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
 * Props for the {@linkcode Progress} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element
 */
export type ProgressProps = {
  value?: number;
  max?: number;
} & TagProps;

/**
 * The [progress element](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element) represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.
 */
export function Progress(
  props: ProgressProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="progress"
      attrs={<RenderProgressAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderProgressAttributes(
  { attrs }: { attrs?: ProgressProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      {attrs.value !== undefined
        ? <RenderNumber attr="value" value={attrs.value} />
        : ""}
      {attrs.max !== undefined
        ? <RenderNumber attr="max" value={attrs.max} />
        : ""}
    </>
  );
}
