import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

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
  "optgroup",
  cmUnverified,
);
