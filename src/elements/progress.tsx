import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_PROGRESS,
  cmAllPhrasing,
  cmAnd,
  cmNoDescendant,
  DOMNodeInfo,
} from "../contentModel.tsx";

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
  props: ProgressProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom = new DOMNodeInfo(
  "strong",
  cmAnd([cmAllPhrasing, cmNoDescendant(CAT_PROGRESS)]),
);
