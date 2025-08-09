import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Data} macro.
 *
 * https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element
 */
export type DataProps = {
  /**
   * The [value attribute](https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-data-value) must be present. Its value must be a representation of the element's contents in a machine-readable format.
   */
  value: Expression;
} & TagProps;

/**
 * The [data element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element) represents its contents, along with a machine-readable form of those contents in the [value attribute](https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-data-value).
 */
export function Data(
  props: DataProps & { children?: Children },
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
  "data",
  cmAllPhrasing,
);
