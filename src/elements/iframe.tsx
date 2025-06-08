import { Expression, Expressions } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderNonVoidElement,
  RenderNumber,
  RenderVoidElement,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { CrossOrigin, FetchPriority } from "../shared.tsx";

/**
 * Props for the {@linkcode Iframe} macro.
 *
 * https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element
 */
export type IframeProps = {
  /**
   * The [src attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-src) gives the [URL](https://url.spec.whatwg.org/#concept-url) of a page that the element's [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable) is to contain. The attribute, if present, must be a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces). If the [itemprop attribute](https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute) is specified on an [iframe element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element), then the [src attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-src) must also be specified.
   */
  src?: Expression;
  /**
   * The [srcdoc attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-srcdoc) gives the content of the page that the element's [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable) is to contain. The value of the attribute is used to [construct](https://html.spec.whatwg.org/multipage/browsing-the-web.html#create-navigation-params-from-a-srcdoc-resource) an iframe srcdoc document, which is a [Document](https://html.spec.whatwg.org/multipage/dom.html#document) whose [URL](https://dom.spec.whatwg.org/#concept-document-url) [matches about:srcdoc](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#matches-about:srcdoc).
   */
  srcdoc?: Expression;
  /**
   * The [name attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-name), if present, must be a [valid navigable target name](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name). The given value is used to name the element's [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable) if present when that is [created](https://html.spec.whatwg.org/multipage/document-sequences.html#create-a-new-child-navigable).
   */
  name?: Expression;
  /**
   * The [sandbox attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox), when specified, enables a set of extra restrictions on any content hosted by the [iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element). Its value must be an [unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens) that are [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive). The allowed values are:
   *
   * - [allow-downloads](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-downloads)
   * - [allow-forms](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-forms)
   * - [allow-modals](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-modals)
   * - [allow-orientation-lock](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-orientation-lock)
   * - [allow-pointer-lock](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-pointer-lock)
   * - [allow-popups](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-popups)
   * - [allow-popups-to-escape-sandbox](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-popups-to-escape-sandbox)
   * - [allow-presentation](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-presentation)
   * - [allow-same-origin](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-same-origin)
   * - [allow-scripts](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-scripts)
   * - [allow-top-navigation](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-top-navigation)
   * - [allow-top-navigation-by-user-activation](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-top-navigation-by-user-activation)
   * - [allow-top-navigation-to-custom-protocols](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-top-navigation-to-custom-protocols)
   */
  sandbox?: Expression;
  /**
   * The [allow attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-allow), when specified, determines the [container policy](https://w3c.github.io/webappsec-permissions-policy/#container-policy) that will be used when the [permissions policy](https://html.spec.whatwg.org/multipage/dom.html#concept-document-permissions-policy) for a [Document](https://html.spec.whatwg.org/multipage/dom.html#document) in the [iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)'s [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable) is initialized. Its value must be a [serialized permissions policy](https://w3c.github.io/webappsec-permissions-policy/#serialized-permissions-policy).
   */
  allow?: Expression;
  /**
   * The [allowfullscreen attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-allowfullscreen), when specified, indicates that [Document](https://html.spec.whatwg.org/multipage/dom.html#document) objects in the [iframe element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)'s [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable) will be initialized with a [permissions policy](https://html.spec.whatwg.org/multipage/dom.html#concept-document-permissions-policy) which allows the `"fullscreen"` feature to be used from any [origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin). This is enforced by the [process permissions policy attributes](https://w3c.github.io/webappsec-permissions-policy/#process-permissions-policy-attributes) algorithm.
   */
  allowfullscreen?: boolean;
  /**
   * The [width attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width) specifies the horizontal dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  width?: number;
  /**
   * The [height attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height) specifies the vertical dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  height?: number;
  /**
   * The [referrerpolicy attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-referrerpolicy) is a [referrer policy attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#referrer-policy-attribute). Its purpose is to set the [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) used when [processing the iframe attributes](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#process-the-iframe-attributes).
   */
  referrerpolicy?: ReferrerPolicy;
  /**
   * The [loading attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-loading) is a [lazy loading attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attribute). Its purpose is to indicate the policy for loading [iframe elements](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element) that are outside the viewport.
   */
  loading?: "lazy" | "eager";
} & TagProps;

/**
 * The [iframe element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element) represents its [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable).
 */
export function Iframe(
  props: IframeProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="iframe"
      attrs={<RenderIframeAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderIframeAttributes(
  { attrs }: { attrs?: IframeProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.src !== undefined
        ? <RenderExpression attr="src" value={<exps x={attrs.src} />} />
        : ""}
      {attrs.srcdoc !== undefined
        ? <RenderExpression attr="srcdoc" value={<exps x={attrs.srcdoc} />} />
        : ""}
      {attrs.name !== undefined
        ? <RenderExpression attr="name" value={<exps x={attrs.name} />} />
        : ""}
      {attrs.sandbox !== undefined
        ? <RenderExpression attr="sandbox" value={<exps x={attrs.sandbox} />} />
        : ""}
      {attrs.allow !== undefined
        ? <RenderExpression attr="allow" value={<exps x={attrs.allow} />} />
        : ""}
      {attrs.allowfullscreen !== undefined
        ? <RenderBoolean attr="allowfullscreen" value={attrs.allowfullscreen} />
        : ""}
      {attrs.width !== undefined
        ? <RenderNumber attr="width" value={attrs.width} />
        : ""}
      {attrs.height !== undefined
        ? <RenderNumber attr="height" value={attrs.height} />
        : ""}
      {attrs.referrerpolicy !== undefined
        ? <RenderEnum attr="referrerpolicy" value={attrs.referrerpolicy} />
        : ""}
      {attrs.loading !== undefined
        ? <RenderEnum attr="loading" value={attrs.loading} />
        : ""}
    </>
  );
}
