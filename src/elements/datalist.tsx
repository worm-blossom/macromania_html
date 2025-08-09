import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [datalist element](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element) represents a set of [option elements](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element) that represent predefined options for other controls. In the rendering, the [datalist element](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element) represents nothing and it, along with its children, should be hidden.
 */
export function Datalist(
  props: TagProps & { children?: Children },
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
  "datalist",
  cmUnverified,
);
