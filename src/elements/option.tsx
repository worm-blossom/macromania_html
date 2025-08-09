import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

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
  "option",
  cmUnverified,
);
