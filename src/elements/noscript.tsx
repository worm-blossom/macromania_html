import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [noscript element](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element) represents nothing if [scripting is enabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-n-script), and represents its children if [scripting is disabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-n-noscript). It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.
 */
export function Noscript(
  props: TagProps & { children?: Children },
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
  "noscript",
  cmUnverified,
);
