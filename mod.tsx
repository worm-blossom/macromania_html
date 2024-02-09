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

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
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

// All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
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

export type TagProps = AriaProps & {
  // Standard HTML Attributes
  accesskey?: Expression | undefined;
  autofocus?: boolean | undefined;
  clazz?: Expression | undefined;
  contenteditable?: boolean | "inherit" | "plaintext-only" | undefined;
  contextmenu?: Expression | undefined;
  dir?: Expression | undefined;
  draggable?: boolean | undefined;
  enterkeyhint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send"
    | undefined;
  exportparts?: Expression | undefined;
  hidden?: boolean | undefined;
  id?: Expression | undefined;
  inert?: boolean | undefined;
  lang?: Expression | undefined;
  nonce?: Expression | undefined;
  part?: Expression | undefined;
  popover?: "auto" | "manual" | null;
  slot?: Expression | undefined;
  spellCheck?: boolean | undefined;
  style?: CssProperties | undefined;
  tabIndex?: number | undefined;
  title?: Expression | undefined;
  translate?: boolean | undefined;

  // WAI-ARIA
  role?: AriaRole | undefined;

  // Non-standard Attributes
  autocapitalize?: Expression | undefined;
  itemid?: Expression | undefined;
  itemprop?: Expression | undefined;
  itemref?: Expression | undefined;
  itemscope?: boolean | undefined;
  itemtype?: Expression | undefined;

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
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
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}
   */
  is?: Expression | undefined;
};

