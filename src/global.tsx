/**
 * Global attributes.
 */

import type { Context, Expression } from "macromania";
import { EscapeHtml } from "./renderUtils.tsx";
import {
  type DynamicAttributes,
  RenderSpaceSeparatedList,
} from "./renderUtils.tsx";
import type { AttrRendering } from "./contentModel.tsx";

/**
 * The global attributes that are common to and may be specified on all HTML elements.
 *
 * https://html.spec.whatwg.org/multipage/dom.html#global-attributes
 */
export type TagProps = {
  /**
   * The [accesskey attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute)'s value is used by the user agent as a guide for creating a keyboard shortcut that activates or focuses the element.
   *
   * Each string must be exactly one [unicode code point](https://www.unicode.org/versions/Unicode15.1.0/) in length; this code point must not be [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace). Each string must be unique in the list.
   */
  accesskey?: Expression[] | Expression;
  /**
   * The [autocapitalize attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize) is an enumerated attribute whose states are the possible [autocapitalization hints](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization-hint).
   *
   * Primarily used with `input` and `textarea` elements, but also applies to arbitrary {@linkcode contenteditable https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable} elements.
   *
   * `off` is synonymous with `none` and `on` is synonymous with `sentences`, hence we omit them from this type.
   */
  autocapitalize?:
    | "none"
    | "sentences"
    | "words"
    | "characters";
  /**
   * The [autofocus attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-fe-autofocus) allows the author to indicate that an element is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main element.
   */
  autofocus?: boolean;
  /**
   * The [class attribute](https://html.spec.whatwg.org/multipage/dom.html#classes) is a space-separated list of class names for the element.
   */
  clazz?: Expression[] | Expression;
  /**
   * The [contenteditable attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-contenteditable).
   */
  contenteditable?: boolean | "plaintext-only";
  /**
   * [Custom data attributes](https://html.spec.whatwg.org/multipage/dom.html#attr-data-*) are intended to store custom data, state, annotations, and similar, private to the page or application, for which there are no more appropriate attributes or elements.
   *
   * The macro emits an attribute `data-<key>="<value>"` for each
   * entry `<key>: <value>` in this record.
   */
  data?: Record<string, Expression>;
  /**
   * The [dir attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-dir).
   */
  dir?: "ltr" | "rtl" | "auto";
  /**
   * The [draggable attribute](https://html.spec.whatwg.org/multipage/dnd.html#attr-draggable).
   */
  draggable?: "true" | "false";
  /**
   * The [enterkeyhint attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint) is an enumerated attribute that specifies what action label (or icon) to present for the enter key on virtual keyboards. This allows authors to customize the presentation of the enter key in order to make it more helpful for users.
   */
  enterkeyhint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
  /**
   * Any element in a shadow tree can have an [exportparts attribute](https://drafts.csswg.org/css-shadow-parts/#element-attrdef-html-global-exportparts). If the element is a shadow host, this is used to allow styling of parts from hosts inside the shadow tree by rules outside this the shadow tree (as if they were elements in the same tree as the host, named by a part attribute).
   */
  exportparts?: (Expression | [Expression, Expression])[];
  /**
   *  The [hidden attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden).
   */
  hidden?: "hidden" | "until-found";
  /**
   * The [id attribute](https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute).
   */
  id?: Expression;
  /**
   * The [inert attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute) indicates, by its presence, that the element and all its flat tree descendants which don't otherwise escape inertness (such as modal dialogs) are to be made inert by the user agent.
   */
  inert?: boolean;
  /**
   * The [inputmode attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) specifies what kind of input mechanism would be most helpful for users entering content.
   */
  inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  /**
   * The [is attribute](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is).
   */
  is?: Expression;
  /**
   * The [itemid attribute](https://html.spec.whatwg.org/multipage/microdata.html#attr-itemid), if specified, must have a value that is a valid URL potentially surrounded by spaces.
   */
  itemid?: Expression;
  /**
   * Every HTML element may have an [itemprop attribute](https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute) specified, if doing so [adds one or more properties](https://html.spec.whatwg.org/multipage/microdata.html#the-properties-of-an-item) to one or more [items](https://html.spec.whatwg.org/multipage/microdata.html#concept-item).
   */
  itemprop?: Expression[] | Expression;
  /**
   * Elements with an [itemscope attribute](https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope) may have an [itemref attribute](https://html.spec.whatwg.org/multipage/microdata.html#attr-itemref) specified, to give a list of additional elements to crawl to find the name-value pairs of the [item](https://html.spec.whatwg.org/multipage/microdata.html#concept-item).
   */
  itemref?: Expression[] | Expression;
  /**
   * An element with the [itemscope attribute](https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope) specified creates a new item, a group of name-value pairs.
   */
  itemscope?: boolean;
  /**
   * Elements with an [itemscope attribute](https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope) may have an [itemtype attribute](https://html.spec.whatwg.org/multipage/microdata.html#attr-itemtype) specified, to give the [item types](https://html.spec.whatwg.org/multipage/microdata.html#item-types) of the [item](https://html.spec.whatwg.org/multipage/microdata.html#concept-item).
   */
  itemtype?: Expression[] | Expression;
  /**
   * The [lang attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-lang) specifies the primary language for the element's contents and for any of the element's attributes that contain text. Its value must be a valid [BCP 47 language tag](https://www.rfc-editor.org/info/bcp47), or the empty string. Setting the attribute to the empty string indicates that the primary language is unknown.
   */
  lang?: Expression;
  /**
   * A [nonce attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce) represents a cryptographic nonce ("number used once") which can be used by Content Security Policy to determine whether or not a given fetch will be allowed to proceed.
   */
  nonce?: Expression;
  /**
   * Any element in a shadow tree can have a [part attribute](https://drafts.csswg.org/css-shadow-parts/#part-attr). This is used to expose the element outside of the shadow tree.
   */
  part?: Expression[] | Expression;
  /**
   * All HTML elements may have the [popover attribute](https://html.spec.whatwg.org/multipage/popover.html#attr-popover) set. When specified, the element won't be rendered until it becomes shown, at which point it will be rendered on top of other page content.
   */
  popover?: "auto" | "manual";
  /**
   * The [slot attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-slot).
   */
  slot?: Expression;
  /**
   * The [spellcheck attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-spellcheck).
   */
  spellcheck?: "true" | "false";
  /**
   * The [style attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-style).
   */
  style?: Expression;
  /**
   * The [tabindex attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-tabindex) allows authors to make an element and regions that have the element as its [DOM anchor](https://html.spec.whatwg.org/multipage/interaction.html#dom-anchor) be [focusable areas](https://html.spec.whatwg.org/multipage/interaction.html#focusable-area), allow or prevent them from being [sequentially focusable](https://html.spec.whatwg.org/multipage/interaction.html#sequentially-focusable), and determine their relative ordering for [sequential focus navigation](https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation).
   */
  tabindex?: number;
  /**
   * The [title attribute](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute) represents advisory information for the element, such as would be appropriate for a tooltip. On a link, this could be the title or a description of the target resource; on an image, it could be the image credit or a description of the image; on a paragraph, it could be a footnote or commentary on the text; on a citation, it could be further information about the source; on interactive content, it could be a label for, or instructions for, use of the element; and so forth.
   */
  title?: Expression;
  /**
   * The [translate attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-translate) is used to specify whether an element's attribute values and the values of its [Text](https://dom.spec.whatwg.org/#interface-text) node children are to be translated when the page is localized, or whether to leave them unchanged.
   */
  translate?: "yes" | "no";
  /**
   * User-supplied, dynamic attributes. These allow to render arbitrary attributes not covered by the statically typed API.
   *
   * ```ts
const ctx = new Context();
const got = await ctx.evaluate(
    <H name="foo" isVoid attrs={{ bar: "zzz" }} />,
);
assertEquals(got, `<foo bar="zzz" />`);
```
   */
  dynamicAttributes?: DynamicAttributes;
  /**
   * Do not render the "tags", only the content (i.e., the children). This can be used to indicate the presence of elements for the purposes of the HTML validaiton performed by the element macros without actually emitting the tags to the output.
   *
   * ```ts
const ctx = new Context();
const got = await ctx.evaluate(
<Div omitOuterHtml>
    <Span>foo</Span>
</Div>,
);
assertEquals(got, `<span>foo</span>`);
```
   */
  omitOuterHtml?: boolean;
};

