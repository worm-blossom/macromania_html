/*
Macros for generating HTML, and their props.
*/

import { Expression, Expressions, expressions } from "./deps.ts";

// Might replace this with proper typing at a later point.
export type CssProperties = Expression;

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin MDN}
 */
export type CrossOrigin = "anonymous" | "use-credentials" | "";

/**
 * All the [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/) attributes.
 */
export type AriaProps = {
  // /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  // "aria-activedescendant"?: Expression;
  // /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  // "aria-atomic"?: boolean;
  // /**
  //  * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
  //  * presented if they are made.
  //  */
  // "aria-autocomplete"?: "none" | "inline" | "list" | "both";
  // /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  // /**
  //  * Defines a string value that labels the current element, which is intended to be converted into Braille.
  //  * @see aria-label.
  //  */
  // "aria-braillelabel"?: Expression;
  // /**
  //  * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
  //  * @see aria-roledescription.
  //  */
  // "aria-brailleroledescription"?: Expression;
  // "aria-busy"?: boolean;
  // /**
  //  * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
  //  * @see aria-pressed @see aria-selected.
  //  */
  // "aria-checked"?: boolean | "mixed";
  // /**
  //  * Defines the total number of columns in a table, grid, or treegrid.
  //  * @see aria-colindex.
  //  */
  // "aria-colcount"?: number;
  // /**
  //  * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
  //  * @see aria-colcount @see aria-colspan.
  //  */
  // "aria-colindex"?: number;
  // /**
  //  * Defines a human readable text alternative of aria-colindex.
  //  * @see aria-rowindextext.
  //  */
  // "aria-colindextext"?: Expression;
  // /**
  //  * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
  //  * @see aria-colindex @see aria-rowspan.
  //  */
  // "aria-colspan"?: number;
  // /**
  //  * Identifies the element (or elements) whose contents or presence are controlled by the current element.
  //  * @see aria-owns.
  //  */
  // "aria-controls"?: Expression;
  // /** Indicates the element that represents the current item within a container or set of related elements. */
  // "aria-current"?:
  //   | boolean
  //   | "page"
  //   | "step"
  //   | "location"
  //   | "date"
  //   | "time";
  // /**
  //  * Identifies the element (or elements) that describes the object.
  //  * @see aria-labelledby
  //  */
  // "aria-describedby"?: Expression;
  // /**
  //  * Defines a string value that describes or annotates the current element.
  //  * @see related aria-describedby.
  //  */
  // "aria-description"?: Expression;
  // /**
  //  * Identifies the element that provides a detailed, extended description for the object.
  //  * @see aria-describedby.
  //  */
  // "aria-details"?: Expression;
  // /**
  //  * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
  //  * @see aria-hidden @see aria-readonly.
  //  */
  // "aria-disabled"?: boolean;
  // /**
  //  * Indicates what functions can be performed when a dragged object is released on the drop target.
  //  * @deprecated in ARIA 1.1
  //  */
  // "aria-dropeffect"?:
  //   | "none"
  //   | "copy"
  //   | "execute"
  //   | "link"
  //   | "move"
  //   | "popup";
  // /**
  //  * Identifies the element that provides an error message for the object.
  //  * @see aria-invalid @see aria-describedby.
  //  */
  // "aria-errormessage"?: Expression;
  // /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  // "aria-expanded"?: boolean;
  // /**
  //  * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
  //  * allows assistive technology to override the general default of reading in document source order.
  //  */
  // "aria-flowto"?: Expression;
  // /**
  //  * Indicates an element's "grabbed" state in a drag-and-drop operation.
  //  * @deprecated in ARIA 1.1
  //  */
  // "aria-grabbed"?: boolean;
  // /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  // "aria-haspopup"?:
  //   | boolean
  //   | "menu"
  //   | "listbox"
  //   | "tree"
  //   | "grid"
  //   | "dialog";
  // /**
  //  * Indicates whether the element is exposed to an accessibility API.
  //  * @see aria-disabled.
  //  */
  // "aria-hidden"?: boolean;
  // /**
  //  * Indicates the entered value does not conform to the format expected by the application.
  //  * @see aria-errormessage.
  //  */
  // "aria-invalid"?:
  //   | boolean
  //   | "grammar"
  //   | "spelling";
  // /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  // "aria-keyshortcuts"?: Expression;
  // /**
  //  * Defines a string value that labels the current element.
  //  * @see aria-labelledby.
  //  */
  // "aria-label"?: Expression;
  // /**
  //  * Identifies the element (or elements) that labels the current element.
  //  * @see aria-describedby.
  //  */
  // "aria-labelledby"?: Expression;
  // /** Defines the hierarchical level of an element within a structure. */
  // "aria-level"?: number;
  // /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  // "aria-live"?: "off" | "assertive" | "polite";
  // /** Indicates whether an element is modal when displayed. */
  // "aria-modal"?: boolean;
  // /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  // "aria-multiline"?: boolean;
  // /** Indicates that the user may select more than one item from the current selectable descendants. */
  // "aria-multiselectable"?: boolean;
  // /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  // "aria-orientation"?: "horizontal" | "vertical";
  // /**
  //  * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
  //  * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
  //  * @see aria-controls.
  //  */
  // "aria-owns"?: Expression;
  // /**
  //  * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
  //  * A hint could be a sample value or a brief description of the expected format.
  //  */
  // "aria-placeholder"?: Expression;
  // /**
  //  * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
  //  * @see aria-setsize.
  //  */
  // "aria-posinset"?: number;
  // /**
  //  * Indicates the current "pressed" state of toggle buttons.
  //  * @see aria-checked @see aria-selected.
  //  */
  // "aria-pressed"?: boolean | "mixed";
  // /**
  //  * Indicates that the element is not editable, but is otherwise operable.
  //  * @see aria-disabled.
  //  */
  // "aria-readonly"?: boolean;
  // /**
  //  * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
  //  * @see aria-atomic.
  //  */
  // "aria-relevant"?:
  //   | "additions"
  //   | "additions removals"
  //   | "additions text"
  //   | "all"
  //   | "removals"
  //   | "removals additions"
  //   | "removals text"
  //   | "text"
  //   | "text additions"
  //   | "text removals";
  // /** Indicates that user input is required on the element before a form may be submitted. */
  // "aria-required"?: boolean;
  // /** Defines a human-readable, author-localized description for the role of an element. */
  // "aria-roledescription"?: Expression;
  // /**
  //  * Defines the total number of rows in a table, grid, or treegrid.
  //  * @see aria-rowindex.
  //  */
  // "aria-rowcount"?: number;
  // /**
  //  * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
  //  * @see aria-rowcount @see aria-rowspan.
  //  */
  // "aria-rowindex"?: number;
  // /**
  //  * Defines a human readable text alternative of aria-rowindex.
  //  * @see aria-colindextext.
  //  */
  // "aria-rowindextext"?: Expression;
  // /**
  //  * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
  //  * @see aria-rowindex @see aria-colspan.
  //  */
  // "aria-rowspan"?: number;
  // /**
  //  * Indicates the current "selected" state of various widgets.
  //  * @see aria-checked @see aria-pressed.
  //  */
  // "aria-selected"?: boolean;
  // /**
  //  * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
  //  * @see aria-posinset.
  //  */
  // "aria-setsize"?: number;
  // /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  // "aria-sort"?: "none" | "ascending" | "descending" | "other";
  // /** Defines the maximum allowed value for a range widget. */
  // "aria-valuemax"?: number;
  // /** Defines the minimum allowed value for a range widget. */
  // "aria-valuemin"?: number;
  // /**
  //  * Defines the current value for a range widget.
  //  * @see aria-valuetext.
  //  */
  // "aria-valuenow"?: number;
  // /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  // "aria-valuetext"?: Expression;
};