export type AProps = TagProps & {
  download?: Expression | null | undefined;
  href?: Expression | undefined;
  hrefLang?: Expression | undefined;
  media?: Expression | undefined;
  ping?: Expression | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  type?: Expression | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
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

export type MediaHtmlProps = TagProps & {
  autoPlay?: boolean | undefined;
  controls?: boolean | undefined;
  controlsList?: Expression | undefined;
  crossOrigin?: CrossOrigin;
  loop?: boolean | undefined;
  mediaGroup?: Expression | undefined;
  muted?: boolean | undefined;
  playsInline?: boolean | undefined;
  preload?: Expression | undefined;
  src?: Expression | undefined;
};
export type BaseProps = TagProps & {
  href?: Expression | undefined;
  target?: Expression | undefined;
};
export type BlockquoteProps = TagProps & {
  cite?: Expression | undefined;
};
export type ButtonProps = TagProps & {
  disabled?: boolean | undefined;
  form?: Expression | undefined;
  formAction?:
    | Expression
    | undefined;
  formEncType?: Expression | undefined;
  formMethod?: Expression | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: Expression | undefined;
  name?: Expression | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
};
export type CanvasProps = TagProps & {
  height?: number | Expression | undefined;
  width?: number | Expression | undefined;
};
export type ColProps = TagProps & {
  span?: number | undefined;
  width?: number | Expression | undefined;
};
export type ColgroupProps = TagProps & {
  span?: number | undefined;
};
export type DataProps = TagProps & {
  value?: Expression | readonly Expression[] | number | undefined;
};
export type DelProps = TagProps & {
  cite?: Expression | undefined;
  dateTime?: Expression | undefined;
};
export type DetailsProps = TagProps & {
  open?: boolean | undefined;
  name?: Expression | undefined;
};
export type DialogProps = TagProps & {
  open?: boolean | undefined;
};
export type EmbedProps = TagProps & {
  height?: number | Expression | undefined;
  src?: Expression | undefined;
  type?: Expression | undefined;
  width?: number | Expression | undefined;
};
export type FieldsetProps = TagProps & {
  disabled?: boolean | undefined;
  form?: Expression | undefined;
  name?: Expression | undefined;
};
export type FormProps = TagProps & {
  acceptCharset?: Expression | undefined;
  action?:
    | Expression
    | undefined;
  autoComplete?: Expression | undefined;
  encType?: Expression | undefined;
  method?: Expression | undefined;
  name?: Expression | undefined;
  noValidate?: boolean | undefined;
  target?: Expression | undefined;
};
export type HtmlProps = TagProps & {
  manifest?: Expression | undefined;
};
export type IframeProps = TagProps & {
  allow?: Expression | undefined;
  allowFullScreen?: boolean | undefined;
  allowTransparency?: boolean | undefined;
  /** @deprecated */
  frameBorder?: number | Expression | undefined;
  height?: number | Expression | undefined;
  loading?: "eager" | "lazy" | undefined;
  /** @deprecated */
  marginHeight?: number | undefined;
  /** @deprecated */
  marginWidth?: number | undefined;
  name?: Expression | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  sandbox?: Expression | undefined;
  /** @deprecated */
  scrolling?: Expression | undefined;
  seamless?: boolean | undefined;
  src?: Expression | undefined;
  srcDoc?: Expression | undefined;
  width?: number | Expression | undefined;
};
export type ImgProps = TagProps & {
  alt?: Expression | undefined;
  crossOrigin?: CrossOrigin;
  decoding?: "async" | "auto" | "sync" | undefined;
  height?: number | Expression | undefined;
  loading?: "eager" | "lazy" | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  sizes?: Expression | undefined;
  src?: Expression | undefined;
  srcSet?: Expression | undefined;
  useMap?: Expression | undefined;
  width?: number | Expression | undefined;
};
export type InputProps = TagProps & {
  accept?: Expression | undefined;
  alt?: Expression | undefined;
  autoComplete?: Expression | undefined;
  capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  enterKeyHint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send"
    | undefined;
  form?: Expression | undefined;
  formAction?:
    | Expression
    | undefined;
  formEncType?: Expression | undefined;
  formMethod?: Expression | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: Expression | undefined;
  height?: number | Expression | undefined;
  list?: Expression | undefined;
  max?: number | Expression | undefined;
  maxLength?: number | undefined;
  min?: number | Expression | undefined;
  minLength?: number | undefined;
  multiple?: boolean | undefined;
  name?: Expression | undefined;
  pattern?: Expression | undefined;
  placeholder?: Expression | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  src?: Expression | undefined;
  step?: number | Expression | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
  width?: number | Expression | undefined;
};

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
  dateTime?: Expression | undefined;
};
export type KeygenProps = TagProps & {
  challenge?: Expression | undefined;
  disabled?: boolean | undefined;
  form?: Expression | undefined;
  keyType?: Expression | undefined;
  keyParams?: Expression | undefined;
  name?: Expression | undefined;
};
export type LabelProps = TagProps & {
  form?: Expression | undefined;
  htmlFor?: Expression | undefined;
};
export type LiProps = TagProps & {
  value?: Expression | readonly Expression[] | number | undefined;
};
export type LinkProps = TagProps & {
  as?: Expression | undefined;
  crossOrigin?: CrossOrigin;
  fetchPriority?: "high" | "low" | "auto";
  href?: Expression | undefined;
  hrefLang?: Expression | undefined;
  integrity?: Expression | undefined;
  media?: Expression | undefined;
  imageSrcSet?: Expression | undefined;
  imageSizes?: Expression | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  sizes?: Expression | undefined;
  type?: Expression | undefined;
  charSet?: Expression | undefined;
};
export type MapProps = TagProps & {
  name?: Expression | undefined;
};
export type MenuProps = TagProps & {
  type?: Expression | undefined;
};
export type MetaProps = TagProps & {
  charSet?: Expression | undefined;
  content?: Expression | undefined;
  httpEquiv?: Expression | undefined;
  media?: Expression | undefined;
  name?: Expression | undefined;
};
export type MeterProps = TagProps & {
  form?: Expression | undefined;
  high?: number | undefined;
  low?: number | undefined;
  max?: number | Expression | undefined;
  min?: number | Expression | undefined;
  optimum?: number | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
};
export type ObjectProps = TagProps & {
  classID?: Expression | undefined;
  data?: Expression | undefined;
  form?: Expression | undefined;
  height?: number | Expression | undefined;
  name?: Expression | undefined;
  type?: Expression | undefined;
  useMap?: Expression | undefined;
  width?: number | Expression | undefined;
  wmode?: Expression | undefined;
};
export type OlProps = TagProps & {
  reversed?: boolean | undefined;
  start?: number | undefined;
  type?: "1" | "a" | "A" | "i" | "I" | undefined;
};
export type OptgroupProps = TagProps & {
  disabled?: boolean | undefined;
  label?: Expression | undefined;
};
export type OptionProps = TagProps & {
  disabled?: boolean | undefined;
  label?: Expression | undefined;
  selected?: boolean | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
};
export type OutputProps = TagProps & {
  form?: Expression | undefined;
  htmlFor?: Expression | undefined;
  name?: Expression | undefined;
};
export type ParamProps = TagProps & {
  name?: Expression | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
};
export type ProgressProps = TagProps & {
  max?: number | Expression | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
};
export type QProps = TagProps & {
  cite?: Expression | undefined;
};
export type SlotProps = TagProps & {
  name?: Expression | undefined;
};
export type ScriptProps = TagProps & {
  async?: boolean | undefined;
  /** @deprecated */
  charSet?: Expression | undefined;
  crossOrigin?: CrossOrigin;
  defer?: boolean | undefined;
  integrity?: Expression | undefined;
  noModule?: boolean | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  src?: Expression | undefined;
  type?: Expression | undefined;
};
export type SelectProps = TagProps & {
  autoComplete?: Expression | undefined;
  disabled?: boolean | undefined;
  form?: Expression | undefined;
  multiple?: boolean | undefined;
  name?: Expression | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
};
export type SourceProps = TagProps & {
  height?: number | Expression | undefined;
  media?: Expression | undefined;
  sizes?: Expression | undefined;
  src?: Expression | undefined;
  srcSet?: Expression | undefined;
  type?: Expression | undefined;
  width?: number | Expression | undefined;
};
export type StyleProps = TagProps & {
  media?: Expression | undefined;
  scoped?: boolean | undefined;
  type?: Expression | undefined;
};
export type TableProps = TagProps & {
  align?: "left" | "center" | "right" | undefined;
  bgcolor?: Expression | undefined;
  border?: number | undefined;
  cellPadding?: number | Expression | undefined;
  cellSpacing?: number | Expression | undefined;
  frame?: boolean | undefined;
  rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
  summary?: Expression | undefined;
  width?: number | Expression | undefined;
};
export type TdProps = TagProps & {
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colSpan?: number | undefined;
  headers?: Expression | undefined;
  rowSpan?: number | undefined;
  scope?: Expression | undefined;
  abbr?: Expression | undefined;
  height?: number | Expression | undefined;
  width?: number | Expression | undefined;
  valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
};
export type TextareaProps = TagProps & {
  autoComplete?: Expression | undefined;
  cols?: number | undefined;
  dirName?: Expression | undefined;
  disabled?: boolean | undefined;
  form?: Expression | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  name?: Expression | undefined;
  placeholder?: Expression | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  rows?: number | undefined;
  value?: Expression | readonly Expression[] | number | undefined;
  wrap?: Expression | undefined;
};
export type ThProps = TagProps & {
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colSpan?: number | undefined;
  headers?: Expression | undefined;
  rowSpan?: number | undefined;
  scope?: Expression | undefined;
  abbr?: Expression | undefined;
};
export type TimeProps = TagProps & {
  dateTime?: Expression | undefined;
};
export type TrackProps = TagProps & {
  default?: boolean | undefined;
  kind?: Expression | undefined;
  label?: Expression | undefined;
  src?: Expression | undefined;
  srcLang?: Expression | undefined;
};
export type VideoProps = TagProps & {
  height?: number | Expression | undefined;
  playsInline?: boolean | undefined;
  poster?: Expression | undefined;
  width?: number | Expression | undefined;
  disablePictureInPicture?: boolean | undefined;
  disableRemotePlayback?: boolean | undefined;
};

