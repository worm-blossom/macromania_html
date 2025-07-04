import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FLOW_CONTENT,
  CAT_HEADER_OR_FOOTER,
  CmAnd,
  CmCategory,
  CmNoDescendantOfCategory,
  CmZeroOrMore,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [footer element](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element) represents a footer for its nearest ancestor [sectioning content](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content-2) element, or for the [body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2) if there is no such ancestor. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.
 *
 * When the [footer element](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element) contains entire sections, they represent appendices, indices, long colophons, verbose license agreements, and other such content.
 */
export function Footer(
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
  "footer",
  new CmAnd([
    new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
    new CmNoDescendantOfCategory(CAT_HEADER_OR_FOOTER),
  ]),
  "https://html.spec.whatwg.org/multipage/sections.html#the-footer-element",
);