const ariaList: RenderList = [
  ["aria-activedescendant", renderExpression],
  ["aria-atomic", renderBoolean],
  ["aria-autocomplete", renderEnum],
  ["aria-braillelabel", renderExpression],
  ["aria-brailleroledescription", renderExpression],
  ["aria-busy", renderBoolean],
  ["aria-checked", renderBooleanOrEnum],
  ["aria-colcount", renderNumber],
  ["aria-colindex", renderNumber],
  ["aria-colindextext", renderExpression],
  ["aria-colspan", renderNumber],
  ["aria-controls", renderExpression],
  ["aria-current", renderBooleanOrEnum],
  ["aria-describedby", renderExpression],
  ["aria-description", renderExpression],
  ["aria-details", renderExpression],
  ["aria-disabled", renderBoolean],
  ["aria-dropeffect", renderEnum],
  ["aria-errormessage", renderExpression],
  ["aria-expanded", renderBoolean],
  ["aria-flowto", renderExpression],
  ["aria-grabbed", renderBoolean],
  ["aria-haspopup", renderBooleanOrEnum],
  ["aria-hidden", renderBoolean],
  ["aria-invalid", renderBooleanOrEnum],
  ["aria-keyshortcuts", renderExpression],
  ["aria-label", renderExpression],
  ["aria-labelledby", renderExpression],
  ["aria-level", renderNumber],
  ["aria-live", renderEnum],
  ["aria-modal", renderBoolean],
  ["aria-multiline", renderBoolean],
  ["aria-multiselectable", renderBoolean],
  ["aria-orientation", renderEnum],
  ["aria-owns", renderExpression],
  ["aria-placeholder", renderExpression],
  ["aria-posinset", renderNumber],
  ["aria-pressed", renderBooleanOrEnum],
  ["aria-readonly", renderBoolean],
  ["aria-relevant", renderEnum],
  ["aria-required", renderBoolean],
  ["aria-roledescription", renderExpression],
  ["aria-rowcount", renderNumber],
  ["aria-rowindex", renderNumber],
  ["aria-rowindextext", renderExpression],
  ["aria-rowspan", renderNumber],
  ["aria-selected", renderBoolean],
  ["aria-setsize", renderNumber],
  ["aria-sort", renderEnum],
  ["aria-valuemax", renderNumber],
  ["aria-valuemin", renderNumber],
  ["aria-valuenow", renderNumber],
  ["aria-valuetext", renderExpression],
];

// All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles}
 */
export type AriaRole =
  | "alert"
  | "alertdialog"
  | "application"
  | "article"
  | "banner"
  | "blockquote"
  | "button"
  | "caption"
  | "cell"
  | "checkbox"
  | "code"
  | "columnheader"
  | "combobox"
  | "complementary"
  | "contentinfo"
  | "definition"
  | "deletion"
  | "dialog"
  // | "directory" (deprecated in ARIA 1.2)
  | "document"
  | "emphasis"
  | "feed"
  | "figure"
  | "form"
  | "generic"
  | "grid"
  | "gridcell"
  | "group"
  | "heading"
  | "img"
  | "insertion"
  | "link"
  | "list"
  | "listbox"
  | "listitem"
  | "log"
  | "main"
  | "marquee"
  | "math"
  | "meter"
  | "menu"
  | "menubar"
  | "menuitem"
  | "menuitemcheckbox"
  | "menuitemradio"
  | "navigation"
  | "none"
  | "note"
  | "option"
  | "paragraph"
  | "presentation"
  | "progressbar"
  | "radio"
  | "radiogroup"
  | "region"
  | "row"
  | "rowgroup"
  | "rowheader"
  | "scrollbar"
  | "search"
  | "searchbox"
  | "separator"
  | "slider"
  | "spinbutton"
  | "status"
  | "strong"
  | "subscript"
  | "superscript"
  | "switch"
  | "tab"
  | "table"
  | "tablist"
  | "tabpanel"
  | "term"
  | "textbox"
  | "time"
  | "timer"
  | "toolbar"
  | "tooltip"
  | "tree"
  | "treegrid"
  | "treeitem";

/**
 * The global attributes are common to and may be specified on all HTML elements.
 *
 * https://html.spec.whatwg.org/multipage/dom.html#global-attributes
 */
export type TagProps = AriaProps & {
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
  draggable?: boolean;
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
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles}
   */
  role?: AriaRole;
  /**
   * The [slot attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-slot).
   */
  slot?: Expression;
  /**
   * The [spellcheck attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-spellcheck).
   */
  spellcheck?: boolean;
  /**
   * The [style attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-style).
   */
  style?: CssProperties;
  /**
   * The [tabindex attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-tabindex) allows authors to make an element and regions that have the element as its [DOM anchor](https://html.spec.whatwg.org/multipage/interaction.html#dom-anchor) be [focusable areas](https://html.spec.whatwg.org/multipage/interaction.html#focusable-area), allow or prevent them from being [sequentially focusable](https://html.spec.whatwg.org/multipage/interaction.html#sequentially-focusable), and determine their relative ordering for [sequential focus navigation](https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation).
   */
  tabindex?: number;
  /**
   * The [title attribute]() represents advisory information for the element, such as would be appropriate for a tooltip. On a link, this could be the title or a description of the target resource; on an image, it could be the image credit or a description of the image; on a paragraph, it could be a footnote or commentary on the text; on a citation, it could be further information about the source; on interactive content, it could be a label for, or instructions for, use of the element; and so forth.
   */
  title?: Expression;
  /**
   * The [translate attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-translate) is used to specify whether an element's attribute values and the values of its [Text](https://dom.spec.whatwg.org/#interface-text) node children are to be translated when the page is localized, or whether to leave them unchanged.
   */
  translate?: boolean;
};

const tagList: RenderList = [
  ...ariaList,
  ["accessKey", renderSpaceSeparatedList],
  ["autocapitalize", renderEnum],
  ["autofocus", renderBoolean],
  ["clazz", renderClass],
  ["contenteditable", renderBooleanOrEnum],
  ["contextmenu", renderExpression],
  // custom data attributes are handled in the function for rendering RenderLists
  ["dir", renderExpression],
  ["draggable", renderTrueFalse],
  ["enterkeyhint", renderEnum],
  ["exportparts", renderExportparts],
  ["hidden", renderEnum],
  ["id", renderExpression],
  ["inert", renderBoolean],
  ["inputmode", renderEnum],
  ["is", renderExpression],
  ["itemid", renderExpression],
  ["itemprop", renderSpaceSeparatedList],
  ["itemref", renderSpaceSeparatedList],
  ["itemscope", renderBoolean],
  ["itemtype", renderSpaceSeparatedList],
  ["lang", renderExpression],
  ["nonce", renderExpression],
  ["part", renderSpaceSeparatedList],
  ["popover", renderEnum],
  ["role", renderEnum],
  ["slot", renderExpression],
  ["spellcheck", renderTrueFalse],
  ["style", renderExpression],
  ["tabindex", renderNumber],
  ["title", renderExpression],
  ["translate", renderYesNo],
];

/**
 * A [valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword) is any string that is either a [valid navigable target name](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name) or that is an ASCII case-insensitive match for one of: `_blank`, `_self`, `_parent`, or `_top`.
 */
