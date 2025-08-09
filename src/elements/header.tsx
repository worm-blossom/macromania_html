import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_HEADER_OR_FOOTER,
  cmAllFlow,
  cmAnd,
  cmNoDescendant,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [header element](https://html.spec.whatwg.org/multipage/sections.html#the-header-element) represents a group of introductory or navigational aids.
 */
export function Header(
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
  "header",
  cmAnd([
    cmAllFlow,
    cmNoDescendant(CAT_HEADER_OR_FOOTER),
  ]),
);