export const renderGlobalAttributes: AttrRendering<TagProps> = {
  accesskey: attrOrderedSetOfUniqueSpaceSeparatedTokens,
  clazz: attrSetOfSpaceSeparatedTokens,
  exportparts: (
    _ctx: Context,
    attr: (Expression | [Expression, Expression])[],
  ) => <RenderExportparts parts={attr} />,
  itemprop: attrUnorderedSetOfUniqueSpaceSeparatedTokens,
  itemref: attrUnorderedSetOfUniqueSpaceSeparatedTokens,
  itemtype: attrUnorderedSetOfUniqueSpaceSeparatedTokens,
  part: attrSetOfSpaceSeparatedTokens,
};

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens
export function attrSetOfSpaceSeparatedTokens(
  _ctx: Context,
  attr: Expression | Expression[],
): Expression {
  return <RenderSpaceSeparatedList value={attr} />;
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens
export function attrUnorderedSetOfUniqueSpaceSeparatedTokens(
  _ctx: Context,
  attr: Expression | Expression[],
): Expression {
  return <RenderSpaceSeparatedList value={attr} />;
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#ordered-set-of-unique-space-separated-tokens
export function attrOrderedSetOfUniqueSpaceSeparatedTokens(
  _ctx: Context,
  attr: Expression | Expression[],
): Expression {
  return <RenderSpaceSeparatedList value={attr} />;
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens
export function attrValidListOfFloatingPointNumbers(
  _ctx: Context,
  attr: number[],
): Expression {
  return attr.map((coord) => `${coord}`).join(",");
}

function RenderExportparts(
  { parts }: { parts: (Expression | [Expression, Expression])[] },
): Expression {
  const exps: Expression[] = [];

  let first = true;
  for (const part of parts) {
    if (!first) {
      exps.push(", ");
    }

    if (Array.isArray(part)) {
      exps.push(<EscapeHtml>{part[0]}</EscapeHtml>);
      exps.push(": ");
      exps.push(<EscapeHtml>{part[1]}</EscapeHtml>);
    } else {
      exps.push(<EscapeHtml>{part}</EscapeHtml>);
    }

    first = false;
  }

  return <xs x={exps} />;
}
