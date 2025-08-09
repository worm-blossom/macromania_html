import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [bdo element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element) represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
 *
 * Authors must specify the [dir attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-dir) on this element, with the value `ltr` to specify a left-to-right override and with the value `rtl` to specify a right-to-left override. The `auto` value must not be specified.
 */
export function Bdo(
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
  "bdo",
  cmAllPhrasing,
);
