import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import type { FormEnctype, FormMethod } from "./form.tsx";
import type { PopoverTargetAction } from "./input.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

export type ButtonType = "submit" | "reset" | "button";

/**
 * Props for the {@linkcode Button} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element
 */
export type ButtonProps = {
  command?: Expression;
  commandfor?: Expression;
  disabled?: boolean;
  form?: Expression;
  formaction?: Expression;
  formenctype?: FormEnctype;
  formmethod?: FormMethod;
  formnovalidate?: boolean;
  formtarget?: Expression;
  name?: Expression;
  popovertarget?: Expression;
  popovertargetaction?: PopoverTargetAction;
  type_?: ButtonType;
  value?: Expression;
} & TagProps;

/**
 * The [button element](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element) represents a button labeled by its contents.
 */
export function Button(
  props: ButtonProps & { children?: Children },
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
  "button",
  cmUnverified,
);
