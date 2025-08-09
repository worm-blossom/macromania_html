import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmTransparent,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Map} macro.
 *
 * https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element
 */
export type MapProps = {
  /**
   *  The [name attribute](https://html.spec.whatwg.org/multipage/image-maps.html#attr-map-name) gives the of the image map to reference from the usemap attribute
   */
  name: Expression;
} & TagProps;

/**
 * The [map element](https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element), in conjunction with an [img element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) and any [area element](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element) descendants, defines an [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map).
 */
export function Map(
  props: MapProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom = new DOMNodeInfo(
  "map",
  cmTransparent,
);
