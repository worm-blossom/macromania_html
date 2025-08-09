import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Output} macro.
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element
 */
export type OutputProps = {
  for_?: Expression;
  form?: Expression;
  name?: Expression;
} & TagProps;

/**
 * The [output element](https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element) represents the result of a calculation performed by the application, or the result of a user action.
 */
export function Output(
  props: OutputProps & { children?: Children },
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
  "output",
  cmAllPhrasing,
);
