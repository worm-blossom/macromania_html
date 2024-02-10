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

// All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
/**
 * ARIA roles provide semantic meaning to content, allowing screen readers and other tools to present and support interaction with an object in a way that is consistent with user expectations of that type of object. ARIA roles can be used to describe elements that don't natively exist in HTML or exist but don't yet have full browser support.
 *
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
 * Global attributes are attributes common to all HTML elements; they can be
 * used on all elements, though they may have no effect on some elements.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes}
 */
export type TagProps = AriaProps & {
  /**
   * The `accesskey` global attribute provides a hint for generating a keyboard
   * shortcut for the current element. The attribute value must consist of a
   * single printable character (which includes accented and other characters
   * that can be generated by the keyboard).
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey}
   */
  accesskey?: Expression | undefined;
  /**
   * The `autocapitalize` global attribute is an enumerated attribute that
   * controls whether inputted text is automatically capitalized and, if so, in
   * what manner. This is relevant to:
   *
   * - `<input>` and `<textarea>` elements.
   * - Any element with `contenteditable` set on it.
   *
   * `autocapitalize` doesn't affect behavior when typing on a physical
   * keyboard. It affects the behavior of other input mechanisms such as virtual
   * keyboards on mobile devices and voice input. This can assist users by
   * making data entry quicker and easier, for example by automatically
   * capitalizing the first letter of each sentence.
   *
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
   * The `autofocus` global attribute is a Boolean attribute indicating that an
   * element should be focused on page load, or when the <dialog> that it is
   * part of is displayed.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus}
   */
  autofocus?: boolean | undefined;
  /**
   * The `class` global attribute is a space-separated list of the case-
   * sensitive classes of the element. Classes allow CSS and JavaScript to
   * select and access specific elements via the class selectors or functions
   * like the DOM method `document.getElementsByClassName`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class}
   */
  clazz?: Expression | undefined;
  /**
   * The `contenteditable` global attribute is an enumerated attribute
   * indicating if the element should be editable by the user. If so, the
   * browser modifies its widget to allow editing.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable}
   */
  contenteditable?: boolean | "plaintext-only" | undefined;
  /**
   * The `data-*` global attributes form a class of attributes called custom
   * data attributes, that allow proprietary information to be exchanged
   * between the HTML and its DOM representation by scripts.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*}
   *
   * The macro emits an attribute `data-<key>="<value>"` for each
   * entry `<key>: <value>` in this record.
   */
  data?: Record<string, Expression>;
  /**
   * The `dir` global attribute is an enumerated attribute that indicates the
   * directionality of the element's text.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir}
   */
  dir?: "ltr" | "rtl" | "auto" | undefined;
  /**
   * The `draggable` global attribute is an enumerated attribute that indicates
   * whether the element can be dragged, either with native browser behavior or
   * the HTML Drag and Drop API.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable}
   */
  draggable?: boolean | undefined;
  /**
   * The `enterkeyhint` global attribute is an enumerated attribute defining
   * what action label (or icon) to present for the enter key on virtual
   * keyboards.
   *
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
   * The `exportparts` global attribute allows you to select and style elements
   * existing in nested shadow trees, by exporting their `part` names.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}
   */
  exportparts?: Expression | undefined;
  /**
   * The `hidden` global attribute is an enumerated attribute indicating that
   * the browser should not render the contents of the element. For example, it
   * can be used to hide elements of the page that can't be used until the
   * login process has been completed.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden}
   */
  hidden?: "hidden" | "until-found" | undefined;
  /**
   * The `id` global attribute defines an identifier (ID) which must be unique
   * in the whole document. Its purpose is to identify the element when linking
   * (using a fragment identifier), scripting, or styling (with CSS).
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id}
   */
  id?: Expression | undefined;
  /**
   * The `inert` global attribute is a Boolean attribute indicating that the
   * browser will ignore the element. With the inert attribute, all of the
   * element's flat tree descendants (such as modal `<dialog>`s) that don't
   * otherwise escape inertness are ignored. The `inert` attribute also makes the
   * browser ignore input events sent by the user, including focus-related
   * events and events from assistive technologies.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert}
   */
  inert?: boolean | undefined;
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
  /**
   * The `itemid` global attribute provides microdata in the form of a unique,
   * global identifier of an item.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemid}
   */
  itemid?: Expression | undefined;
  /**
   * The `itemprop` global attribute is used to add properties to an item.
   * Every HTML element can have an itemprop attribute specified, and an
   * itemprop consists of a name-value pair. Each name-value pair is called a
   * property, and a group of one or more properties forms an item. Property
   * values are either a string or a URL and can be associated with a very wide
   * range of elements including `<audio>`, `<embed>`, `<iframe>`, `<img>`,
   * `<link>`, `<object>`, `<source>`, `<track>`, and `<video>`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop}
   */
  itemprop?: Expression | undefined;
  /**
   * Properties that are not descendants of an element with the `itemscope`
   * attribute can be associated with an item using the global attribute
   * `itemref`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemref}
   */
  itemref?: Expression | undefined;
  /**
   * `itemscope` is a boolean global attribute that defines the scope of
   * associated metadata. Specifying the `itemscope` attribute for an element
   * creates a new item, which results in a number of name-value pairs that are
   * associated with the element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope}
   */
  itemscope?: boolean | undefined;
  /**
   * The global attribute `itemtype` specifies the URL of the vocabulary that
   * will be used to define `itemprop`'s (item properties) in the data
   * structure.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype}
   */
  itemtype?: Expression | undefined;
  /**
   * The `lang` global attribute helps define the language of an element: the
   * language that non-editable elements are written in, or the language that
   * the editable elements should be written in by the user. The attribute
   * contains a single "language tag" in the format defined in
   * {@link https://datatracker.ietf.org/doc/html/rfc5646 RFC 5646: Tags for Identifying Languages (also known as BCP 47)}.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang}
   */
  lang?: Expression | undefined;
  /**
   * The `nonce` global attribute is a content attribute defining a
   * cryptographic nonce ("number used once") which can be used by Content
   * Security Policy to determine whether or not a given fetch will be allowed
   * to proceed for a given element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce}
   */
  nonce?: Expression | undefined;
  /**
   * The `part` global attribute contains a space-separated list of the part
   * names of the element. Part names allows CSS to select and style specific
   * elements in a shadow tree via the `::part` pseudo-element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}
   */
  part?: Expression | undefined;
  /**
   * The `popover` global attribute is used to designate an element as a
   * popover element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover}
   */
  popover?: "auto" | "manual" | null;
  /**
   * ARIA roles provide semantic meaning to content, allowing screen readers
   * and other tools to present and support interaction with an object in a way
   * that is consistent with user expectations of that type of object. ARIA
   * roles can be used to describe elements that don't natively exist in HTML
   * or exist but don't yet have full browser support.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles}
   */
  role?: AriaRole | undefined;
  /**
   * The `slot` global attribute assigns a slot in a shadow DOM shadow tree to
   * an element: An element with a `slot` attribute is assigned to the slot
   * created by the `<slot>` element whose `name` attribute's value matches
   * that `slot` attribute's value.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot}
   */
  slot?: Expression | undefined;
  /**
   * The `spellcheck` global attribute is an enumerated attribute that defines
   * whether the element may be checked for spelling errors.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck}
   */
  spellcheck?: boolean | undefined;
  /**
   * The `style`global attribute contains CSS styling declarations to be
   * applied to the element. Note that it is recommended for styles to be
   * defined in a separate file or files. This attribute and the `<style>`
   * element have mainly the purpose of allowing for quick styling, for
   * example for testing purposes.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style}
   */
  style?: CssProperties | undefined;
  /**
   * The `tabindex` global attribute allows developers to make HTML elements
   * focusable, allow or prevent them from being sequentially focusable
   * (usually with the Tab key, hence the name) and determine their relative
   * ordering for sequential focus navigation.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex}
   */
  tabindex?: number | undefined;
  /**
   * The `title` global attribute contains text representing advisory
   * information related to the element it belongs to.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title}
   */
  title?: Expression | undefined;
  /**
   * The `translate` global attribute is an enumerated attribute that is used
   * to specify whether an element's *translatable attribute* values and its
   * Text node children should be translated when the page is localized, or
   * whether to leave them unchanged.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate}
   */
  translate?: boolean | undefined;
};

