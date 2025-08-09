import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_DFN,
  cmAllPhrasing,
  cmAnd,
  cmNoDescendant,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [dfn element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element) represents the defining instance of a term. The [paragraph](https://html.spec.whatwg.org/multipage/dom.html#paragraph), [description list group](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element), or [section](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content-2) that is the nearest ancestor of the [dfn element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element) must also contain the definition(s) for the [term](https://html.spec.whatwg.org/multipage/text-level-semantics.html#defining-term) given by the [dfn element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element).
 */
export function Dfn(
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
  "dfn",
  cmAnd([cmAllPhrasing, cmNoDescendant(CAT_DFN)]),
);