export type SvgProps = AriaProps & {
  // Attributes which also defined in HTMLAttributes
  // See comment in SVGDOMPropertyConfig.js
  clazz?: Expression | undefined;
  color?: Expression | undefined;
  height?: number | Expression | undefined;
  id?: Expression | undefined;
  lang?: Expression | undefined;
  max?: number | Expression | undefined;
  media?: Expression | undefined;
  method?: Expression | undefined;
  min?: number | Expression | undefined;
  name?: Expression | undefined;
  style?: CssProperties | undefined;
  target?: Expression | undefined;
  type?: Expression | undefined;
  width?: number | Expression | undefined;

  // Other HTML properties supported by SVG elements in browsers
  role?: AriaRole | undefined;
  tabIndex?: number | undefined;
  crossOrigin?: CrossOrigin;

  // SVG Specific attributes
  accentHeight?: number | Expression | undefined;
  accumulate?: "none" | "sum" | undefined;
  additive?: "replace" | "sum" | undefined;
  alignmentBaseline?:
    | "auto"
    | "baseline"
    | "before-edge"
    | "text-before-edge"
    | "middle"
    | "central"
    | "after-edge"
    | "text-after-edge"
    | "ideographic"
    | "alphabetic"
    | "hanging"
    | "mathematical"
    | "inherit"
    | undefined;
  allowReorder?: "no" | "yes" | undefined;
  alphabetic?: number | Expression | undefined;
  amplitude?: number | Expression | undefined;
  arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
  ascent?: number | Expression | undefined;
  attributeName?: Expression | undefined;
  attributeType?: Expression | undefined;
  autoReverse?: boolean | undefined;
  azimuth?: number | Expression | undefined;
  baseFrequency?: number | Expression | undefined;
  baselineShift?: number | Expression | undefined;
  baseProfile?: number | Expression | undefined;
  bbox?: number | Expression | undefined;
  begin?: number | Expression | undefined;
  bias?: number | Expression | undefined;
  by?: number | Expression | undefined;
  calcMode?: number | Expression | undefined;
  capHeight?: number | Expression | undefined;
  clip?: number | Expression | undefined;
  clipPath?: Expression | undefined;
  clipPathUnits?: number | Expression | undefined;
  clipRule?: number | Expression | undefined;
  colorInterpolation?: number | Expression | undefined;
  colorInterpolationFilters?:
    | "auto"
    | "sRGB"
    | "linearRGB"
    | "inherit"
    | undefined;
  colorProfile?: number | Expression | undefined;
  colorRendering?: number | Expression | undefined;
  contentScriptType?: number | Expression | undefined;
  contentStyleType?: number | Expression | undefined;
  cursor?: number | Expression | undefined;
  cx?: number | Expression | undefined;
  cy?: number | Expression | undefined;
  d?: Expression | undefined;
  decelerate?: number | Expression | undefined;
  descent?: number | Expression | undefined;
  diffuseConstant?: number | Expression | undefined;
  direction?: number | Expression | undefined;
  display?: number | Expression | undefined;
  divisor?: number | Expression | undefined;
  dominantBaseline?: number | Expression | undefined;
  dur?: number | Expression | undefined;
  dx?: number | Expression | undefined;
  dy?: number | Expression | undefined;
  edgeMode?: number | Expression | undefined;
  elevation?: number | Expression | undefined;
  enableBackground?: number | Expression | undefined;
  end?: number | Expression | undefined;
  exponent?: number | Expression | undefined;
  externalResourcesRequired?: boolean | undefined;
  fill?: Expression | undefined;
  fillOpacity?: number | Expression | undefined;
  fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
  filter?: Expression | undefined;
  filterRes?: number | Expression | undefined;
  filterUnits?: number | Expression | undefined;
  floodColor?: number | Expression | undefined;
  floodOpacity?: number | Expression | undefined;
  focusable?: boolean | "auto" | undefined;
  fontFamily?: Expression | undefined;
  fontSize?: number | Expression | undefined;
  fontSizeAdjust?: number | Expression | undefined;
  fontStretch?: number | Expression | undefined;
  fontStyle?: number | Expression | undefined;
  fontVariant?: number | Expression | undefined;
  fontWeight?: number | Expression | undefined;
  format?: number | Expression | undefined;
  fr?: number | Expression | undefined;
  from?: number | Expression | undefined;
  fx?: number | Expression | undefined;
  fy?: number | Expression | undefined;
  g1?: number | Expression | undefined;
  g2?: number | Expression | undefined;
  glyphName?: number | Expression | undefined;
  glyphOrientationHorizontal?: number | Expression | undefined;
  glyphOrientationVertical?: number | Expression | undefined;
  glyphRef?: number | Expression | undefined;
  gradientTransform?: Expression | undefined;
  gradientUnits?: Expression | undefined;
  hanging?: number | Expression | undefined;
  horizAdvX?: number | Expression | undefined;
  horizOriginX?: number | Expression | undefined;
  href?: Expression | undefined;
  ideographic?: number | Expression | undefined;
  imageRendering?: number | Expression | undefined;
  in2?: number | Expression | undefined;
  in?: Expression | undefined;
  intercept?: number | Expression | undefined;
  k1?: number | Expression | undefined;
  k2?: number | Expression | undefined;
  k3?: number | Expression | undefined;
  k4?: number | Expression | undefined;
  k?: number | Expression | undefined;
  kernelMatrix?: number | Expression | undefined;
  kernelUnitLength?: number | Expression | undefined;
  kerning?: number | Expression | undefined;
  keyPoints?: number | Expression | undefined;
  keySplines?: number | Expression | undefined;
  keyTimes?: number | Expression | undefined;
  lengthAdjust?: number | Expression | undefined;
  letterSpacing?: number | Expression | undefined;
  lightingColor?: number | Expression | undefined;
  limitingConeAngle?: number | Expression | undefined;
  local?: number | Expression | undefined;
  markerEnd?: Expression | undefined;
  markerHeight?: number | Expression | undefined;
  markerMid?: Expression | undefined;
  markerStart?: Expression | undefined;
  markerUnits?: number | Expression | undefined;
  markerWidth?: number | Expression | undefined;
  mask?: Expression | undefined;
  maskContentUnits?: number | Expression | undefined;
  maskUnits?: number | Expression | undefined;
  mathematical?: number | Expression | undefined;
  mode?: number | Expression | undefined;
  numOctaves?: number | Expression | undefined;
  offset?: number | Expression | undefined;
  opacity?: number | Expression | undefined;
  operator?: number | Expression | undefined;
  order?: number | Expression | undefined;
  orient?: number | Expression | undefined;
  orientation?: number | Expression | undefined;
  origin?: number | Expression | undefined;
  overflow?: number | Expression | undefined;
  overlinePosition?: number | Expression | undefined;
  overlineThickness?: number | Expression | undefined;
  paintOrder?: number | Expression | undefined;
  panose1?: number | Expression | undefined;
  path?: Expression | undefined;
  pathLength?: number | Expression | undefined;
  patternContentUnits?: Expression | undefined;
  patternTransform?: number | Expression | undefined;
  patternUnits?: Expression | undefined;
  pointerEvents?: number | Expression | undefined;
  points?: Expression | undefined;
  pointsAtX?: number | Expression | undefined;
  pointsAtY?: number | Expression | undefined;
  pointsAtZ?: number | Expression | undefined;
  preserveAlpha?: boolean | undefined;
  preserveAspectRatio?: Expression | undefined;
  primitiveUnits?: number | Expression | undefined;
  r?: number | Expression | undefined;
  radius?: number | Expression | undefined;
  refX?: number | Expression | undefined;
  refY?: number | Expression | undefined;
  renderingIntent?: number | Expression | undefined;
  repeatCount?: number | Expression | undefined;
  repeatDur?: number | Expression | undefined;
  requiredExtensions?: number | Expression | undefined;
  requiredFeatures?: number | Expression | undefined;
  restart?: number | Expression | undefined;
  result?: Expression | undefined;
  rotate?: number | Expression | undefined;
  rx?: number | Expression | undefined;
  ry?: number | Expression | undefined;
  scale?: number | Expression | undefined;
  seed?: number | Expression | undefined;
  shapeRendering?: number | Expression | undefined;
  slope?: number | Expression | undefined;
  spacing?: number | Expression | undefined;
  specularConstant?: number | Expression | undefined;
  specularExponent?: number | Expression | undefined;
  speed?: number | Expression | undefined;
  spreadMethod?: Expression | undefined;
  startOffset?: number | Expression | undefined;
  stdDeviation?: number | Expression | undefined;
  stemh?: number | Expression | undefined;
  stemv?: number | Expression | undefined;
  stitchTiles?: number | Expression | undefined;
  stopColor?: Expression | undefined;
  stopOpacity?: number | Expression | undefined;
  strikethroughPosition?: number | Expression | undefined;
  strikethroughThickness?: number | Expression | undefined;
  Expression?: number | Expression | undefined;
  stroke?: Expression | undefined;
  strokeDasharray?: Expression | number | undefined;
  strokeDashoffset?: Expression | number | undefined;
  strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
  strokeMiterlimit?: number | Expression | undefined;
  strokeOpacity?: number | Expression | undefined;
  strokeWidth?: number | Expression | undefined;
  surfaceScale?: number | Expression | undefined;
  systemLanguage?: number | Expression | undefined;
  tableValues?: number | Expression | undefined;
  targetX?: number | Expression | undefined;
  targetY?: number | Expression | undefined;
  textAnchor?: Expression | undefined;
  textDecoration?: number | Expression | undefined;
  textLength?: number | Expression | undefined;
  textRendering?: number | Expression | undefined;
  to?: number | Expression | undefined;
  transform?: Expression | undefined;
  u1?: number | Expression | undefined;
  u2?: number | Expression | undefined;
  underlinePosition?: number | Expression | undefined;
  underlineThickness?: number | Expression | undefined;
  unicode?: number | Expression | undefined;
  unicodeBidi?: number | Expression | undefined;
  unicodeRange?: number | Expression | undefined;
  unitsPerEm?: number | Expression | undefined;
  vAlphabetic?: number | Expression | undefined;
  values?: Expression | undefined;
  vectorEffect?: number | Expression | undefined;
  version?: Expression | undefined;
  vertAdvY?: number | Expression | undefined;
  vertOriginX?: number | Expression | undefined;
  vertOriginY?: number | Expression | undefined;
  vHanging?: number | Expression | undefined;
  vIdeographic?: number | Expression | undefined;
  viewBox?: Expression | undefined;
  viewTarget?: number | Expression | undefined;
  visibility?: number | Expression | undefined;
  vMathematical?: number | Expression | undefined;
  widths?: number | Expression | undefined;
  wordSpacing?: number | Expression | undefined;
  writingMode?: number | Expression | undefined;
  x1?: number | Expression | undefined;
  x2?: number | Expression | undefined;
  x?: number | Expression | undefined;
  xChannelSelector?: Expression | undefined;
  xHeight?: number | Expression | undefined;
  xlinkActuate?: Expression | undefined;
  xlinkArcrole?: Expression | undefined;
  xlinkHref?: Expression | undefined;
  xlinkRole?: Expression | undefined;
  xlinkShow?: Expression | undefined;
  xlinkTitle?: Expression | undefined;
  xlinkType?: Expression | undefined;
  xmlBase?: Expression | undefined;
  xmlLang?: Expression | undefined;
  xmlns?: Expression | undefined;
  xmlnsXlink?: Expression | undefined;
  xmlSpace?: Expression | undefined;
  y1?: number | Expression | undefined;
  y2?: number | Expression | undefined;
  y?: number | Expression | undefined;
  yChannelSelector?: Expression | undefined;
  z?: number | Expression | undefined;
  zoomAndPan?: Expression | undefined;
};

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
  (tag: string, value: any) => Expression | null,
][];