/**
 * Props for the {@linkcode A} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes}
 */
export type AProps = TagProps & {
  /**
   * Causes the browser to treat the linked URL as a download. Can be used with
   * or without a filename value.
   *
   * - Without a value, the browser will suggest a filename/extension, generated from various sources:
   *   - The Content-Disposition HTTP header
   *   - The final segment in the URL path
   *   - The media type (from the `Content-Type` header, the start of a `data:` URL, or Blob.type for a `blob:` URL)
   * - `filename`: defining a value suggests it as the filename. `/` and `\` characters are converted to underscores (`_`). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download}
   */
  download?: Expression | undefined;
  /**
   * The URL that the hyperlink points to. Links are not restricted to
   * HTTP-based URLs — they can use any URL scheme supported by browsers:
   *
   * - Sections of a page with document fragments
   * - Specific text portions with text fragments
   * - Pieces of media files with media fragments
   * - Telephone numbers with `tel:` URLs
   * - Email addresses with `mailto:` URLs
   * - SMS text messages with `sms:` URLs
   * - While web browsers may not support other URL schemes, websites can with `registerProtocolHandler()`
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href}
   */
  href?: Expression | undefined;
  /**
   * Hints at the human language of the linked URL. No built-in functionality.
   * Allowed values are the same as the global `lang` attribute.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang}
   */
  hreflang?: Expression | undefined;
  /**
   * A space-separated list of URLs. When the link is followed, the browser
   * will send `POST` requests with the body PING to the URLs. Typically for
   * tracking.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping}
   */
  ping?: Expression | undefined;
  /**
   * How much of the referrer to send when following the link.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy}
   */
  referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
  /**
   * For anchors containing the `href` attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of link types. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the `href` attribute is present.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel}
   */
  rel?: Expression;
  /**
   * Where to display the linked URL, as the name for a browsing context (a
   * tab, window, or `<iframe>`).
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target}
   */
  target?: HTMLAttributeAnchorTarget | undefined;
  /**
   * Hints at the linked URL's format with a MIME type. No built-in functionality.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#type}
   */
  type?: Expression | undefined;
};

