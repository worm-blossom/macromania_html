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
 * Props for the {@linkcode Source} macro.
 *
 * https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
 */
export type SourceProps = {
  /**
   * The [type attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-type) may be present. If present, the value must be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type).
   */
  type?: Expressions;
  /**
   * The [media attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-media) may be present. If present, the value must contain a [valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list). The user agent will skip to the next [source element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element) if the value does not [match the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment).
   */
  media?: Expressions;
  /**
   * The [src attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-src) gives the [URL](https://url.spec.whatwg.org/#concept-url) of the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource). The value must be a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces). This attribute must be present if the parent element is a [media element](https://html.spec.whatwg.org/multipage/media.html#media-element), and must not be present if the parent element is a [picture element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element).
   */
  src?: Expressions;
  /**
   * The [srcset attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-srcset) is a [srcset attribute](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute). It must be present if the parent element is a [picture element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element).
   * The [srcset attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-srcset) contributes the [image sources](https://html.spec.whatwg.org/multipage/images.html#image-source) to the [source set](https://html.spec.whatwg.org/multipage/images.html#source-set), if the [source element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element) is selected.
   */
  srcset?: Expressions;
  /**
   * If the [srcset attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-srcset) has any [image candidate strings](https://html.spec.whatwg.org/multipage/images.html#image-candidate-string) using a [width descriptor](https://html.spec.whatwg.org/multipage/images.html#width-descriptor), the [sizes attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-sizes) may also be present. If, additionally, the following sibling [img element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) does not [allow auto-sizes](https://html.spec.whatwg.org/multipage/embedded-content.html#allows-auto-sizes), the [sizes attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-sizes) *must* be present. The [sizes attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-sizes) is a [sizes attribute](https://html.spec.whatwg.org/multipage/images.html#sizes-attribute), which contributes the [source size](https://html.spec.whatwg.org/multipage/images.html#source-size-2) to the [source set](https://html.spec.whatwg.org/multipage/images.html#source-set), if the [source element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element) is selected.
   */
  sizes?: Expressions;
  /**
   * (Only in [picture elements](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)): The [width attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width) specifies the horizontal dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  width?: number;
  /**
   * (Only in [picture elements](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)): The [height attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height) specifies the vertical dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  height?: number;
} & TagProps;

/**
 * The [source element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element) allows authors to specify multiple alternative [source sets](https://html.spec.whatwg.org/multipage/images.html#source-set) for [img elements](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) or multiple alternative [media resources](https://html.spec.whatwg.org/multipage/media.html#media-resource) for [media elements](https://html.spec.whatwg.org/multipage/media.html#media-element). It does not represent anything on its own.
 */
export function Source(
  props: SourceProps & { children?: Expressions },
): Expression {
  return (
    <RenderVoidElement
      name="source"
      attrs={<RenderSourceAttributes attrs={props} />}
    />
  );
}

function RenderSourceAttributes(
  { attrs }: { attrs?: SourceProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.type !== undefined
        ? <RenderExpression attr="type" value={<exps x={attrs.type} />} />
        : ""}
      {attrs.media !== undefined
        ? <RenderExpression attr="media" value={<exps x={attrs.media} />} />
        : ""}
      {attrs.src !== undefined
        ? <RenderExpression attr="src" value={<exps x={attrs.src} />} />
        : ""}
      {attrs.srcset !== undefined
        ? <RenderExpression attr="srcset" value={<exps x={attrs.srcset} />} />
        : ""}
      {attrs.sizes !== undefined
        ? <RenderExpression attr="sizes" value={<exps x={attrs.sizes} />} />
        : ""}
      {attrs.width !== undefined
        ? <RenderNumber attr="width" value={attrs.width} />
        : ""}
      {attrs.height !== undefined
        ? <RenderNumber attr="height" value={attrs.height} />
        : ""}
    </>
  );
}
