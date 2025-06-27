import { Expression, Children } from "macromania";
import {
  RenderExpression,
  RenderNonVoidElement,
  RenderVoidElement,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";

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
    <RenderNonVoidElement
      name="map"
      attrs={<RenderMapAttributes attrs={props} />}
      children={props.children}
    />
  );
  // TODO call setCurrentlyInsideMapElement (careful: handle nesting correctly, dont naively set to `false` in lifecycle post)
}

function RenderMapAttributes(
  { attrs }: { attrs?: MapProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      <RenderExpression attr="name" value={attrs.name} />
    </>
  );
}
