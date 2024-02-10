// deno-lint-ignore-file no-explicit-any
/*
Macros for generating html.

Heavily based off the definitely-typed react typings for html (MIT-licensed): https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
*/

import { Expression, Expressions, expressions } from "./deps.ts";

// Might replace this with proper typing at a later point.
export type CssProperties = Expression;

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin MDN}
 */
export type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;

/**
 * All the WAI-ARIA 1.1 attributes from {@link https://www.w3.org/TR/wai-aria-1.1/}
 */
export type AriaProps = {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  "aria-activedescendant"?: Expression | undefined;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  "aria-atomic"?: boolean | undefined;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  /**
   * Defines a string value that labels the current element, which is intended to be converted into Braille.
   * @see aria-label.
   */
  "aria-braillelabel"?: Expression | undefined;
  /**
   * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
   * @see aria-roledescription.
   */
  "aria-brailleroledescription"?: Expression | undefined;
  "aria-busy"?: boolean | undefined;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "mixed" | undefined;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  "aria-colcount"?: number | undefined;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number | undefined;
  /**
   * Defines a human readable text alternative of aria-colindex.
   * @see aria-rowindextext.
   */
  "aria-colindextext"?: Expression | undefined;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number | undefined;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  "aria-controls"?: Expression | undefined;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  "aria-current"?:
    | boolean
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | undefined;
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  "aria-describedby"?: Expression | undefined;
  /**
   * Defines a string value that describes or annotates the current element.
   * @see related aria-describedby.
   */
  "aria-description"?: Expression | undefined;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  "aria-details"?: Expression | undefined;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: boolean | undefined;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  "aria-dropeffect"?:
    | "none"
    | "copy"
    | "execute"
    | "link"
    | "move"
    | "popup"
    | undefined;
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: Expression | undefined;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  "aria-expanded"?: boolean | undefined;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  "aria-flowto"?: Expression | undefined;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  "aria-grabbed"?: boolean | undefined;
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  "aria-haspopup"?:
    | boolean
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog"
    | undefined;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  "aria-hidden"?: boolean | undefined;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  "aria-invalid"?:
    | boolean
    | "grammar"
    | "spelling"
    | undefined;
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  "aria-keyshortcuts"?: Expression | undefined;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  "aria-label"?: Expression | undefined;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  "aria-labelledby"?: Expression | undefined;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number | undefined;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  "aria-live"?: "off" | "assertive" | "polite" | undefined;
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: boolean | undefined;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: boolean | undefined;
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  "aria-multiselectable"?: boolean | undefined;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical" | undefined;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  "aria-owns"?: Expression | undefined;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  "aria-placeholder"?: Expression | undefined;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  "aria-posinset"?: number | undefined;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "mixed" | undefined;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  "aria-readonly"?: boolean | undefined;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  "aria-relevant"?:
    | "additions"
    | "additions removals"
    | "additions text"
    | "all"
    | "removals"
    | "removals additions"
    | "removals text"
    | "text"
    | "text additions"
    | "text removals"
    | undefined;
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: boolean | undefined;
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: Expression | undefined;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number | undefined;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number | undefined;
  /**
   * Defines a human readable text alternative of aria-rowindex.
   * @see aria-colindextext.
   */
  "aria-rowindextext"?: Expression | undefined;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number | undefined;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: boolean | undefined;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  "aria-setsize"?: number | undefined;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number | undefined;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number | undefined;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number | undefined;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: Expression | undefined;
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
  | "button"
  | "cell"
  | "checkbox"
  | "columnheader"
  | "combobox"
  | "complementary"
  | "contentinfo"
  | "definition"
  | "dialog"
  | "directory"
  | "document"
  | "feed"
  | "figure"
  | "form"
  | "grid"
  | "gridcell"
  | "group"
  | "heading"
  | "img"
  | "link"
  | "list"
  | "listbox"
  | "listitem"
  | "log"
  | "main"
  | "marquee"
  | "math"
  | "menu"
  | "menubar"
  | "menuitem"
  | "menuitemcheckbox"
  | "menuitemradio"
  | "navigation"
  | "none"
  | "note"
  | "option"
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
  | "switch"
  | "tab"
  | "table"
  | "tablist"
  | "tabpanel"
  | "term"
  | "textbox"
  | "timer"
  | "toolbar"
  | "tooltip"
  | "tree"
  | "treegrid"
  | "treeitem";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes}
 */
