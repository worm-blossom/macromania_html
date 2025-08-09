import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Canvas} macro.
 *
 * https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element
 */
export type CanvasProps = {
  /**
   * The [canvas element](https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element) has two attributes to control the size of the element's bitmap: [width](https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-width) and [height](https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-height). These attributes, when specified, must have values that are valid non-negative integers.
   */
  width?: number;
  /**
   * The [canvas element](https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element) has two attributes to control the size of the element's bitmap: [width](https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-width) and [height](https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-height). These attributes, when specified, must have values that are valid non-negative integers.
   */
  height?: number;
} & TagProps;

/**
 * The [canvas element](https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element) provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.
 */
export function Canvas(
  props: CanvasProps & { children?: Children },
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
  "canvas",
  cmUnverified,
);
