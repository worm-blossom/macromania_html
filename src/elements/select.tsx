import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Select} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element
 */
export type SelectProps = {
  autocomplete?: Expression;
  disabled?: boolean;
  form?: Expression;
  multiple?: boolean;
  name?: Expression;
  required?: boolean;
  size?: number;
} & TagProps;

/**
 * The [select element](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) represents a control for selecting amongst a set of options.
 */
export function Select(
  props: SelectProps & { children?: Children },
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
  "select",
  cmUnverified,
);