export type NavigableTargetNameOrKeyword =
  | "_blank"
  | "_self"
  | "_parent"
  | "_top"
  | { name: Expression };

/**
 * A [link type](https://html.spec.whatwg.org/multipage/links.html#linkTypes) that is allowed on [a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) and [area](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element) elements.
 */
export type AOrAreaLinkType =
  | "alternate"
  | "author"
  | "bookmark"
  | "external"
  | "help"
  | "license"
  | "next"
  | "nofollow"
  | "noopener"
  | "noreferrer"
  | "opener"
  | "prev"
  | "privacy-policy"
  | "search"
  | "tag"
  | "terms-of-service";

/**
 * Link-related props for both `<a>` and `<area>` elements, see https://html.spec.whatwg.org/multipage/links.html#links-created-by-a-and-area-elements
 *
 * Note: this does not include the [hreflang attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-hreflang) (as it is not used with `<area>` elements), nor the [type attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-type) (same reason).
 */
export type AOrAreaLinkProps = {
  /**
   * The [href attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href).
   */
  href?: Expression;
  /**
   * The [target attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-target), if present, gives the name of the [navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) that will be used. User agents use this name when [following hyperlinks](https://html.spec.whatwg.org/multipage/links.html#following-hyperlinks-2).
   */
  target?: NavigableTargetNameOrKeyword;
  /**
   * The [download attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download), if present, indicates that the author intends the hyperlink to be used for [downloading a resource](https://html.spec.whatwg.org/multipage/links.html#downloading-hyperlinks). The attribute may have a value; the value, if any, specifies the default filename that the author recommends for use in labeling the resource in a local file system. There are no restrictions on allowed values, but authors are cautioned that most file systems have limitations with regard to what punctuation is supported in filenames, and user agents are likely to adjust filenames accordingly.
   */
  download?: Expression;
  /**
   * The [ping attribute](https://html.spec.whatwg.org/multipage/links.html#ping), if present, gives the URLs of the resources that are interested in being notified if the user follows the hyperlink. The value must be a set of space-separated tokens, each of which must be a valid non-empty URL whose scheme is an HTTP(S) scheme. The value is used by the user agent for [hyperlink auditing](https://html.spec.whatwg.org/multipage/links.html#hyperlink-auditing).
   */
  ping?: Expression[];
  /**
   * The [rel attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-rel) on [a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) and [area](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element) elements controls what kinds of links the elements create.
   */
  rel?: AOrAreaLinkType;
  /**
   * The [referrerpolicy attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-referrerpolicy) sets the [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) used when [following hyperlinks](https://html.spec.whatwg.org/multipage/links.html#following-hyperlinks-2).
   */
  referrerpolicy?: ReferrerPolicy;
};

/**
 * Props for the {@linkcode A} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes}
 */
export type AProps = AOrAreaLinkProps & {
  /**
   *  The [hreflang attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-hreflang) on [a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) elements that create [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink), if present, gives the language of the linked resource. It is purely advisory. The value must be a valid [BCP 47 language tag](https://www.rfc-editor.org/info/bcp47). User agents must not consider this attribute authoritative — upon fetching the resource, user agents must use only language information associated with the resource to determine its language, not metadata included in the link to the resource.
   */
  hreflang?: Expression;
  /**
   * The [type attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-type), if present, gives the [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) of the linked resource. It is purely advisory. The value must be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type). User agents must not consider the type attribute authoritative — upon fetching the resource, user agents must not use metadata included in the link to the resource to determine its type.
   */
  type?: Expression;
};

const aList: RenderList = [
  ...tagList,
  [
    "download",
    (attr, value) =>
      value === null ? `download=""` : renderExpression(attr, value),
  ],
  ["href", renderExpression],
  ["hreflang", renderExpression],
  ["ping", renderExpression],
  ["referrerpolicy", renderEnum],
  ["rel", renderExpression],
  ["target", renderEnum],
  ["type", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a}
 */
export function A(props: AProps & { children?: Expressions }): Expression {
  return (
    <RenderNonVoidElement name="a" attrs={props} list={aList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr}
 */
export function Abbr(props: TagProps & { children?: Expressions }): Expression {
  return (
    <RenderNonVoidElement name="abbr" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address}
 */
export function Address(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="address" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Area} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#attributes}
 */
export type AreaProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#alt}
   */
  alt?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#alt}
   */
  coords?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#download}
   */
  download?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#href}
   */
  href?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#ping}
   */
  ping?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#referrerpolicy}
   */
  referrerpolicy?: ReferrerPolicy;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#rel}
   */
  rel?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#shape}
   */
  shape?: "rect" | "circle" | "poly" | "default";
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#target}
   */
  target?: HTMLAttributeAnchorTarget;
};

/**
 * A [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy).
 *
 * The empty string is equivalent to not giving a referrer policy at all, so we don't allow it in the first place.
 */
export type ReferrerPolicy =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

const areaList: RenderList = [
  ...tagList,
  ["alt", renderExpression],
  ["coords", renderExpression],
  [
    "download",
    (attr, value) =>
      value === null ? `download=""` : renderExpression(attr, value),
  ],
  ["href", renderExpression],
  ["ping", renderExpression],
  ["referrerpolicy", renderEnum],
  ["rel", renderExpression],
  ["shape", renderEnum],
  ["target", renderEnum],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area}
 */
export function Area(
  props: AreaProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="area" attrs={props} list={areaList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article}
 */
export function Article(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="article" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside}
 */
export function Aside(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="aside" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Audio} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#attributes}
 */
export type AudioProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#autoplay}
   */
  autoplay?: boolean;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#controls}
   */
  controls?: boolean;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#controlslist}
   */
  controlslist?:
    | "nodownload"
    | "nofullscreen"
    | "noremoteplayback"
    | "nodownload nofullscreen"
    | "nodownload noremoteplayback"
    | "nofullscreen noremoteplayback"
    | "nodownload nofullscreen noremoteplayback";
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#crossorigin}
   */
  crossorigin?: CrossOrigin;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#loop}
   */
  loop?: boolean;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#muted}
   */
  muted?: boolean;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#preload}
   */
  preload?: "none" | "metadata" | "auto";
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#src}
   */
  src?: Expression;
};

const audioList: RenderList = [
  ...tagList,
  ["autoplay", renderBoolean],
  ["controls", renderBoolean],
  ["controlslist", renderEnum],
  ["crossorigin", renderEnum],
  ["loop", renderBoolean],
  ["muted", renderBoolean],
  ["preload", renderEnum],
  ["src", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio}
 */
export function Audio(
  props: AudioProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="audio" attrs={props} list={audioList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b}
 */
export function B(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="b" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Base} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#attributes}
 */
export type BaseProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#href}
   */
  href?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#target}
   */
  target?: HTMLAttributeAnchorTarget;
};

const baseList: RenderList = [
  ...tagList,
  ["href", renderExpression],
  ["target", renderEnum],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base}
 */
export function Base(
  props: BaseProps,
): Expression {
  return <RenderVoidElement name="base" attrs={props} list={baseList} />;
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi}
 */
export function Bdi(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="bdi" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo}
 */
export function Bdo(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="bdo" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Blockquote} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#attributes}
 */
export type BlockquoteProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#cite}
   */
  cite?: Expression;
};

const blockquoteList: RenderList = [
  ...tagList,
  ["cite", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote}
 */
export function Blockquote(
  props: BlockquoteProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="blockquote" attrs={props} list={blockquoteList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body}
 */
export function Body(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="body" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br}
 */
export function Br(props: TagProps): Expression {
  return <RenderVoidElement name="br" attrs={props} list={tagList} />;
}

/**
 * Props for the {@linkcode Button} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes}
 */
export type ButtonProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled}
   */
  disabled?: boolean;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form}
   */
  form?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formaction}
   */
  formaction?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formenctype}
   */
  formenctype?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formmethod}
   */
  formmethod?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formnovalidate}
   */
  formnovalidate?: boolean;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formtarget}
   */
  formtarget?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name}
   */
  name?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type}
   */
  type?: "submit" | "reset" | "button";
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value}
   */
  value?: Expression;
};

