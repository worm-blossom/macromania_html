import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Template} macro.
 *
 * https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
 */
export type TemplateProps = {
  /**
   * The [shadowrootmode attribute](https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootmode) enables streaming declarative shadow roots.
   */
  shadowrootmode?: "open" | "closed";
  /**
   * The [shadowrootdelegatesfocus attribute](https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootdelegatesfocus) sets [delegates focus](https://dom.spec.whatwg.org/#shadowroot-delegates-focus) on a declarative shadow root.
   */
  shadowrootdelegatesfocus?: boolean;
  /**
   * The [shadowrootclonable attribute](https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootclonable) sets [clonable](https://dom.spec.whatwg.org/#shadowroot-clonable) on a declarative shadow root.
   */
  shadowrootclonable?: boolean;
} & TagProps;

/**
 * The [template element](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element) is used to declare fragments of HTML that can be cloned and inserted in the document by script.
 */
export function Template(
  props: TemplateProps & { children?: Children },
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
  "template",
  cmUnverified,
);
