import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  cmAllFlow,
  cmAnd,
  type DOMNode,
  DOMNodeInfo,
} from "../contentModel.tsx";
import { info, warn } from "../mod.tsx";

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

function cmHierarchicallyCorrectMain(
  ctx: Context,
  node: DOMNode<TagProps>,
): boolean {
  // A hierarchically correct main element is one whose ancestor elements are limited to html, body, div, form without an accessible name, and autonomous custom elements. Each main element must be a hierarchically correct main element.

  // We simplify this by allowing all forms, and disallowing autonomous custom elements.

  let n = node.parent;

  while (n !== undefined) {
    if (!["html", "body", "div", "form"].includes(n.info.tag)) {
      warn(
        ctx,
        `The only allowed ancestors for a ${ctx.fmtCode("main")} tag are ${
          ctx.fmtCode("html")
        }, ${ctx.fmtCode("body")}, ${ctx.fmtCode("div")}, or ${
          ctx.fmtCode("form")
        } tags.`,
      );

      ctx.loggingGroup(() => {
        info(
          ctx,
          `Offending ${ctx.fmtCode("main")} tag at ${
            ctx.fmtDebuggingInformation(
              node.definedAt!,
            )
          }`,
        );
        info(
          ctx,
          `Offending ancestor ${ctx.fmtCode(n!.info.tag)} tag at ${
            ctx.fmtDebuggingInformation(
              n!.definedAt!,
            )
          }`,
        );
      });
      return false;
    } else {
      n = n.parent;
    }
  }

  return true;
}

const dom = new DOMNodeInfo(
  "main",
  cmAnd([cmAllFlow, cmHierarchicallyCorrectMain]),
);