const buttonList: RenderList = [
  ...tagList,
  ["disabled", renderBoolean],
  ["form", renderExpression],
  ["formaction", renderExpression],
  ["formenctype", renderExpression],
  ["formmethod", renderExpression],
  ["formnovalidate", renderBoolean],
  ["formtarget", renderExpression],
  ["formname", renderExpression],
  ["type", renderEnum],
  ["value", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button}
 */
export function Button(
  props: ButtonProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="button" attrs={props} list={buttonList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Canvas} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#attributes}
 */
export type CanvasProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#height}
   */
  height?: number;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#width}
   */
  width?: number;
};

const canvasList: RenderList = [
  ...tagList,
  ["height", renderNumber],
  ["width", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas}
 */
export function Canvas(
  props: CanvasProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="canvas" attrs={props} list={canvasList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption}
 */
export function Caption(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="caption" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite}
 */
export function Cite(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="cite" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code}
 */
export function Code(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="code" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Col} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attributes}
 */
export type ColProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#span}
   */
  span?: number;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#width}
   */
  width?: number;
};

const colList: RenderList = [
  ...tagList,
  ["height", renderNumber],
  ["width", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col}
 */
export function Col(
  props: ColProps,
): Expression {
  return <RenderVoidElement name="col" attrs={props} list={colList} />;
}

/**
 * Props for the {@linkcode Colgroup} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attributes}
 */
export type ColgroupProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#span}
   */
  span?: number;
};

const colgroupList: RenderList = [
  ...tagList,
  ["span", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup}
 */
export function Colgroup(
  props: ColgroupProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="colgroup" attrs={props} list={colgroupList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Data} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data#attributes}
 */
export type DataProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data#value}
   */
  value?: Expression;
};

const dataList: RenderList = [
  ...tagList,
  ["value", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data}
 */
export function Data(
  props: DataProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="data" attrs={props} list={dataList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist}
 */
export function Datalist(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="datalist" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd}
 */
export function Dd(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="dd" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Del} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del#attributes}
 */
export type DelProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del#cite}
   */
  cite?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del#datetime}
   */
  datetime?: Expression;
};

const delList: RenderList = [
  ...tagList,
  ["cite", renderExpression],
  ["datetime", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del}
 */
export function Del(
  props: DelProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="del" attrs={props} list={delList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Details} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#attributes}
 */
export type DetailsProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#open}
   */
  open?: boolean;
};

const detailsList: RenderList = [
  ...tagList,
  ["open", renderBoolean],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details}
 */
export function Details(
  props: DetailsProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="details" attrs={props} list={detailsList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn}
 */
export function Dfn(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="dfn" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Dialog} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#attributes}
 */
export type DialogProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#open}
   */
  open?: boolean;
};

const dialogList: RenderList = [
  ...tagList,
  ["open", renderBoolean],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog}
 */
export function Dialog(
  props: DialogProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="dialog" attrs={props} list={dialogList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div}
 */
export function Div(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="div" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl}
 */
export function Dl(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="dl" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt}
 */
export function Dt(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="dt" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em}
 */
export function Em(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="em" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Fieldset} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#attributes}
 */
export type FieldsetProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#disabled}
   */
  disabled?: boolean;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#form}
   */
  form?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#name}
   */
  name?: Expression;
};

const fieldsetList: RenderList = [
  ...tagList,
  ["disabled", renderBoolean],
  ["form", renderExpression],
  ["name", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset}
 */
export function Fieldset(
  props: FieldsetProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="fieldset" attrs={props} list={fieldsetList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption}
 */
export function Figcaption(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="figcaption" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure}
 */
export function Figure(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="figure" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer}
 */
export function Footer(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="footer" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Form} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes}
 */
export type FormProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#acceptcharset}
   */
  acceptcharset?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#action}
   */
  action?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#autocomplete}
   */
  autocomplete?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#enctype}
   */
  enctype?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method}
   */
  method?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#name}
   */
  name?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate}
   */
  novalidate?: boolean;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#target}
   */
  target?: HTMLAttributeAnchorTarget;
};

const formList: RenderList = [
  ...tagList,
  ["acceptcharset", renderExpression],
  ["action", renderExpression],
  ["autocomplete", renderExpression],
  ["enctype", renderExpression],
  ["method", renderExpression],
  ["name", renderExpression],
  ["novalidate", renderBoolean],
  ["target", renderEnum],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form}
 */
export function Form(
  props: FormProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="form" attrs={props} list={formList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements}
 */
export function H1(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="h1" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements}
 */
export function H2(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="h2" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements}
 */
export function H3(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="h3" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements}
 */
export function H4(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="h4" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements}
 */
export function H5(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="h5" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements}
 */
export function H6(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="h6" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head}
 */
export function Head(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="head" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header}
 */
export function Header(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="header" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr}
 */
export function Hr(props: TagProps): Expression {
  return <RenderVoidElement name="hr" attrs={props} list={tagList} />;
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html}
 */
export function Html(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="html" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i}
 */
export function I(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="i" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Iframe} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attributes}
 */
export type IframeProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow}
   */
  allow?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#height}
   */
  height?: number;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading}
   */
  loading?: "eager" | "lazy";
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#name}
   */
  name?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#referrerpolicy}
   */
  referrerpolicy?: ReferrerPolicy;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox}
   */
  sandbox?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#src}
   */
  src?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#srcdoc}
   */
  srcdoc?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#width}
   */
  width?: number;
};

const iframeList: RenderList = [
  ...tagList,
  ["allow", renderExpression],
  ["height", renderNumber],
  ["loading", renderEnum],
  ["name", renderExpression],
  ["referrerpolicy", renderEnum],
  ["sandbox", renderExpression],
  ["src", renderExpression],
  ["srcdoc", renderExpression],
  ["width", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe}
 */
export function Iframe(
  props: IframeProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="iframe" attrs={props} list={iframeList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * Props for the {@linkcode Img} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes}
 */
export type ImgProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt}
   */
  alt?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#crossorigin}
   */
  crossorigin?: CrossOrigin;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding}
   */
  decoding?: "async" | "auto" | "sync";
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#height}
   */
  height?: number;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading}
   */
  loading?: "eager" | "lazy";
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy}
   */
  referrerpolicy?: ReferrerPolicy;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes}
   */
  sizes?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src}
   */
  src?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset}
   */
  srcset?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#usemap}
   */
  usemap?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width}
   */
  width?: number;
};

