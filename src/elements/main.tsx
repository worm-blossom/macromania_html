import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FLOW_CONTENT,
  Category,
  CmAnd,
  CmCategory,
  CmZeroOrMore,
  type DOMNode,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * The [main element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element) represents the dominant contents of the document.
 *
 * A document must not have more than one [main element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element) that does not have the [hidden attribute](https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden) specified.
 *
 * A [hierarchically correct](https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element) [main element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element) is one whose ancestor elements are limited to [html](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element), [body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element), [div](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element), [form](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) without an [accessible name](https://w3c.github.io/aria/#dfn-accessible-name), and [autonomous custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#autonomous-custom-element). Each [main element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element) must be a [hierarchically correct](https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element) [main element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element).
 */
export function Main(
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

export class CategoryHierarchicallyCorrectMain extends Category {
  constructor() {
    super(
      "https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element",
    );
  }

  override name(ctx: Context): string {
    return `hierarchically correct ${
      ctx.fmtCode("main")
    } element (we perform a slightly simplified check, we require a ${
      ctx.fmtCode("main")
    } element whose ancestor elements are limited to ${ctx.fmtCode("html")}, ${
      ctx.fmtCode("body")
    }, ${ctx.fmtCode("div")}, or ${ctx.fmtCode("form")} elements)`;
  }

  override belongsToCategory<Props extends TagProps>(
    _ctx: Context,
    node: DOMNode<Props>,
  ): boolean {
    let n = node.parent;

    while (n !== undefined) {
      if (!["html", "body", "div", "form"].includes(n.info.tag)) {
        return false;
      } else {
        n = n.parent;
      }
    }

    return true;
  }
}

export const CAT_HIERARCHICALLY_CORRECT_MAIN =
  new CategoryHierarchicallyCorrectMain();

const dom = new DOMNodeInfo(
  "main",
  new CmAnd([
    new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
    new CmCategory(CAT_HIERARCHICALLY_CORRECT_MAIN),
  ]),
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element",
);
