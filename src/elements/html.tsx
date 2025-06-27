import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_BODY,
  CAT_HEAD,
  CmCategory,
  CmSequence,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [html element](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element) represents the root of an HTML document.
 *
 * Authors are encouraged to specify a [lang attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-lang) on the root [html element](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element), giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth.
 */
export function Html(
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
  "html",
  new CmSequence([new CmCategory(CAT_HEAD), new CmCategory(CAT_BODY)]),
  "https://html.spec.whatwg.org/multipage/semantics.html#the-root-element",
);
