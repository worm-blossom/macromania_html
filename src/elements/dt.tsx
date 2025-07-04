import { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FLOW_CONTENT,
  CAT_NOT_IN_DT,
  CmAnd,
  CmCategory,
  CmNoDescendantOfCategory,
  CmZeroOrMore,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [dt element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element) represents the term, or name, part of a term-description group in a description list ([dl element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)).
 */
export function Dt(
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
  "dt",
  new CmAnd([
    new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
    new CmNoDescendantOfCategory(CAT_NOT_IN_DT),
  ]),
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element",
);
