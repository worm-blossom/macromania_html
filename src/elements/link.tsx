import { Expression, Expressions } from "../../deps.ts";
import { RenderExpression, RenderVoidElement } from "../renderUtils.tsx";
import {
  NavigableTargetNameOrKeyword,
  ReferrerPolicy,
  RenderNavigableTargetNameOrKeyword,
} from "../aOrArea.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderEnum } from "../renderUtils.tsx";
import { CrossOrigin } from "../shared.tsx";

/**
 * Props for the {@linkcode Link} macro.
 *
 * https://html.spec.whatwg.org/multipage/semantics.html#the-link-element
 */
export type LinkProps = {
  /**
   * The address of the link(s) is given by the [href attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href). If the [href attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href) is present, then its value must be a valid non-empty URL potentially surrounded by spaces. One or both of the [href](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href) or [imagesrcset](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset) attributes must be present.
   */
  href?: Expression;
  /**
   * The [crossorigin attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-crossorigin) is a [CORS settings attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute). It is intended for use with [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link).
   */
  crossorigin?: CrossOrigin;
  /**
   * The [rel attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel) indicates relationship between the document containing the hyperlink and the destination resource.
   */
  rel?: LinkLinkType; // TODO https://html.spec.whatwg.org/multipage/links.html#linkTypes
  /**
   * The [media attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media) says which media the resource applies to. The value must be a valid [media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list).
   */
  media?: Expression;
  /**
   * The [integrity attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-integrity) represents the [integrity metadata](https://fetch.spec.whatwg.org/#concept-request-integrity-metadata) for requests which this element is responsible for. The attribute must only be specified on [link elements](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) that have a [rel attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel) that contains the [`stylesheet`](https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet), [`preload`](https://html.spec.whatwg.org/multipage/links.html#link-type-preload), or [`modulepreload`](https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload) keyword.
   */
  integrity?: Expression;
  /**
   * The [hreflang attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-hreflang), if present, gives the language of the linked resource. It is purely advisory. The value must be a valid [BCP 47 language tag](https://www.rfc-editor.org/info/bcp47). User agents must not consider this attribute authoritative — upon fetching the resource, user agents must use only language information associated with the resource to determine its language, not metadata included in the link to the resource.
   */
  hreflang?: Expression;
  /**
   * The [type attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type) gives the [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) of the linked resource. It is purely advisory. The value must be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type).
   *
   * For [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link), the [type attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type) is used as a hint to user agents so that they can avoid fetching resources they do not support.
   */
  type?: Expression;
  /**
   * The [referrerpolicy attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-referrerpolicy) is intended for use with [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link), where it helps set the [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) used when [fetching and processing the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource).
   */
  referrerpolicy?: ReferrerPolicy;
  /**
   * The [sizes attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-sizes) gives the sizes of icons for visual media. Its value, if present, is merely advisory. User agents may use the value to decide which icon(s) to use if multiple icons are available. The attribute must only be specified on [link elements](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) that have a [rel attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel) that specifies the [icon](https://html.spec.whatwg.org/multipage/links.html#rel-icon) keyword or the `apple-touch-icon` keyword (which is registered as an extension but not part of html proper).
   */
  sizes?: ("any" | { width: number; height: number })[];
  /**
   * The [imagesrcset attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset) indicates the images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for [rel](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="[preload](https://html.spec.whatwg.org/multipage/links.html#link-type-preload)"). It is a [srcset attribute](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute).
   */
  imagesrcset?: Expression;
  /**
   * The [as attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as) specifies the [potential destination](https://fetch.spec.whatwg.org/#concept-potential-destination) for a preload request for the resource given by the [href attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href). It is an enumerated attribute. The attribute must be specified on [link elements](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) that have a [rel attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel) that contains the [preload](https://html.spec.whatwg.org/multipage/links.html#link-type-preload) keyword. It may be specified on [link elements](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) that have a [rel attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel) attribute that contains the [modulepreload](https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload) keyword; in such cases it must have a value which is a [script-like destination]. For other [link elements](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element), it must not be specified.
   */
  as: PotentialDestination;
  /**
   * The [blocking attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-blocking) is used by link type [stylesheet](https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet), and it must only be specified on link elements that have a [rel attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel) containing that keyword.
   *
   * See https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute
   */
  blocking: PossiblyBlockingToken[];
  /**
   * The [disabled attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-disabled) is a boolean attribute that is used with the [stylesheet](https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet) link type.
   */
  disabled: boolean;
  /**
   * The [fetchpriority attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-fetchpriority) is intended for use with [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link), where it is used to set the [priority](https://fetch.spec.whatwg.org/#request-priority) used when [fetching and processing the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource).
   */
  fetchpriority: FetchPriority;
} & TagProps;

/**
 * The [link element](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) allows authors to link their document to other resources.
 */
export function Link(
  props: LinkProps,
): Expression {
  return (
    <RenderVoidElement
      name="link"
      attrs={<RenderLinkAttributes attrs={props} />}
    />
  );
}

function RenderLinkAttributes(
  { attrs }: { attrs?: LinkProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.href !== undefined
        ? <RenderExpression attr="href" value={attrs.href} />
        : ""}
      {attrs.crossorigin !== undefined
        ? <RenderEnum attr="crossorigin" value={attrs.crossorigin} />
        : ""}
      {attrs.rel !== undefined
        ? <RenderEnum attr="rel" value={attrs.rel} />
        : ""}
      {attrs.media !== undefined
        ? <RenderExpression attr="media" value={attrs.media} />
        : ""}
      {attrs.integrity !== undefined
        ? <RenderExpression attr="integrity" value={attrs.integrity} />
        : ""}
      {attrs.hreflang !== undefined
        ? <RenderExpression attr="hreflang" value={attrs.hreflang} />
        : ""}
      {attrs.type !== undefined
        ? <RenderExpression attr="type" value={attrs.type} />
        : ""}
      {attrs.referrerpolicy !== undefined
        ? <RenderEnum attr="referrerpolicy" value={attrs.referrerpolicy} />
        : ""}
    </>
  );
}

/**
 * https://fetch.spec.whatwg.org/#concept-potential-destination
 */
export type PotentialDestination =
  | "fetch"
  | Destination;

/**
 * https://fetch.spec.whatwg.org/#concept-request-destination
 */
export type Destination =
  | ""
  | "audio"
  | "audioworklet"
  | "document"
  | "embed"
  | "font"
  | "frame"
  | "iframe"
  | "image"
  | "json"
  | "manifest"
  | "object"
  | "paintworklet"
  | "report"
  | "script"
  | "serviceworker"
  | "sharedworker"
  | "style"
  | "track"
  | "video"
  | "webidentity"
  | "worker"
  | "xslt";

/**
 * See https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute
 */
export type PossiblyBlockingToken = "render";

/**
 * https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attribute
 */
export type FetchPriority =
  /**
   * Signals a high-priority fetch relative to other resources with the same destination.
   */
  | "high"
  /**
   * Signals a low-priority fetch relative to other resources with the same destination.
   */
  | "low"
  /**
   * Signals automatic determination of fetch priority relative to other resources with the same destination.
   */
  | "auto";
