import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_PHRASING_CONTENT,
  CmCategory,
  CmZeroOrMore,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [h1 element](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) represents a heading for its section.
 *
 * See also https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines
 */
export function H1(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom1}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom1 = new DOMNodeInfo(
  "h1",
  new CmZeroOrMore(new CmCategory(CAT_PHRASING_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
);

/**
 * The [h2 element](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) represents a heading for its section.
 *
 * See also https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines
 */
export function H2(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom2}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom2 = new DOMNodeInfo(
  "h2",
  new CmZeroOrMore(new CmCategory(CAT_PHRASING_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
);

/**
 * The [h3 element](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) represents a heading for its section.
 *
 * See also https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines
 */
export function H3(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom3}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom3 = new DOMNodeInfo(
  "h3",
  new CmZeroOrMore(new CmCategory(CAT_PHRASING_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
);

/**
 * The [h4 element](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) represents a heading for its section.
 *
 * See also https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines
 */
export function H4(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom4}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom4 = new DOMNodeInfo(
  "h4",
  new CmZeroOrMore(new CmCategory(CAT_PHRASING_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
);

/**
 * The [h5 element](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) represents a heading for its section.
 *
 * See also https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines
 */
export function H5(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom5}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom5 = new DOMNodeInfo(
  "h5",
  new CmZeroOrMore(new CmCategory(CAT_PHRASING_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
);

/**
 * The [h6 element](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) represents a heading for its section.
 *
 * See also https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines
 */
export function H6(
  props: TagProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom6}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom6 = new DOMNodeInfo(
  "h6",
  new CmZeroOrMore(new CmCategory(CAT_PHRASING_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
);
