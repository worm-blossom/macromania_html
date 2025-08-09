import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_METER,
  cmAllPhrasing,
  cmAnd,
  cmNoDescendant,
  DOMNodeInfo,
} from "../contentModel.tsx";

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
  props: MeterProps & { children?: Children },
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
  cmAnd([cmAllPhrasing, cmNoDescendant(CAT_METER)]),
);
