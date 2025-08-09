import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  DOMNodeInfo,
} from "../contentModel.tsx";

export type DialogClosedBy = "any" | "closerequest" | "none";

/**
 * Props for the {@linkcode Dialog} macro.
 *
 * https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element
 */
export type DialogProps = {
  /**
   * Which user actions will close the dialog.
   */
  closedby?: DialogClosedBy;
  /**
   *  Whether the dialog box is showing.
   */
  open?: boolean;
} & TagProps;

/**
 * The [dialog element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element) represents a transitory part of an application, in the form of a small window ("dialog box"), which the user interacts with to perform a task or gather information. Once the user is done, the dialog can be automatically closed by the application, or manually closed by the user
 */
export function Dialog(
  props: DialogProps & { children?: Children },
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
  "strong",
  cmAllFlow,
);
