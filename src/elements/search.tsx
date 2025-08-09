import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [search element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element) represents a part of a document or application that contains a set of form controls or other content related to performing a search or filtering operation. This could be a search of the web site or application; a way of searching or filtering search results on the current web page; or a global or Internet-wide search function.
 */
export function Search(
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
  "search",
  cmAllFlow,
);