export type TagProps = AriaProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey}
   */
  accesskey?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize}
   */
  autocapitalize?:
    | "none"
    | "off"
    | "sentences"
    | "on"
    | "words"
    | "characters"
    | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus}
   */
  autofocus?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class}
   */
  clazz?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable}
   */
  contenteditable?: boolean | "plaintext-only" | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*}
   *
   * The macro emits an attribute `data-<key>="<value>"` for each
   * entry `<key>: <value>` in this record.
   */
  data?: Record<string, Expression>;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir}
   */
  dir?: "ltr" | "rtl" | "auto" | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable}
   */
  draggable?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint}
   */
  enterkeyhint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send"
    | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}
   */
  exportparts?: Expression | undefined;
  /**
   *  @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden}
   */
  hidden?: "hidden" | "until-found" | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id}
   */
  id?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert}
   */
  inert?: boolean | undefined;
  /**
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}
   */
  inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  /**
   * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}
   */
  is?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemid}
   */
  itemid?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop}
   */
  itemprop?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemref}
   */
  itemref?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope}
   */
  itemscope?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype}
   */
  itemtype?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang}
   */
  lang?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce}
   */
  nonce?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}
   */
  part?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover}
   */
  popover?: "auto" | "manual" | null;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles}
   */
  role?: AriaRole | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot}
   */
  slot?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck}
   */
  spellcheck?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style}
   */
  style?: CssProperties | undefined;
  /**
   *  @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex}
   */
  tabindex?: number | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title}
   */
  title?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate}
   */
  translate?: boolean | undefined;
};

const tagList: RenderList = [
  ...ariaList,
  ["about", renderExpression],
  ["accesskey", renderExpression],
  ["autocapitalize", renderExpression],
  ["autofocus", renderBoolean],
  ["contenteditable", renderBooleanOrEnum],
  ["contextmenu", renderExpression],
  ["dir", renderExpression],
  ["draggable", renderTrueFalse],
  ["enterkeyhint", renderEnum],
  ["exportparts", renderExpression],
  ["hidden", renderEnum],
  ["id", renderExpression],
  ["inert", renderBoolean],
  ["inputmode", renderEnum],
  ["is", renderExpression],
  ["itemid", renderExpression],
  ["itemprop", renderExpression],
  ["itemref", renderExpression],
  ["itemscope", renderBoolean],
  ["itemtype", renderExpression],
  ["lang", renderExpression],
  ["nonce", renderExpression],
  ["part", renderExpression],
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
 * Props for the {@linkcode A} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes}
 */
export type AProps = TagProps & {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download}
   */
  download?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href}
   */
  href?: Expression | undefined;
  /**
   *  @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang}
   */
  hreflang?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping}
   */
  ping?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy}
   */
  referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel}
   */
  rel?: Expression;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target}
   */
  target?: HTMLAttributeAnchorTarget | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#type}
   */
  type?: Expression | undefined;
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
  alt?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#alt}
   */
  coords?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#download}
   */
  download?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#href}
   */
  href?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#ping}
   */
  ping?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#referrerpolicy}
   */
  referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
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
  target?: HTMLAttributeAnchorTarget | undefined;
};

export type HTMLAttributeAnchorTarget =
  | "_self"
  | "_blank"
  | "_parent"
  | "_top";

