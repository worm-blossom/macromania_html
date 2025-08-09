import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FLOW_CONTENT,
  type DOMNode,
  DOMNodeInfo,
  logContentModelViolation,
} from "../contentModel.tsx";
import { info, warn } from "../mod.tsx";

/**
 * The [figure element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element) represents some [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2), optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
 */
export function Figure(
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

function figureContentModel(
  ctx: Context,
  node: DOMNode<TagProps>,
): boolean {
  // Either: one figcaption element followed by flow content.
  // Or: flow content followed by one figcaption element.
  // Or: flow content.

  let noMoreFlowContentAllowed = false;
  let noMoreFigcaptionsAllowed = false;
  let foundFlowContentAlready = false;

  for (const child of node.children) {
    if (child.info.tag === "figcaption") {
      if (noMoreFigcaptionsAllowed) {
        warn(
          ctx,
          `Must not nest more than one ${
            ctx.fmtCode("figcaption")
          } tag inside a ${ctx.fmtCode("figure")} tag.`,
        );

        ctx.loggingGroup(() => {
          info(
            ctx,
            `Offending ${ctx.fmtCode("figcaption")} tag at ${
              ctx.fmtDebuggingInformation(
                child.definedAt!,
              )
            }`,
          );
          info(
            ctx,
            `Outer ${ctx.fmtCode("figure")} tag at ${
              ctx.fmtDebuggingInformation(
                node.definedAt!,
              )
            }`,
          );
        });
        return false;
      } else {
        noMoreFigcaptionsAllowed = true;
        if (foundFlowContentAlready) {
          noMoreFlowContentAllowed = true;
        }
      }
    } else {
      const result = CAT_FLOW_CONTENT(ctx, node);

      if (result === true) {
        if (noMoreFlowContentAllowed) {
          warn(
            ctx,
            `Must not place flow content such as ${
              ctx.fmtCode(child.info.tag)
            } tags after a ${ctx.fmtCode("figcaption")} tag inside a ${
              ctx.fmtCode("figure")
            } tag, if there was already flow content preceding the ${
              ctx.fmtCode("figcaption")
            } tag.`,
          );

          ctx.loggingGroup(() => {
            info(
              ctx,
              `Offending ${ctx.fmtCode(child.info.tag)} tag at ${
                ctx.fmtDebuggingInformation(
                  child.definedAt!,
                )
              }`,
            );
            info(
              ctx,
              `Outer ${ctx.fmtCode("figure")} tag at ${
                ctx.fmtDebuggingInformation(
                  node.definedAt!,
                )
              }`,
            );
          });
        } else {
          foundFlowContentAlready = true;
        }
      } else {
        logContentModelViolation(ctx, node, child);
      }
    }
  }

  return true;
}

const dom = new DOMNodeInfo(
  "figure",
  figureContentModel,
);
