import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmNoChildElements,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [title element](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element) represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.
 *
 * There must be no more than one [title element](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element) per document.
 */
export function Title(
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
  "title",
  cmNoChildElements,
);
