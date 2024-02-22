import { Expression, Expressions } from "../../deps.ts";
import {
  EscapeHtml,
  RenderBoolean,
  RenderExpression,
  RenderNonVoidElement,
  RenderSpaceSeparatedList,
} from "../renderUtils.tsx";
import { ReferrerPolicy } from "../aOrArea.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderEnum } from "../renderUtils.tsx";
import { CrossOrigin } from "../shared.tsx";

/**
 * Props for the {@linkcode Q} macro.
 *
 * https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element
 */
export type QProps = {
  /**
   * Content inside a [q element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element) must be quoted from another source, whose address, if it has one, may be cited in the [cite attribute](https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-q-cite). The source may be fictional, as when quoting characters in a novel or screenplay.
   *
   * If the [cite attribute] is present, it must be a valid URL potentially surrounded by spaces. To obtain the corresponding citation link, the value of the attribute must be [parsed](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url) relative to the element's [node document](https://dom.spec.whatwg.org/#concept-node-document). User agents may allow users to follow such citation links, but they are primarily intended for private use (e.g., by server-side scripts collecting statistics about a site's use of quotations), not for readers.
   */
  cite?: Expression;
} & TagProps;

/**
 * The [q element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element) represents some phrasing content quoted from another source.
 */
export function Q(
  props: QProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="q"
      attrs={<RenderQAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderQAttributes(
  { attrs }: { attrs?: QProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.cite !== undefined
        ? <RenderExpression attr="cite" value={attrs.cite} />
        : ""}
    </>
  );
}
