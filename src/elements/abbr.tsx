import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [abbr element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) represents an abbreviation or acronym, optionally with its expansion. The [title attribute](https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-abbr-title) may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
 */
export function Abbr(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={new DOMNodeInfo(
        "abbr",
        cmAllPhrasing,
      )}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}
