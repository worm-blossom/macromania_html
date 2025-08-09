import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [dd element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element) represents the description, definition, or value, part of a term-description group in a description list ([dl element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)).
 */
export function Dd(
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
  "dd",
  cmAllFlow,
);
