import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Time} macro.
 *
 * https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element
 */
export type TimeProps = {
  /**
   * The [datetime attribute](https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-time-datetime) may be present. If present, its value must be a representation of the element's contents in a machine-readable format.
   */
  datetime?: Expression;
} & TagProps;

/**
 * The [time element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element) represents its contents, along with a machine-readable form of those contents in the [datetime attribute](https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-time-datetime). The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations.
 */
export function Time(
  props: TimeProps & { children?: Children },
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
  "time",
  cmUnverified,
);