const imgList: RenderList = [
  ...tagList,
  ["alt", renderExpression],
  ["crossorigin", renderEnum],
  ["decoding", renderExpression],
  ["height", renderNumber],
  ["loading", renderEnum],
  ["referrerpolicy", renderEnum],
  ["sizes", renderExpression],
  ["src", renderExpression],
  ["srcdoc", renderExpression],
  ["usemap", renderExpression],
  ["width", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img}
 */
export function Img(
  props: ImgProps & { children?: Expressions },
): Expression {
  return <RenderVoidElement name="img" attrs={props} list={imgList} />;
}

export type InputProps = TagProps & {
  accept?: Expression;
  alt?: Expression;
  autocomplete?: Expression;
  capture?: boolean | "user" | "environment"; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean;
  disabled?: boolean;
  form?: Expression;
  formaction?: Expression;
  formenctype?: Expression;
  formmethod?: Expression;
  formnovalidate?: boolean;
  formtarget?: Expression;
  height?: number;
  list?: Expression;
  max?: number;
  maxlength?: number;
  min?: number;
  minlength?: number;
  multiple?: boolean;
  name?: Expression;
  pattern?: Expression;
  placeholder?: Expression;
  readonly?: boolean;
  required?: boolean;
  size?: number;
  src?: Expression;
  step?: number;
  type?: HTMLInputTypeAttribute;
  value?: Expression;
  width?: number;
};

const inputList: RenderList = [
  ...tagList,
  ["accept", renderExpression],
  ["alt", renderExpression],
  ["autocomplete", renderExpression],
  ["capture", renderBooleanOrEnum],
  ["checked", renderBoolean],
  ["disabbled", renderBoolean],
  ["form", renderExpression],
  ["formaction", renderExpression],
  ["formenctype", renderExpression],
  ["formmethod", renderExpression],
  ["formnovalidate", renderBoolean],
  ["formtarget", renderExpression],
  ["height", renderNumber],
  ["list", renderExpression],
  ["max", renderNumber],
  ["maxlength", renderNumber],
  ["min", renderNumber],
  ["minlength", renderNumber],
  ["checked", renderBoolean],
  ["name", renderExpression],
  ["pattern", renderExpression],
  ["placeholder", renderExpression],
  ["readonly", renderBoolean],
  ["required", renderBoolean],
  ["size", renderExpression],
  ["src", renderExpression],
  ["step", renderNumber],
  ["type", renderEnum],
  ["value", renderExpression],
  ["width", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input}
 */
export function Input(
  props: InputProps & { children?: Expressions },
): Expression {
  return <RenderVoidElement name="input" attrs={props} list={inputList} />;
}

export type HTMLInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type InsProps = TagProps & {
  cite?: Expression;
  datetime?: Expression;
};

const insList: RenderList = [
  ...tagList,
  ["cite", renderExpression],
  ["datetime", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins}
 */
export function Ins(
  props: InsProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="ins" attrs={props} list={insList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd}
 */
export function Kbd(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="kbd" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type LabelProps = TagProps & {
  htmlfor?: Expression;
};

const labelList: RenderList = [
  ...tagList,
  ["for_", renderFor],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label}
 */
export function Label(
  props: LabelProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="label" attrs={props} list={labelList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend}
 */
export function Legend(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="legend" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type LiProps = TagProps & {
  value?: number;
};

const liList: RenderList = [
  ...tagList,
  ["value", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li}
 */
export function Li(
  props: LiProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="li" attrs={props} list={liList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type LinkProps = TagProps & {
  as?: Expression;
  crossorigin?: CrossOrigin;
  fetchpriority?: "high" | "low" | "auto";
  href?: Expression;
  hreflang?: Expression;
  integrity?: Expression;
  media?: Expression;
  imagesrcset?: Expression;
  imagesizes?: Expression;
  referrerpolicy?: ReferrerPolicy;
  sizes?: Expression;
  type?: Expression;
  charset?: Expression;
};

const linkList: RenderList = [
  ...tagList,
  ["as", renderExpression],
  ["crossorigin", renderEnum],
  ["fetchpriority", renderEnum],
  ["href", renderExpression],
  ["hreflang", renderExpression],
  ["integrity", renderExpression],
  ["media", renderExpression],
  ["imagesrcset", renderExpression],
  ["imagesizes", renderExpression],
  ["reffererpolicy", renderEnum],
  ["sizes", renderExpression],
  ["type", renderExpression],
  ["charset", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link}
 */
export function Link(
  props: LinkProps,
): Expression {
  return <RenderVoidElement name="link" attrs={props} list={linkList} />;
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main}
 */
export function Main(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="main" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type MapProps = TagProps & {
  name?: Expression;
};

const mapList: RenderList = [
  ...tagList,
  ["name", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map}
 */
export function Map(
  props: MapProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="map" attrs={props} list={mapList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark}
 */
export function Mark(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="mark" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type MetaProps = TagProps & {
  charset?: Expression;
  content?: Expression;
  httpequiv?: Expression;
  media?: Expression;
  name?: Expression;
};

const metaList: RenderList = [
  ...tagList,
  ["charset", renderExpression],
  ["content", renderExpression],
  ["httpequiv", renderExpression],
  ["media", renderExpression],
  ["name", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta}
 */
export function Meta(
  props: MetaProps,
): Expression {
  return <RenderVoidElement name="meta" attrs={props} list={metaList} />;
}

export type MeterProps = TagProps & {
  form?: Expression;
  high?: number;
  low?: number;
  max?: number;
  min?: number;
  optimum?: number;
  value?: number;
};

const meterList: RenderList = [
  ...tagList,
  ["form", renderExpression],
  ["high", renderNumber],
  ["low", renderNumber],
  ["max", renderNumber],
  ["min", renderNumber],
  ["optimum", renderNumber],
  ["value", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter}
 */
export function Meter(
  props: MeterProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="meter" attrs={props} list={meterList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nac}
 */
export function Nav(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="nav" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript}
 */
export function Noscript(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="noscript" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type ObjectProps = TagProps & {
  data?: Expression;
  form?: Expression;
  height?: number;
  name?: Expression;
  type?: Expression;
  usemap?: Expression;
  width?: number;
};

const objectList: RenderList = [
  ...tagList,
  ["data", renderExpression],
  ["form", renderExpression],
  ["height", renderNumber],
  ["name", renderExpression],
  ["type", renderExpression],
  ["usemap", renderExpression],
  ["width", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object}
 */
export function Object(
  props: ObjectProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="object" attrs={props} list={objectList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type OlProps = TagProps & {
  reversed?: boolean;
  start?: number;
  type?: "1" | "a" | "A" | "i" | "I";
};

const olList: RenderList = [
  ...tagList,
  ["reversed", renderBoolean],
  ["start", renderNumber],
  ["type", renderEnum],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol}
 */
export function Ol(
  props: OlProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="ol" attrs={props} list={olList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type OptgroupProps = TagProps & {
  disabled?: boolean;
  label?: Expression;
};

const optgroupList: RenderList = [
  ...tagList,
  ["disabled", renderBoolean],
  ["label", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup}
 */
export function Optgroup(
  props: OptgroupProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="optgroup" attrs={props} list={optgroupList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type OptionProps = TagProps & {
  disabled?: boolean;
  label?: Expression;
  selected?: boolean;
  value?: Expression;
};

const optionList: RenderList = [
  ...tagList,
  ["disabled", renderBoolean],
  ["label", renderExpression],
  ["selected", renderBoolean],
  ["value", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option}
 */
export function Option(
  props: OptionProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="option" attrs={props} list={optionList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type OutputProps = TagProps & {
  for_?: Expression;
  form?: Expression;
  name?: Expression;
};

const outputList: RenderList = [
  ...tagList,
  ["for_", renderFor],
  ["form", renderExpression],
  ["name", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output}
 */
export function Output(
  props: OutputProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="output" attrs={props} list={outputList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p}
 */
export function P(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="p" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture}
 */
export function Picture(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="picture" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre}
 */
export function Pre(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="pre" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type ProgressProps = TagProps & {
  max?: number;
  value?: number;
};

const progressList: RenderList = [
  ...tagList,
  ["max", renderNumber],
  ["value", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress}
 */
export function Progress(
  props: ProgressProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="progress" attrs={props} list={progressList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type QProps = TagProps & {
  cite?: Expression;
};

const qList: RenderList = [
  ...tagList,
  ["cite", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q}
 */
export function Q(
  props: QProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="q" attrs={props} list={qList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp}
 */
export function Rp(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="rp" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt}
 */
export function Rt(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="rt" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby}
 */
export function Ruby(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="ruby" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s}
 */
export function S(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="s" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp}
 */
export function Samp(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="samp" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type ScriptProps = TagProps & {
  async?: boolean;
  crossorigin?: CrossOrigin;
  defer?: boolean;
  integrity?: Expression;
  nomodule?: boolean;
  referrerpolicy?: ReferrerPolicy;
  src?: Expression;
  type?: Expression;
};

const scriptList: RenderList = [
  ...tagList,
  ["async", renderBoolean],
  ["crossorigin", renderEnum],
  ["defer", renderBoolean],
  ["integrity", renderExpression],
  ["nomodule", renderBoolean],
  ["referrerpolicy", renderEnum],
  ["src", renderExpression],
  ["type", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script}
 */
export function Script(
  props: ScriptProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="script" attrs={props} list={scriptList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search}
 */
export function Search(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="search" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section}
 */
export function Section(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="section" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type SelectProps = TagProps & {
  autocomplete?: Expression;
  disabled?: boolean;
  form?: Expression;
  multiple?: boolean;
  name?: Expression;
  required?: boolean;
  size?: number;
  value?: Expression;
};

const selectList: RenderList = [
  ...tagList,
  ["autocomplete", renderExpression],
  ["disabled", renderBoolean],
  ["form", renderExpression],
  ["multiple", renderBoolean],
  ["name", renderExpression],
  ["required", renderBoolean],
  ["size", renderNumber],
  ["value", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select}
 */
export function Select(
  props: SelectProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="select" attrs={props} list={selectList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type SlotProps = TagProps & {
  name?: Expression;
};

const slotList: RenderList = [
  ...tagList,
  ["name", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot}
 */
export function Slot(
  props: SlotProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="slot" attrs={props} list={slotList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small}
 */
export function Small(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="small" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type SourceProps = TagProps & {
  height?: number;
  media?: Expression;
  sizes?: Expression;
  src?: Expression;
  srcset?: Expression;
  type?: Expression;
  width?: number;
};

const sourceList: RenderList = [
  ...tagList,
  ["height", renderNumber],
  ["media", renderExpression],
  ["sizes", renderExpression],
  ["src", renderExpression],
  ["srcset", renderExpression],
  ["type", renderExpression],
  ["width", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source}
 */
export function Source(
  props: SourceProps,
): Expression {
  return <RenderVoidElement name="source" attrs={props} list={sourceList} />;
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span}
 */
export function Span(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="span" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong}
 */
export function Strong(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="strong" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type StyleProps = TagProps & {
  media?: Expression;
  scoped?: boolean;
  type?: Expression;
};

const styleList: RenderList = [
  ...tagList,
  ["media", renderExpression],
  ["scoped", renderBoolean],
  ["type", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style}
 */
export function Style(
  props: StyleProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="style" attrs={props} list={styleList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub}
 */
export function Sub(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="sub" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary}
 */
export function Summary(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="summary" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup}
 */
export function Sup(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="sup" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table}
 */
export function Table(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="table" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody}
 */
export function Tbody(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="tbody" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type TdProps = TagProps & {
  colspan?: number;
  headers?: Expression;
  rowspan?: number;
};

const tdList: RenderList = [
  ...tagList,
  ["colspan", renderNumber],
  ["headers", renderExpression],
  ["rowspan", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td}
 */
export function Td(
  props: TdProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="td" attrs={props} list={tdList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template}
 */
export function Template(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="template" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type TextareaProps = TagProps & {
  autocomplete?: Expression;
  cols?: number;
  dirname?: Expression;
  disabled?: boolean;
  form?: Expression;
  maxlength?: number;
  minlength?: number;
  name?: Expression;
  placeholder?: Expression;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  value?: Expression | readonly Expression[] | number;
  wrap?: Expression;
};

const textareaList: RenderList = [
  ...tagList,
  ["autocomplete", renderExpression],
  ["cols", renderNumber],
  ["dirname", renderExpression],
  ["disabled", renderBoolean],
  ["form", renderExpression],
  ["maxlength", renderNumber],
  ["minlength", renderNumber],
  ["name", renderExpression],
  ["placeholder", renderExpression],
  ["readonly", renderBoolean],
  ["required", renderBoolean],
  ["rows", renderNumber],
  ["value", renderExpression],
  ["wrap", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea}
 */
export function Textarea(
  props: TextareaProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="textarea" attrs={props} list={textareaList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot}
 */
export function Tfoot(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="tfoot" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type ThProps = TagProps & {
  abbr?: Expression;
  align?: "left" | "center" | "right" | "justify" | "char";
  colspan?: number;
  headers?: Expression;
  rowspan?: number;
  scope?: Expression;
};

const thList: RenderList = [
  ...tagList,
  ["abbr", renderExpression],
  ["align", renderEnum],
  ["colspan", renderNumber],
  ["headers", renderExpression],
  ["rowspan", renderNumber],
  ["scope", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th}
 */
export function Th(
  props: ThProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="th" attrs={props} list={thList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead}
 */
export function Thead(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="thead" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type TimeProps = TagProps & {
  datetime?: Expression;
};

const timeList: RenderList = [
  ...tagList,
  ["datetime", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time}
 */
export function Time(
  props: TimeProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="time" attrs={props} list={timeList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title}
 */
export function Title(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="title" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr}
 */
export function Tr(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="tr" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type TrackProps = TagProps & {
  default?: boolean;
  kind?: Expression;
  label?: Expression;
  src?: Expression;
  srclang?: Expression;
};

const trackList: RenderList = [
  ...tagList,
  ["default", renderBoolean],
  ["kind", renderExpression],
  ["label", renderExpression],
  ["src", renderExpression],
  ["srclang", renderExpression],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track}
 */
export function Track(
  props: TrackProps,
): Expression {
  return <RenderVoidElement name="track" attrs={props} list={trackList} />;
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u}
 */
export function U(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="u" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul}
 */
export function Ul(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="ul" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var}
 */
export function Var(
  props: TagProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="var" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

export type VideoProps = TagProps & {
  disablepictureinpicture?: boolean;
  disableremoteplayback?: boolean;
  height?: number;
  playsinline?: boolean;
  poster?: Expression;
  width?: number;
};

const videoList: RenderList = [
  ...tagList,
  ["disablepictureinpicture", renderBoolean],
  ["disableremoteplayback", renderBoolean],
  ["height", renderNumber],
  ["playsinline", renderBoolean],
  ["poster", renderExpression],
  ["width", renderNumber],
];

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video}
 */
export function Video(
  props: VideoProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement name="video" attrs={props} list={videoList}>
      {props.children}
    </RenderNonVoidElement>
  );
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr}
 */
export function Wbr(props: TagProps): Expression {
  return <RenderVoidElement name="wbr" attrs={props} list={tagList} />;
}

// export type SvgProps = AriaProps & {
//   // Attributes which also defined in HTMLAttributes
//   // See comment in SVGDOMPropertyConfig.js
//   clazz?: Expression;
//   color?: Expression;
//   height?: number;
//   id?: Expression;
//   lang?: Expression;
//   max?: number;
//   media?: Expression;
//   method?: Expression;
//   min?: number;
//   name?: Expression;
//   style?: CssProperties;
//   target?: HTMLAttributeAnchorTarget;
//   type?: Expression;
//   width?: number;

//   // Other HTML properties supported by SVG elements in browsers
//   role?: AriaRole;
//   tabindex?: number;
//   crossOrigin?: CrossOrigin;

//   // SVG Specific attributes
//   accentHeight?: number | Expression;
//   accumulate?: "none" | "sum";
//   additive?: "replace" | "sum";
//   alignmentBaseline?:
//     | "auto"
//     | "baseline"
//     | "before-edge"
//     | "text-before-edge"
//     | "middle"
//     | "central"
//     | "after-edge"
//     | "text-after-edge"
//     | "ideographic"
//     | "alphabetic"
//     | "hanging"
//     | "mathematical"
//     | "inherit"
//    ;
//   allowReorder?: "no" | "yes";
//   alphabetic?: number | Expression;
//   amplitude?: number | Expression;
//   arabicForm?: "initial" | "medial" | "terminal" | "isolated";
//   ascent?: number | Expression;
//   attributeName?: Expression;
//   attributeType?: Expression;
//   autoReverse?: boolean;
//   azimuth?: number | Expression;
//   baseFrequency?: number | Expression;
//   baselineShift?: number | Expression;
//   baseProfile?: number | Expression;
//   bbox?: number | Expression;
//   begin?: number | Expression;
//   bias?: number | Expression;
//   by?: number | Expression;
//   calcMode?: number | Expression;
//   capHeight?: number | Expression;
//   clip?: number | Expression;
//   clipPath?: Expression;
//   clipPathUnits?: number | Expression;
//   clipRule?: number | Expression;
//   colorInterpolation?: number | Expression;
//   colorInterpolationFilters?:
//     | "auto"
//     | "sRGB"
//     | "linearRGB"
//     | "inherit"
//    ;
//   colorProfile?: number | Expression;
//   colorRendering?: number | Expression;
//   contentScriptType?: number | Expression;
//   contentStyleType?: number | Expression;
//   cursor?: number | Expression;
//   cx?: number | Expression;
//   cy?: number | Expression;
//   d?: Expression;
//   decelerate?: number | Expression;
//   descent?: number | Expression;
//   diffuseConstant?: number | Expression;
//   direction?: number | Expression;
//   display?: number | Expression;
//   divisor?: number | Expression;
//   dominantBaseline?: number | Expression;
//   dur?: number | Expression;
//   dx?: number | Expression;
//   dy?: number | Expression;
//   edgeMode?: number | Expression;
//   elevation?: number | Expression;
//   enableBackground?: number | Expression;
//   end?: number | Expression;
//   exponent?: number | Expression;
//   externalResourcesRequired?: boolean;
//   fill?: Expression;
//   fillOpacity?: number | Expression;
//   fillRule?: "nonzero" | "evenodd" | "inherit";
//   filter?: Expression;
//   filterRes?: number | Expression;
//   filterUnits?: number | Expression;
//   floodColor?: number | Expression;
//   floodOpacity?: number | Expression;
//   focusable?: boolean | "auto";
//   fontFamily?: Expression;
//   fontSize?: number | Expression;
//   fontSizeAdjust?: number | Expression;
//   fontStretch?: number | Expression;
//   fontStyle?: number | Expression;
//   fontVariant?: number | Expression;
//   fontWeight?: number | Expression;
//   format?: number | Expression;
//   fr?: number | Expression;
//   from?: number | Expression;
//   fx?: number | Expression;
//   fy?: number | Expression;
//   g1?: number | Expression;
//   g2?: number | Expression;
//   glyphName?: number | Expression;
//   glyphOrientationHorizontal?: number | Expression;
//   glyphOrientationVertical?: number | Expression;
//   glyphRef?: number | Expression;
//   gradientTransform?: Expression;
//   gradientUnits?: Expression;
//   hanging?: number | Expression;
//   horizAdvX?: number | Expression;
//   horizOriginX?: number | Expression;
//   href?: Expression;
//   ideographic?: number | Expression;
//   imageRendering?: number | Expression;
//   in2?: number | Expression;
//   in?: Expression;
//   intercept?: number | Expression;
//   k1?: number | Expression;
//   k2?: number | Expression;
//   k3?: number | Expression;
//   k4?: number | Expression;
//   k?: number | Expression;
//   kernelMatrix?: number | Expression;
//   kernelUnitLength?: number | Expression;
//   kerning?: number | Expression;
//   keyPoints?: number | Expression;
//   keySplines?: number | Expression;
//   keyTimes?: number | Expression;
//   lengthAdjust?: number | Expression;
//   letterSpacing?: number | Expression;
//   lightingColor?: number | Expression;
//   limitingConeAngle?: number | Expression;
//   local?: number | Expression;
//   markerEnd?: Expression;
//   markerHeight?: number | Expression;
//   markerMid?: Expression;
//   markerStart?: Expression;
//   markerUnits?: number | Expression;
//   markerWidth?: number | Expression;
//   mask?: Expression;
//   maskContentUnits?: number | Expression;
//   maskUnits?: number | Expression;
//   mathematical?: number | Expression;
//   mode?: number | Expression;
//   numOctaves?: number | Expression;
//   offset?: number | Expression;
//   opacity?: number | Expression;
//   operator?: number | Expression;
//   order?: number | Expression;
//   orient?: number | Expression;
//   orientation?: number | Expression;
//   origin?: number | Expression;
//   overflow?: number | Expression;
//   overlinePosition?: number | Expression;
//   overlineThickness?: number | Expression;
//   paintOrder?: number | Expression;
//   panose1?: number | Expression;
//   path?: Expression;
//   pathLength?: number | Expression;
//   patternContentUnits?: Expression;
//   patternTransform?: number | Expression;
//   patternUnits?: Expression;
//   pointerEvents?: number | Expression;
//   points?: Expression;
//   pointsAtX?: number | Expression;
//   pointsAtY?: number | Expression;
//   pointsAtZ?: number | Expression;
//   preserveAlpha?: boolean;
//   preserveAspectRatio?: Expression;
//   primitiveUnits?: number | Expression;
//   r?: number | Expression;
//   radius?: number | Expression;
//   refX?: number | Expression;
//   refY?: number | Expression;
//   renderingIntent?: number | Expression;
//   repeatCount?: number | Expression;
//   repeatDur?: number | Expression;
//   requiredExtensions?: number | Expression;
//   requiredFeatures?: number | Expression;
//   restart?: number | Expression;
//   result?: Expression;
//   rotate?: number | Expression;
//   rx?: number | Expression;
//   ry?: number | Expression;
//   scale?: number | Expression;
//   seed?: number | Expression;
//   shapeRendering?: number | Expression;
//   slope?: number | Expression;
//   spacing?: number | Expression;
//   specularConstant?: number | Expression;
//   specularExponent?: number | Expression;
//   speed?: number | Expression;
//   spreadMethod?: Expression;
//   startOffset?: number | Expression;
//   stdDeviation?: number | Expression;
//   stemh?: number | Expression;
//   stemv?: number | Expression;
//   stitchTiles?: number | Expression;
//   stopColor?: Expression;
//   stopOpacity?: number | Expression;
//   strikethroughPosition?: number | Expression;
//   strikethroughThickness?: number | Expression;
//   Expression?: number | Expression;
//   stroke?: Expression;
//   strokeDasharray?: Expression | number;
//   strokeDashoffset?: Expression | number;
//   strokeLinecap?: "butt" | "round" | "square" | "inherit";
//   strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
//   strokeMiterlimit?: number | Expression;
//   strokeOpacity?: number | Expression;
//   strokeWidth?: number | Expression;
//   surfaceScale?: number | Expression;
//   systemLanguage?: number | Expression;
//   tableValues?: number | Expression;
//   targetX?: number | Expression;
//   targetY?: number | Expression;
//   textAnchor?: Expression;
//   textDecoration?: number | Expression;
//   textLength?: number | Expression;
//   textRendering?: number | Expression;
//   to?: number | Expression;
//   transform?: Expression;
//   u1?: number | Expression;
//   u2?: number | Expression;
//   underlinePosition?: number | Expression;
//   underlineThickness?: number | Expression;
//   unicode?: number | Expression;
//   unicodeBidi?: number | Expression;
//   unicodeRange?: number | Expression;
//   unitsPerEm?: number | Expression;
//   vAlphabetic?: number | Expression;
//   values?: Expression;
//   vectorEffect?: number | Expression;
//   version?: Expression;
//   vertAdvY?: number | Expression;
//   vertOriginX?: number | Expression;
//   vertOriginY?: number | Expression;
//   vHanging?: number | Expression;
//   vIdeographic?: number | Expression;
//   viewBox?: Expression;
//   viewTarget?: number | Expression;
//   visibility?: number | Expression;
//   vMathematical?: number | Expression;
//   widths?: number | Expression;
//   wordSpacing?: number | Expression;
//   writingMode?: number | Expression;
//   x1?: number | Expression;
//   x2?: number | Expression;
//   x?: number | Expression;
//   xChannelSelector?: Expression;
//   xHeight?: number | Expression;
//   xlinkActuate?: Expression;
//   xlinkArcrole?: Expression;
//   xlinkHref?: Expression;
//   xlinkRole?: Expression;
//   xlinkShow?: Expression;
//   xlinkTitle?: Expression;
//   xlinkType?: Expression;
//   xmlBase?: Expression;
//   xmlLang?: Expression;
//   xmlns?: Expression;
//   xmlnsXlink?: Expression;
//   xmlSpace?: Expression;
//   y1?: number | Expression;
//   y2?: number | Expression;
//   y?: number | Expression;
//   yChannelSelector?: Expression;
//   z?: number | Expression;
//   zoomAndPan?: Expression;
// };

/////////////////////////////
/////////////////////////////
///// Output Generation /////
/////////////////////////////
/////////////////////////////

function escapeHtmlString(raw: string): string {
  return raw.replaceAll(/&|<|>|"|'/g, (match) => {
    if (match === `&`) {
      return `&amp;`;
    } else if (match === `<`) {
      return `&lt;`;
    } else if (match === `>`) {
      return `&gt;`;
    } else if (match === `"`) {
      return `&quot;`;
    } else if (match === `'`) {
      return `&#39;`;
    } else {
      throw new Error("unreachable");
    }
  });
}

function EscapeHtml({ children }: { children?: Expressions }): Expression {
  return (
    <map
      fun={(evaled, _ctx) => {
        return escapeHtmlString(evaled);
      }}
    >
      {expressions(children)}
    </map>
  );
}

type RenderList = [
  string, /* tag name */
  (attr: string, value: any) => Expression | null,
][];

function renderExpression(attr: string, value: Expression): Expression | null {
  return <>{attr}="{<EscapeHtml>{value}</EscapeHtml>}"</>;
}

function renderSpaceSeparatedList(
  attr: string,
  list: Expression[],
): Expression | null {
  const actualExps: Expression[] = [];

  let first = true;
  for (const exp of list) {
    if (!first) {
      actualExps.push(" ");
    }

    actualExps.push(exp);

    first = false;
  }
  return (
    <>
      {attr}="{
        <EscapeHtml>
          <fragment exps={actualExps} />
        </EscapeHtml>
      }"
    </>
  );
}

function renderBoolean(attr: string, value: any): Expression | null {
  return (value as boolean) ? attr : null;
}

function renderNumber(attr: string, value: any): Expression | null {
  return <>{attr}="{`${value}`}"</>;
}

function renderEnum(attr: string, value: any): Expression | null {
  return <>{attr}="{`${value}`}"</>;
}

function renderBooleanOrEnum(attr: string, value: any): Expression | null {
  if (typeof value === "boolean") {
    return renderBoolean(attr, value);
  } else {
    return renderEnum(attr, value);
  }
}

function renderYesNo(attr: string, value: any): Expression | null {
  return value === true ? <>{attr}="yes"</> : <>{attr}="no"</>;
}

function renderTrueFalse(attr: string, value: any): Expression | null {
  return value === true ? <>{attr}="true"</> : <>{attr}="false"</>;
}

function renderFor(_attr: string, value: any): Expression | null {
  return <>for="{<EscapeHtml>{value}</EscapeHtml>}"</>;
}

function renderClass(_attr: string, exps: any): Expression | null {
  return renderSpaceSeparatedList("class", exps);
}

function renderExportparts(_attr: string, parts_: any): Expression | null {
  const parts: (Expression | [Expression, Expression])[] = parts_;
  const exps: Expression[] = [];

  let first = true;
  for (const part of parts) {
    if (Array.isArray(part)) {
      exps.push(part[0]);
      exps.push(": ");
      exps.push(part[1]);
    } else {
      exps.push(part);
    }

    if (!first) {
      exps.push(",");
    }

    first = false;
  }

  return <>exportparts="{<fragment exps={exps} />}"</>;
}

function RenderRenderList(
  { attrs, list }: { attrs: Record<PropertyKey, any>; list: RenderList },
): Expression {
  const result: Expression[] = [];

  if (attrs.data !== undefined) {
    const data = attrs.data as Record<string, Expression>;
    for (const key in data) {
      const rendered = renderExpression(`data-${key}`, data[key]);
      if (rendered !== null) {
        result.push(" ");
        result.push(rendered);
      }
    }
  }

  for (const [attrName, renderFun] of list) {
    if (attrs[attrName] != undefined) {
      const rendered = renderFun(attrName, attrs[attrName]);
      if (rendered !== null) {
        result.push(" ");
        result.push(rendered);
      }
    }
  }

  return <fragment exps={result} />;
}

// "void element" is the official name for "self-closing tags".
function RenderVoidElement(
  { name, attrs, list }: {
    name: string;
    attrs: Record<PropertyKey, any>;
    list: RenderList;
  },
): Expression {
  return (
    <>
      {"<"}
      {name}
      <RenderRenderList attrs={attrs} list={list} /> {"/>"}
    </>
  );
}

function RenderNonVoidElement(
  { name, attrs, list, children }: {
    name: string;
    attrs: Record<PropertyKey, any>;
    list: RenderList;
    children: Expressions;
  },
): Expression {
  return (
    <>
      {"<"}
      {name}
      <RenderRenderList attrs={attrs} list={list} />
      {">"}
      <EscapeHtml>{expressions(children)}</EscapeHtml>
      {"</"}
      {name}
      {">"}
    </>
  );
}
