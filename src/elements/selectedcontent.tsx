import type { Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmTrivial,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [selectedcontent](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element) element reflects the contents of a [select](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) element's currently selected [option](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element) element. [selectedcontent](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element) elements can be used to declaratively show the selected [option](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element) element's contents within the [select](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) element's first child [button](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element) element.
 */
export function Selectedcontent(
  props: TagProps,
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
      isVoid
    />
  );
}

const dom = new DOMNodeInfo(
  "selectedcontent",
  cmTrivial,
);
