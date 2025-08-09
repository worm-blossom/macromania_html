import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmTransparent,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Slot} macro.
 *
 * https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element
 */
export type SlotProps = {
  /**
   * The [name attribute](https://html.spec.whatwg.org/multipage/scripting.html#attr-slot-name) may contain any string value. It represents a [slot](https://dom.spec.whatwg.org/#concept-slot)'s [name](https://dom.spec.whatwg.org/#slot-name).
   */
  name?: Expression;
} & TagProps;

/**
 * The [slot element](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element) defines a [slot](https://dom.spec.whatwg.org/#concept-slot). It is typically used in a [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree). A [slot element](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element) represents its [assigned nodes](https://dom.spec.whatwg.org/#slot-assigned-nodes), if any, and its contents otherwise.
 */
export function Slot(
  props: SlotProps & { children?: Children },
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
  "slot",
  cmTransparent,
);
