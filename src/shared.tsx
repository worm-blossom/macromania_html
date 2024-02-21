// Functionality shared across many element types.

/**
 * https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute
 */
export type CrossOrigin =
  /** [Requests](https://fetch.spec.whatwg.org/#concept-request) for the element will have their [mode](https://fetch.spec.whatwg.org/#concept-request-mode) set to "`cors`" and their [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) set to "`same-origin`". */
  | "anonymous"
  /** [Requests](https://fetch.spec.whatwg.org/#concept-request) for the element will have their [mode](https://fetch.spec.whatwg.org/#concept-request-mode) set to "`cors`" and their [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) set to "`include`". */
  | "use-credentials";

/**
 * See https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute
 */
export type PossiblyBlockingToken = "render";
