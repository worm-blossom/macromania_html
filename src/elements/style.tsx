import type { Children, Expression } from "macromania";
import {
  attrUnorderedSetOfUniqueSpaceSeparatedTokens,
  renderGlobalAttributes,
  type TagProps,
} from "../global.tsx";
import type { PossiblyBlockingToken } from "../shared.tsx";
import {
  BuildVerificationDOM,
  CmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Style} macro.
 *
 * https://html.spec.whatwg.org/multipage/semantics.html#the-style-element
 */
export type StyleProps = {
  /**
   * The [media attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media) says which media the styles apply to. The value must be a [valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list). The user agent must apply the styles when the [media attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media)'s value [matches the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment) and the other relevant conditions apply, and must not apply them otherwise.
   */
  media?: Expression;
  /**
   * The [blocking attribute](https://html.spec.whatwg.org/multipage/semantics.html#attr-style-blocking).
   */
  blocking?: PossiblyBlockingToken[] | PossiblyBlockingToken;
} & TagProps;

/**
 * The [style element](https://html.spec.whatwg.org/multipage/semantics.html#the-style-element) allows authors to embed CSS style sheets in their documents. The element does not represent content for the user.
 */
export function Style(
  props: StyleProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderStyleAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom = new DOMNodeInfo(
  "style",
  new CmUnverified(),
  "https://html.spec.whatwg.org/multipage/semantics.html#the-style-element",
);

const renderStyleAttributes = {
  ...renderGlobalAttributes,
  blocking: attrUnorderedSetOfUniqueSpaceSeparatedTokens,
};
