import type {
  Children, // @ts-types="../../../macromania/mod.ts"
  Context,
  Expression,
} from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_BODY,
  CAT_HEAD,
  cmSequence,
  DOMNode,
  DOMNodeInfo,
} from "../contentModel.tsx";
import { info, warn } from "../mod.tsx";

/**
 * The [html element](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element) represents the root of an HTML document.
 *
 * Authors are encouraged to specify a [lang attribute](https://html.spec.whatwg.org/multipage/dom.html#attr-lang) on the root [html element](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element), giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth.
 */
export function Html(
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
  "html",
  (ctx: Context, node: DOMNode<TagProps>) => {
    if (node.children.length !== 2) {
      warn(
        ctx,
        `An ${
          ctx.fmtCode("html")
        } tag must have exactly two child tags, but got ${node.children.length}.`,
      );

      ctx.loggingGroup(() => {
        info(
          ctx,
          `Tag with wrong number of children at ${
            ctx.fmtDebuggingInformation(
              node.definedAt!,
            )
          }`,
        );
      });

      return false;
    } else {
      if (node.children[0].info.tag !== "head") {
        warn(
          ctx,
          `The first child of an ${ctx.fmtCode("html")} tag must be a ${
            ctx.fmtCode("head")
          } tag, not a ${ctx.fmtCode(node.children[0].info.tag)} tag.`,
        );

        ctx.loggingGroup(() => {
          info(
            ctx,
            `Offending ${ctx.fmtCode(node.children[0].info.tag)} tag at ${
              ctx.fmtDebuggingInformation(
                node.children[0].definedAt!,
              )
            }`,
          );

          info(
            ctx,
            `Outer ${ctx.fmtCode("html")} tag at ${
              ctx.fmtDebuggingInformation(
                node.definedAt!,
              )
            }`,
          );
        });

        return false;
      } else if (node.children[1].info.tag !== "body") {
        warn(
          ctx,
          `The second child of an ${ctx.fmtCode("html")} tag must be a ${
            ctx.fmtCode("body")
          } tag, not a ${ctx.fmtCode(node.children[1].info.tag)} tag.`,
        );

        ctx.loggingGroup(() => {
          info(
            ctx,
            `Offending ${ctx.fmtCode(node.children[1].info.tag)} tag at ${
              ctx.fmtDebuggingInformation(
                node.children[1].definedAt!,
              )
            }`,
          );

          info(
            ctx,
            `Outer ${ctx.fmtCode("html")} tag at ${
              ctx.fmtDebuggingInformation(
                node.definedAt!,
              )
            }`,
          );
        });

        return false;
      } else {
        return true;
      }
    }
  },
);
