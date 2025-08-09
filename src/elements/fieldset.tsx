import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Fieldset} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element
 */
export type FieldsetProps = {
  disabled?: boolean;
  form?: Expression;
  name?: Expression;
} & TagProps;

/**
 * The [fieldset element](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element) represents a set of form controls (or other content) grouped together, optionally with a caption. The caption is given by the first legend element that is a child of the fieldset element, if any. The remainder of the descendants form the group.
 */
export function Fieldset(
  props: FieldsetProps & { children?: Children },
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
  "fieldset",
  cmUnverified,
);
