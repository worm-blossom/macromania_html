import { Expression, Children } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderNonVoidElement,
  RenderNumber,
  RenderVoidElement,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";

/**
 * Props for the {@linkcode Label} macro.
 *
 * https://html.spec.whatwg.org/multipage/forms.html#the-label-element
 */
export type LabelProps = {
  /**
   * Associate the label with form control.
   */
  for_?: Expression;
} & TagProps;

/**
 * The [label element](https://html.spec.whatwg.org/multipage/forms.html#the-label-element) represents a caption in a user interface.
 */
export function Label(
  props: LabelProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="label"
      attrs={<RenderLabelAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderLabelAttributes(
  { attrs }: { attrs?: LabelProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.for_ !== undefined
        ? <RenderExpression attr="for" value={attrs.for_} />
        : ""}
    </>
  );
}