export type HTMLAttributeReferrerPolicy =
  | ""
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
  autoplay?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#controls}
   */
  controls?: boolean | undefined;
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
    | "nodownload nofullscreen noremoteplayback"
    | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#crossorigin}
   */
  crossorigin?: CrossOrigin;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#loop}
   */
  loop?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#muted}
   */
  muted?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#preload}
   */
  preload?: "none" | "metadata" | "auto" | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#src}
   */
  src?: Expression | undefined;
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
  href?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#target}
   */
  target?: HTMLAttributeAnchorTarget | undefined;
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
  cite?: Expression | undefined;
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
  disabled?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form}
   */
  form?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formaction}
   */
  formaction?:
    | Expression
    | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formenctype}
   */
  formenctype?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formmethod}
   */
  formmethod?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formnovalidate}
   */
  formnovalidate?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formtarget}
   */
  formtarget?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name}
   */
  name?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type}
   */
  type?: "submit" | "reset" | "button" | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value}
   */
  value?: Expression | undefined;
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
  height?: number | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#width}
   */
  width?: number | undefined;
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
  span?: number | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#width}
   */
  width?: number | undefined;
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
  span?: number | undefined;
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
  value?: Expression | undefined;
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
  cite?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del#datetime}
   */
  datetime?: Expression | undefined;
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
  open?: boolean | undefined;
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
  open?: boolean | undefined;
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
  disabled?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#form}
   */
  form?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#name}
   */
  name?: Expression | undefined;
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
  acceptcharset?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#action}
   */
  action?:
    | Expression
    | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#autocomplete}
   */
  autocomplete?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#enctype}
   */
  enctype?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method}
   */
  method?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#name}
   */
  name?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate}
   */
  novalidate?: boolean | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#target}
   */
  target?: HTMLAttributeAnchorTarget | undefined;
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
  allow?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#height}
   */
  height?: number | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading}
   */
  loading?: "eager" | "lazy" | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#name}
   */
  name?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#referrerpolicy}
   */
  referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox}
   */
  sandbox?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#src}
   */
  src?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#srcdoc}
   */
  srcdoc?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#width}
   */
  width?: number | undefined;
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
  alt?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#crossorigin}
   */
  crossorigin?: CrossOrigin;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding}
   */
  decoding?: "async" | "auto" | "sync" | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#height}
   */
  height?: number | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading}
   */
  loading?: "eager" | "lazy" | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy}
   */
  referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes}
   */
  sizes?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src}
   */
  src?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset}
   */
  srcset?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#usemap}
   */
  usemap?: Expression | undefined;
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width}
   */
  width?: number | undefined;
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
  accept?: Expression | undefined;
  alt?: Expression | undefined;
  autocomplete?: Expression | undefined;
  capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: Expression | undefined;
  formaction?:
    | Expression
    | undefined;
  formenctype?: Expression | undefined;
  formmethod?: Expression | undefined;
  formnovalidate?: boolean | undefined;
  formtarget?: Expression | undefined;
  height?: number | undefined;
  list?: Expression | undefined;
  max?: number | undefined;
  maxlength?: number | undefined;
  min?: number | undefined;
  minlength?: number | undefined;
  multiple?: boolean | undefined;
  name?: Expression | undefined;
  pattern?: Expression | undefined;
  placeholder?: Expression | undefined;
  readonly?: boolean | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  src?: Expression | undefined;
  step?: number | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  value?: Expression | undefined;
  width?: number | undefined;
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
  cite?: Expression | undefined;
  datetime?: Expression | undefined;
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
  htmlfor?: Expression | undefined;
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
  value?: number | undefined;
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
  as?: Expression | undefined;
  crossorigin?: CrossOrigin;
  fetchpriority?: "high" | "low" | "auto";
  href?: Expression | undefined;
  hreflang?: Expression | undefined;
  integrity?: Expression | undefined;
  media?: Expression | undefined;
  imagesrcset?: Expression | undefined;
  imagesizes?: Expression | undefined;
  referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
  sizes?: Expression | undefined;
  type?: Expression | undefined;
  charset?: Expression | undefined;
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
  name?: Expression | undefined;
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
  charset?: Expression | undefined;
  content?: Expression | undefined;
  httpequiv?: Expression | undefined;
  media?: Expression | undefined;
  name?: Expression | undefined;
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
  form?: Expression | undefined;
  high?: number | undefined;
  low?: number | undefined;
  max?: number | undefined;
  min?: number | undefined;
  optimum?: number | undefined;
  value?: number | undefined;
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
  data?: Expression | undefined;
  form?: Expression | undefined;
  height?: number | undefined;
  name?: Expression | undefined;
  type?: Expression | undefined;
  usemap?: Expression | undefined;
  width?: number | undefined;
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
  reversed?: boolean | undefined;
  start?: number | undefined;
  type?: "1" | "a" | "A" | "i" | "I" | undefined;
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
  disabled?: boolean | undefined;
  label?: Expression | undefined;
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
  disabled?: boolean | undefined;
  label?: Expression | undefined;
  selected?: boolean | undefined;
  value?: Expression | undefined;
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
  for_?: Expression | undefined;
  form?: Expression | undefined;
  name?: Expression | undefined;
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
  max?: number | undefined;
  value?: number | undefined;
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
  cite?: Expression | undefined;
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
  async?: boolean | undefined;
  crossorigin?: CrossOrigin;
  defer?: boolean | undefined;
  integrity?: Expression | undefined;
  nomodule?: boolean | undefined;
  referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
  src?: Expression | undefined;
  type?: Expression | undefined;
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
  autocomplete?: Expression | undefined;
  disabled?: boolean | undefined;
  form?: Expression | undefined;
  multiple?: boolean | undefined;
  name?: Expression | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  value?: Expression | undefined;
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
  name?: Expression | undefined;
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
  height?: number | undefined;
  media?: Expression | undefined;
  sizes?: Expression | undefined;
  src?: Expression | undefined;
  srcset?: Expression | undefined;
  type?: Expression | undefined;
  width?: number | undefined;
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
  media?: Expression | undefined;
  scoped?: boolean | undefined;
  type?: Expression | undefined;
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
  colspan?: number | undefined;
  headers?: Expression | undefined;
  rowspan?: number | undefined;
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
  autocomplete?: Expression | undefined;
  cols?: number | undefined;
  dirname?: Expression | undefined;
  disabled?: boolean | undefined;
  form?: Expression | undefined;
  maxlength?: number | undefined;
  minlength?: number | undefined;
  name?: Expression | undefined;
  placeholder?: Expression | undefined;
  readonly?: boolean | undefined;
  required?: boolean | undefined;
  rows?: number | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
  wrap?: Expression | undefined;
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
  abbr?: Expression | undefined;
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colspan?: number | undefined;
  headers?: Expression | undefined;
  rowspan?: number | undefined;
  scope?: Expression | undefined;
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
  datetime?: Expression | undefined;
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
  default?: boolean | undefined;
  kind?: Expression | undefined;
  label?: Expression | undefined;
  src?: Expression | undefined;
  srclang?: Expression | undefined;
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
  return (
    <RenderVoidElement name="track" attrs={props} list={trackList}/>
  );
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
  disablepictureinpicture?: boolean | undefined;
  disableremoteplayback?: boolean | undefined;
  height?: number | undefined;
  playsinline?: boolean | undefined;
  poster?: Expression | undefined;
  width?: number | undefined;
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
//   clazz?: Expression | undefined;
//   color?: Expression | undefined;
//   height?: number | undefined;
//   id?: Expression | undefined;
//   lang?: Expression | undefined;
//   max?: number | undefined;
//   media?: Expression | undefined;
//   method?: Expression | undefined;
//   min?: number | undefined;
//   name?: Expression | undefined;
//   style?: CssProperties | undefined;
//   target?: HTMLAttributeAnchorTarget | undefined;
//   type?: Expression | undefined;
//   width?: number | undefined;