function renderExpression(tag: string, value: any): Expression | null {
  return <>{tag}="{<EscapeHtml>{value}</EscapeHtml>}"</>;
}

function renderBoolean(tag: string, value: any): Expression | null {
  return (value as boolean) ? tag : null;
}

function renderNumber(tag: string, value: any): Expression | null {
  return <>{tag}="{`${value}`}"</>;
}

function renderEnum(tag: string, value: any): Expression | null {
  return <>{tag}="{`${value}`}"</>;
}

function renderBooleanOrEnum(tag: string, value: any): Expression | null {
  if (typeof value === "boolean") {
    return renderBoolean(tag, value);
  } else {
    return renderEnum(tag, value);
  }
}

function renderYesNo(tag: string, value: any): Expression | null {
  return value === true ? <>{tag}="yes"</> : <>{tag}="no"</>;
}

function RenderRenderList(
  { attrs, list }: { attrs: Record<PropertyKey, any>; list: RenderList },
): Expression {
  const result: Expression[] = [];

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

const tagList: RenderList = [
  ...ariaList,
  ["about", renderExpression],
  ["accesskey", renderExpression],
  ["autocapitalize", renderExpression],
  ["autofocus", renderBoolean],
  ["clazz", renderExpression],
  ["contenteditable", renderBooleanOrEnum],
  ["contextmenu", renderExpression],
  ["dir", renderExpression],
  ["draggable", renderBoolean],
  ["enterkeyhint", renderEnum],
  ["exportparts", renderExpression],
  ["hidden", renderBoolean],
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
  ["spellCheck", renderBoolean],
  ["style", renderExpression],
  ["translate", renderYesNo],
];

export function Br(props: TagProps): Expression {
  return <RenderVoidElement name="br" attrs={props} list={tagList} />;
}

export function Div(props: TagProps & { children?: Expressions }): Expression {
  return (
    <RenderNonVoidElement name="div" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}
