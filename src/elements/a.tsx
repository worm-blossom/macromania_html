import type {
  Children, // @ts-types="../../../macromania/mod.ts"
  Context,
  Expression,
} from "macromania";
import { type AOrAreaLinkProps, renderAOrAreaAttributes } from "../aOrArea.tsx";
import {
  BuildVerificationDOM,
  CAT_INTERACTIVE_CONTENT,
  cmNoDescendant,
  cmTransparent,
  type DOMNode,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode A} macro.
 *
 * https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
 */
export type AProps = AOrAreaLinkProps & {
  /**
   *  The [hreflang attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-hreflang) on [a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) elements that create [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink), if present, gives the language of the linked resource. It is purely advisory. The value must be a valid [BCP 47 language tag](https://www.rfc-editor.org/info/bcp47). User agents must not consider this attribute authoritative — upon fetching the resource, user agents must use only language information associated with the resource to determine its language, not metadata included in the link to the resource.
   */
  hreflang?: Expression;
  /**
   * The [type attribute](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-type), if present, gives the [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) of the linked resource. It is purely advisory. The value must be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type). User agents must not consider the type attribute authoritative — upon fetching the resource, user agents must not use metadata included in the link to the resource to determine its type.
   */
  type_?: Expression;
};

/**
 * The [a element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element).
 */
export function A(
  props: AProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={new DOMNodeInfo(
        "a",
        (ctx: Context, node: DOMNode<AProps>) => {
          // Content model: Transparent, but there must be no interactive content descendant, a element descendant, or descendant with the tabindex attribute specified.
          if (
            cmNoDescendant(
              (_ctx: Context, node: DOMNode<AProps>) => {
                return node.info.tag === "a";
              },
              `An ${ctx.fmtCode("a")} tag must not have another ${
                ctx.fmtCode("a")
              } tag as a descendant.`,
            )
          ) {
            return false;
          } else if (
            cmNoDescendant(
              (_ctx: Context, node: DOMNode<AProps>) => {
                return node.evaledAttrs!["tabindex"] !== undefined;
              },
              `An ${ctx.fmtCode("a")} tag must not have descendants whose ${
                ctx.fmtCode("tabindex")
              } attribute is set.`,
            )
          ) {
            return false;
          } else if (
            cmNoDescendant(
              CAT_INTERACTIVE_CONTENT,
              `An ${ctx.fmtCode("a")} tag must not interactive descendants.`,
            )
          ) {
            return false;
          } else {
            return cmTransparent(ctx, node);
          }
        },
      )}
      attrs={props}
      attrRendering={renderAOrAreaAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}
