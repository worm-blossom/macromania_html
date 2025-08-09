import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllPhrasing,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [bdi element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element) represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 */
export function Bdi(
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
  "bdi",
  cmAllPhrasing,
);