/**
 * Props for the {@linkcode Area} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#attributes}
 */
export type AreaProps = TagProps & {
  /**
   * A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. This attribute is required only if the `href` attribute is used.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#alt}
   */
  alt?: Expression | undefined;
  /**
   * The `coords` attribute details the coordinates of the `shape` attribute in size, shape, and placement of an `<area>`. This attribute must not be used if `shape` is set to default.
   *
   * - `rect`: the value is `x1,y1,x2,y2`. The value specifies the coordinates of the top-left and bottom-right corner of the rectangle. For example, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` the coordinates are `0,0` and `253,27`, indicating the top-left and bottom-right corners of the rectangle, respectively.
   * - `circle`: the value is `x,y,radius`. Value specifies the coordinates of the circle center and the radius. For example: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`.
   * - `poly`: the value is `x1,y1,x2,y2,..,xn,yn`. Value specifies the coordinates of the edges of the polygon. If the first and last coordinate pairs are not the same, the browser will add the last coordinate pair to close the polygon.
   *
   * The values are numbers of CSS pixels.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#alt}
   */
  coords?: Expression | undefined;
  /**
   * This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource.
   *
   * Causes the browser to treat the linked URL as a download. Can be used with
   * or without a filename value.
   *
   * - Without a value, the browser will suggest a filename/extension, generated from various sources:
   *   - The Content-Disposition HTTP header
   *   - The final segment in the URL path
   *   - The media type (from the `Content-Type` header, the start of a `data:` URL, or Blob.type for a `blob:` URL)
   * - `filename`: defining a value suggests it as the filename. `/` and `\` characters are converted to underscores (`_`). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#download}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download}
   */
  download?: Expression | undefined;
  /**
   * The hyperlink target for the area. Its value is a valid URL. This attribute may be omitted; if so, the `<area>` element does not represent a hyperlink.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#href}
   */
  href?: Expression | undefined;
  /**
   * A space-separated list of URLs. When the link is followed, the browser
   * will send `POST` requests with the body PING to the URLs. Typically for
   * tracking.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#ping}
   */
  ping?: Expression | undefined;
  /**
   * How much of the referrer to send when following the link.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#referrerpolicy}
   */
  referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
  /**
   * For areas containing the `href` attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of link types. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the `href` attribute is present.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#rel}
   */
  rel?: Expression;
  /**
   * The shape of the associated hot spot. The specifications for HTML defines the values `rect`, which defines a rectangular region; `circle`, which defines a circular region; `poly`, which defines a polygon; and `default`, which indicates the entire region beyond any defined shapes.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#shape}
   */
  shape?: "rect" | "circle" | "poly" | "default";
  /**
   * Where to display the linked URL, as the name for a browsing context (a
   * tab, window, or `<iframe>`).
   *
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

/**
 * Props for the {@linkcode Audio} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#attributes}
 */
export type AudioProps = TagProps & {
  /**
   * A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#autoplay}
   */
  autoplay?: boolean | undefined;
  /**
   * If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#controls}
   */
  controls?: boolean | undefined;
  /**
   * The `controlslist` attribute, when specified, helps the browser select what controls to show for the audio element whenever the browser shows its own set of controls (that is, when the `controls` attribute is specified).
   *
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
   * This enumerated attribute indicates whether to use CORS to fetch the related audio file.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#crossorigin}
   */
  crossorigin?: CrossOrigin;
  /**
   * A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#loop}
   */
  loop?: boolean | undefined;
  /**
   * A Boolean attribute that indicates whether the audio will be initially silenced.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#muted}
   */
  muted?: boolean | undefined;
  /**
   * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:
   *
   * - `none`: Indicates that the audio should not be preloaded.
   * - `metadata`: Indicates that only audio metadata (e.g. length) is fetched.
   * - `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#preload}
   */
  preload?: "none" | "metadata" | "auto" | undefined;
  /**
   * The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the `<source>` element within the audio block to specify the audio to embed.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#src}
   */
  src?: Expression | undefined;
};

/**
 * Props for the {@linkcode Base} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#attributes}
 */
export type BaseProps = TagProps & {
  /**
   * The base URL to be used throughout the document for relative URLs. Absolute and relative URLs are allowed. `data:` and `javascript:` URLs are not allowed.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#href}
   */
  href?: Expression | undefined;
  /**
   * A **keyword** or **author-defined name** of the default browsing context to show the results of navigation from `<a>`, `<area>`, or `<form>` elements without explicit target attributes.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#target}
   */
  target?: HTMLAttributeAnchorTarget | undefined;
};
/**
 * Props for the {@linkcode Blockquote} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#attributes}
 */
export type BlockquoteProps = TagProps & {
  /**
   * A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#cite}
   */
  cite?: Expression | undefined;
};
/**
 * Props for the {@linkcode Button} macro.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes}
 */
export type ButtonProps = TagProps & {
  /**
   * This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.
   * 
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled}
   */
  disabled?: boolean | undefined;
  /**
   * The `<form>` element to associate the button with (its form owner). The value of this attribute must be the `id` of a `<form>` in the same document. (If this attribute is not set, the `<button>` is associated with its ancestor `<form>` element, if any.)
   * 
   * This attribute lets you associate `<button>` elements to `<form>`s anywhere in the document, not just inside a `<form>`. It can also override an ancestor `<form>` element.
   * 
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form}
   */
  form?: Expression | undefined;
  /**
   * The URL that processes the information submitted by the button. Overrides the `action` attribute of the button's form owner. Does nothing if there is no form owner.
   * 
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formaction}
   */
  formaction?:
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
  target?: HTMLAttributeAnchorTarget | undefined;
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
  target?: HTMLAttributeAnchorTarget | undefined;
  type?: Expression | undefined;
  width?: number | Expression | undefined;

  // Other HTML properties supported by SVG elements in browsers
  role?: AriaRole | undefined;
  tabindex?: number | undefined;
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

function renderYesNo(attr: string, value: any): Expression | null {
  return value === true ? <>{attr}="yes"</> : <>{attr}="no"</>;
}

function renderTrueFalse(attr: string, value: any): Expression | null {
  return value === true ? <>{attr}="true"</> : <>{attr}="false"</>;
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
 * The `<a>` HTML element (or anchor element), with its `href` attribute,
 * creates a hyperlink to web pages, files, email addresses, locations in the
 * same page, or anything else a URL can address.
 *
 * Content within each `<a>` should indicate the link's destination. If the
 * `href` attribute is present, pressing the enter key while focused on the
 * `<a>` element will activate it.
 *
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
 * The `<abbr>` HTML element represents an abbreviation or acronym.
 *
 * When including an abbreviation or acronym, provide a full expansion of the
 * term in plain text on first use, along with the `<abbr>` to mark up the
 * abbreviation. This informs the user what the abbreviation or acronym means.
 *
 * The optional `title` attribute can provide an expansion for the abbreviation
 * or acronym when a full expansion is not present. This provides a hint to
 * user agents on how to announce/display the content while informing all users
 * what the abbreviation means. If present, `title` must contain this full
 * description and nothing else.
 *
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
 * The `<address>` HTML element indicates that the enclosed HTML provides
 * contact information for a person or people, or for an organization.
 *
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
 * The `<area>` HTML element defines an area inside an image map that has
 * predefined clickable areas. An image map allows geometric areas on an image
 * to be associated with hypertext links.
 *
 * This element is used only within a `<map>` element.
 *
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
 * The `<article>` HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.
 *
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
 * The `<aside>` HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.
 *
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
 * The `<audio>` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the `<source>` element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a `MediaStream`.
 *
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
 * The `b` HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use `<b>` for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the `<strong>` element.
 *
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

const baseList: RenderList = [
  ...tagList,
  ["href", renderExpression],
  ["target", renderEnum],
];

/**
 * The `<base>` HTML element specifies the base URL to use for all relative URLs in a document. There can be only one `<base>` element in a document.
 *
 * A document's used base URL can be accessed by scripts with `Node.baseURI`. If the document has no `<base>` elements, then `baseURI` defaults to `location.href`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base}
 */
export function Base(
  props: BaseProps,
): Expression {
  return <RenderVoidElement name="base" attrs={props} list={baseList} />;
}

/**
 * The `<bdi>` HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
 *
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
 * The `<bdo>` HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.
 *
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

const blockquoteList: RenderList = [
  ...tagList,
  ["cite", renderExpression],
];

/**
 * The `<blockquote>` HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation. A URL for the source of the quotation may be given using the `cite` attribute, while a text representation of the source can be given using the `<cite>` element.
 *
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
 * The `<body>` HTML element represents the content of an HTML document. There can be only one `<body>` element in a document.
 *
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
 * The `<br>` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br}
 */
export function Br(props: TagProps): Expression {
  return <RenderVoidElement name="br" attrs={props} list={tagList} />;
}

const blockquoteList: RenderList = [
  ...tagList,
  ["cite", renderExpression],
];

/**
 * The `<button>` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.
 * 
 * By default, HTML buttons are presented in a style resembling the platform the user agent runs on, but you can change buttons' appearance with CSS.
 *
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

export function Div(props: TagProps & { children?: Expressions }): Expression {
  return (
    <RenderNonVoidElement name="div" attrs={props} list={tagList}>
      {props.children}
    </RenderNonVoidElement>
  );
}
