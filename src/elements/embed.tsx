import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmTrivial,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Embed} macro.
 *
 * https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element
 */
export type EmbedProps = {
  /**
   * The [src attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-src) gives the [URL](https://url.spec.whatwg.org/#concept-url) of the resource being embedded. The attribute, if present, must contain a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces).
   */
  src?: Expression;
  /**
   * The [type attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-type), if present, gives the [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) by which the plugin to instantiate is selected. The value must be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type). If both the [type attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-type) and the [src attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-src) are present, then the [type attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-type) must specify the same type as the [explicit Content-Type metadata](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#content-type) of the resource given by the [src attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-src).
   */
  type_?: Expression;
  /**
   * The [width attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width) specifies the horizontal dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  width?: number;
  /**
   * The [height attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height) specifies the vertical dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  height?: number;
} & TagProps;

/**
 * The [embed element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element) provides an integration point for an external application or interactive content.
 */
export function Embed(
  props: EmbedProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
      isVoid
    />
  );
}

const dom = new DOMNodeInfo(
  "embed",
  cmTrivial,
);
