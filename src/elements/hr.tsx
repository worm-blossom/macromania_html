import type { Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CmNothing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [hr element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element) represents a [paragraph](https://html.spec.whatwg.org/multipage/dom.html#paragraph)-level thematic break, e.g., a scene change in a story, or a transition to another topic within a section of a reference book; alternatively, it represents a separator between a set of options of a [select element](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element).
 */
export function Hr(
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
  "hr",
  new CmNothing(),
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element",
);
