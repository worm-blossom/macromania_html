import type { Expression } from "macromania";
import { type AOrAreaLinkProps, renderAOrAreaAttributes } from "../aOrArea.tsx";
import {
  BuildVerificationDOM,
  cmTrivial,
  DOMNodeInfo,
} from "../contentModel.tsx";
import { attrValidListOfFloatingPointNumbers } from "../global.tsx";

export type AreaShape = /**
   * Designates a circle, using exactly three integers in the [coords attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-coords).
   */
  | "circle"
  /**
   * This area is the whole image. (The [coords attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-coords) is not used.)
   */
  | "default"
  /**
   * Designates a polygon, using at-least six integers in the [coords attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-coords).
   */
  | "poly"
  /**
   * Designates a rectangle, using exactly four integers in the [coords attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-coords).
   */
  | "rect";

/**
 * Props for the {@linkcode Area} macro.
 *
 * https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element
 */
export type AreaProps = AOrAreaLinkProps & {
  /**
   *  Replacement text for use when images are not available.
   * If the [area element](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element) has an [href attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href), then the [area element](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element) represents a [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink). In this case, the [alt attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-alt) must be present. It specifies the text of the hyperlink. Its value must be text that, when presented with the texts specified for the other hyperlinks of the [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map), and with the alternative text of the image, but without the image itself, provides the user with the same kind of choice as the hyperlink would when used without its text but with its shape applied to the image. The [alt attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-alt) may be left blank if there is another [area element](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element) in the same [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map) that points to the same resource and has a non-blank [alt attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-alt).
   */
  alt?: Expression;
  /**
   * The [coords attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-coords) specifies coordinates for the shape to be created in an [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map).
   */
  coords?: number[];
  /**
   * The [shape attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape) defines the kind of shape to be created in an [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map).
   */
  shape?: AreaShape;
};

/**
 * The [area element](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-alt) represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map).
 */
export function Area(
  props: AreaProps,
): Expression {
  return (
    <BuildVerificationDOM
      dom={new DOMNodeInfo(
        "area",
        cmTrivial,
      )}
      attrs={props}
      attrRendering={renderAreaAttributes}
      isVoid
    />
  );
}

const renderAreaAttributes = {
  ...renderAOrAreaAttributes,
  coords: attrValidListOfFloatingPointNumbers,
};