//   // Other HTML properties supported by SVG elements in browsers
//   role?: AriaRole | undefined;
//   tabindex?: number | undefined;
//   crossOrigin?: CrossOrigin;

//   // SVG Specific attributes
//   accentHeight?: number | Expression | undefined;
//   accumulate?: "none" | "sum" | undefined;
//   additive?: "replace" | "sum" | undefined;
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
//     | undefined;
//   allowReorder?: "no" | "yes" | undefined;
//   alphabetic?: number | Expression | undefined;
//   amplitude?: number | Expression | undefined;
//   arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
//   ascent?: number | Expression | undefined;
//   attributeName?: Expression | undefined;
//   attributeType?: Expression | undefined;
//   autoReverse?: boolean | undefined;
//   azimuth?: number | Expression | undefined;
//   baseFrequency?: number | Expression | undefined;
//   baselineShift?: number | Expression | undefined;
//   baseProfile?: number | Expression | undefined;
//   bbox?: number | Expression | undefined;
//   begin?: number | Expression | undefined;
//   bias?: number | Expression | undefined;
//   by?: number | Expression | undefined;
//   calcMode?: number | Expression | undefined;
//   capHeight?: number | Expression | undefined;
//   clip?: number | Expression | undefined;
//   clipPath?: Expression | undefined;
//   clipPathUnits?: number | Expression | undefined;
//   clipRule?: number | Expression | undefined;
//   colorInterpolation?: number | Expression | undefined;
//   colorInterpolationFilters?:
//     | "auto"
//     | "sRGB"
//     | "linearRGB"
//     | "inherit"
//     | undefined;
//   colorProfile?: number | Expression | undefined;
//   colorRendering?: number | Expression | undefined;
//   contentScriptType?: number | Expression | undefined;
//   contentStyleType?: number | Expression | undefined;
//   cursor?: number | Expression | undefined;
//   cx?: number | Expression | undefined;
//   cy?: number | Expression | undefined;
//   d?: Expression | undefined;
//   decelerate?: number | Expression | undefined;
//   descent?: number | Expression | undefined;
//   diffuseConstant?: number | Expression | undefined;
//   direction?: number | Expression | undefined;
//   display?: number | Expression | undefined;
//   divisor?: number | Expression | undefined;
//   dominantBaseline?: number | Expression | undefined;
//   dur?: number | Expression | undefined;
//   dx?: number | Expression | undefined;
//   dy?: number | Expression | undefined;
//   edgeMode?: number | Expression | undefined;
//   elevation?: number | Expression | undefined;
//   enableBackground?: number | Expression | undefined;
//   end?: number | Expression | undefined;
//   exponent?: number | Expression | undefined;
//   externalResourcesRequired?: boolean | undefined;
//   fill?: Expression | undefined;
//   fillOpacity?: number | Expression | undefined;
//   fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
//   filter?: Expression | undefined;
//   filterRes?: number | Expression | undefined;
//   filterUnits?: number | Expression | undefined;
//   floodColor?: number | Expression | undefined;
//   floodOpacity?: number | Expression | undefined;
//   focusable?: boolean | "auto" | undefined;
//   fontFamily?: Expression | undefined;
//   fontSize?: number | Expression | undefined;
//   fontSizeAdjust?: number | Expression | undefined;
//   fontStretch?: number | Expression | undefined;
//   fontStyle?: number | Expression | undefined;
//   fontVariant?: number | Expression | undefined;
//   fontWeight?: number | Expression | undefined;
//   format?: number | Expression | undefined;
//   fr?: number | Expression | undefined;
//   from?: number | Expression | undefined;
//   fx?: number | Expression | undefined;
//   fy?: number | Expression | undefined;
//   g1?: number | Expression | undefined;
//   g2?: number | Expression | undefined;
//   glyphName?: number | Expression | undefined;
//   glyphOrientationHorizontal?: number | Expression | undefined;
//   glyphOrientationVertical?: number | Expression | undefined;
//   glyphRef?: number | Expression | undefined;
//   gradientTransform?: Expression | undefined;
//   gradientUnits?: Expression | undefined;
//   hanging?: number | Expression | undefined;
//   horizAdvX?: number | Expression | undefined;
//   horizOriginX?: number | Expression | undefined;
//   href?: Expression | undefined;
//   ideographic?: number | Expression | undefined;
//   imageRendering?: number | Expression | undefined;
//   in2?: number | Expression | undefined;
//   in?: Expression | undefined;
//   intercept?: number | Expression | undefined;
//   k1?: number | Expression | undefined;
//   k2?: number | Expression | undefined;
//   k3?: number | Expression | undefined;
//   k4?: number | Expression | undefined;
//   k?: number | Expression | undefined;
//   kernelMatrix?: number | Expression | undefined;
//   kernelUnitLength?: number | Expression | undefined;
//   kerning?: number | Expression | undefined;
//   keyPoints?: number | Expression | undefined;
//   keySplines?: number | Expression | undefined;
//   keyTimes?: number | Expression | undefined;
//   lengthAdjust?: number | Expression | undefined;
//   letterSpacing?: number | Expression | undefined;
//   lightingColor?: number | Expression | undefined;
//   limitingConeAngle?: number | Expression | undefined;
//   local?: number | Expression | undefined;
//   markerEnd?: Expression | undefined;
//   markerHeight?: number | Expression | undefined;
//   markerMid?: Expression | undefined;
//   markerStart?: Expression | undefined;
//   markerUnits?: number | Expression | undefined;
//   markerWidth?: number | Expression | undefined;
//   mask?: Expression | undefined;
//   maskContentUnits?: number | Expression | undefined;
//   maskUnits?: number | Expression | undefined;
//   mathematical?: number | Expression | undefined;
//   mode?: number | Expression | undefined;
//   numOctaves?: number | Expression | undefined;
//   offset?: number | Expression | undefined;
//   opacity?: number | Expression | undefined;
//   operator?: number | Expression | undefined;
//   order?: number | Expression | undefined;
//   orient?: number | Expression | undefined;
//   orientation?: number | Expression | undefined;
//   origin?: number | Expression | undefined;
//   overflow?: number | Expression | undefined;
//   overlinePosition?: number | Expression | undefined;
//   overlineThickness?: number | Expression | undefined;
//   paintOrder?: number | Expression | undefined;
//   panose1?: number | Expression | undefined;
//   path?: Expression | undefined;
//   pathLength?: number | Expression | undefined;
//   patternContentUnits?: Expression | undefined;
//   patternTransform?: number | Expression | undefined;
//   patternUnits?: Expression | undefined;
//   pointerEvents?: number | Expression | undefined;
//   points?: Expression | undefined;
//   pointsAtX?: number | Expression | undefined;
//   pointsAtY?: number | Expression | undefined;
//   pointsAtZ?: number | Expression | undefined;
//   preserveAlpha?: boolean | undefined;
//   preserveAspectRatio?: Expression | undefined;
//   primitiveUnits?: number | Expression | undefined;
//   r?: number | Expression | undefined;
//   radius?: number | Expression | undefined;
//   refX?: number | Expression | undefined;
//   refY?: number | Expression | undefined;
//   renderingIntent?: number | Expression | undefined;
//   repeatCount?: number | Expression | undefined;
//   repeatDur?: number | Expression | undefined;
//   requiredExtensions?: number | Expression | undefined;
//   requiredFeatures?: number | Expression | undefined;
//   restart?: number | Expression | undefined;
//   result?: Expression | undefined;
//   rotate?: number | Expression | undefined;
//   rx?: number | Expression | undefined;
//   ry?: number | Expression | undefined;
//   scale?: number | Expression | undefined;
//   seed?: number | Expression | undefined;
//   shapeRendering?: number | Expression | undefined;
//   slope?: number | Expression | undefined;
//   spacing?: number | Expression | undefined;
//   specularConstant?: number | Expression | undefined;
//   specularExponent?: number | Expression | undefined;
//   speed?: number | Expression | undefined;
//   spreadMethod?: Expression | undefined;
//   startOffset?: number | Expression | undefined;
//   stdDeviation?: number | Expression | undefined;
//   stemh?: number | Expression | undefined;
//   stemv?: number | Expression | undefined;
//   stitchTiles?: number | Expression | undefined;
//   stopColor?: Expression | undefined;
//   stopOpacity?: number | Expression | undefined;
//   strikethroughPosition?: number | Expression | undefined;
//   strikethroughThickness?: number | Expression | undefined;
//   Expression?: number | Expression | undefined;
//   stroke?: Expression | undefined;
//   strokeDasharray?: Expression | number | undefined;
//   strokeDashoffset?: Expression | number | undefined;
//   strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
//   strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
//   strokeMiterlimit?: number | Expression | undefined;
//   strokeOpacity?: number | Expression | undefined;
//   strokeWidth?: number | Expression | undefined;
//   surfaceScale?: number | Expression | undefined;
//   systemLanguage?: number | Expression | undefined;
//   tableValues?: number | Expression | undefined;
//   targetX?: number | Expression | undefined;
//   targetY?: number | Expression | undefined;
//   textAnchor?: Expression | undefined;
//   textDecoration?: number | Expression | undefined;
//   textLength?: number | Expression | undefined;
//   textRendering?: number | Expression | undefined;
//   to?: number | Expression | undefined;
//   transform?: Expression | undefined;
//   u1?: number | Expression | undefined;
//   u2?: number | Expression | undefined;
//   underlinePosition?: number | Expression | undefined;
//   underlineThickness?: number | Expression | undefined;
//   unicode?: number | Expression | undefined;
//   unicodeBidi?: number | Expression | undefined;
//   unicodeRange?: number | Expression | undefined;
//   unitsPerEm?: number | Expression | undefined;
//   vAlphabetic?: number | Expression | undefined;
//   values?: Expression | undefined;
//   vectorEffect?: number | Expression | undefined;
//   version?: Expression | undefined;
//   vertAdvY?: number | Expression | undefined;
//   vertOriginX?: number | Expression | undefined;
//   vertOriginY?: number | Expression | undefined;
//   vHanging?: number | Expression | undefined;
//   vIdeographic?: number | Expression | undefined;
//   viewBox?: Expression | undefined;
//   viewTarget?: number | Expression | undefined;
//   visibility?: number | Expression | undefined;
//   vMathematical?: number | Expression | undefined;
//   widths?: number | Expression | undefined;
//   wordSpacing?: number | Expression | undefined;
//   writingMode?: number | Expression | undefined;
//   x1?: number | Expression | undefined;
//   x2?: number | Expression | undefined;
//   x?: number | Expression | undefined;
//   xChannelSelector?: Expression | undefined;
//   xHeight?: number | Expression | undefined;
//   xlinkActuate?: Expression | undefined;
//   xlinkArcrole?: Expression | undefined;
//   xlinkHref?: Expression | undefined;
//   xlinkRole?: Expression | undefined;
//   xlinkShow?: Expression | undefined;
//   xlinkTitle?: Expression | undefined;
//   xlinkType?: Expression | undefined;
//   xmlBase?: Expression | undefined;
//   xmlLang?: Expression | undefined;
//   xmlns?: Expression | undefined;
//   xmlnsXlink?: Expression | undefined;
//   xmlSpace?: Expression | undefined;
//   y1?: number | Expression | undefined;
//   y2?: number | Expression | undefined;
//   y?: number | Expression | undefined;
//   yChannelSelector?: Expression | undefined;
//   z?: number | Expression | undefined;
//   zoomAndPan?: Expression | undefined;
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

function renderExpression(attr: string, value: any): Expression | null {
  return <>{attr}="{<EscapeHtml>{value}</EscapeHtml>}"</>;
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

// function renderNumberOrExpression(attr: string, value: any): Expression | null {
//   if (typeof value === "number") {
//     return renderNumber(attr, value);
//   } else {
//     return renderExpression(attr, value);
//   }
// }

function renderYesNo(attr: string, value: any): Expression | null {
  return value === true ? <>{attr}="yes"</> : <>{attr}="no"</>;
}

function renderTrueFalse(attr: string, value: any): Expression | null {
  return value === true ? <>{attr}="true"</> : <>{attr}="false"</>;
}

function renderFor(_attr: string, value: any): Expression | null {
  return <>for="{<EscapeHtml>{value}</EscapeHtml>}"</>;
}

function RenderRenderList(
  { attrs, list }: { attrs: Record<PropertyKey, any>; list: RenderList },
): Expression {
  const result: Expression[] = [];

  if (attrs.clazz !== undefined) {
    result.push(" ");
    result.push(<>class="{attrs.clazz}"</>);
  }

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

  return result;
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
