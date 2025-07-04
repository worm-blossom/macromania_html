import { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FLOW_CONTENT,
  CmCategory,
  CmZeroOrMore,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [figcaption element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element) represents a caption or legend for the rest of the contents of the [figcaption element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element's parent [figure element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element), if any.
 */
export function Figcaption(
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
  "figcaption",
  new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element",
);
