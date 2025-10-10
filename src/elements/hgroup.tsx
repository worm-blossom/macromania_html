import type {
  Children,
  Context, // @ts-types="../../../macromania/mod.ts"
  DebuggingInformation,
  Expression,
} from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  type DOMNode,
  DOMNodeInfo,
  logContentModelViolation,
} from "../contentModel.tsx";
import { info, warn } from "../loggingExports.tsx";

/**
 * The [hgroup element](https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element) represents a heading and related content. The element may be used to group an [h1–h6 element](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) with one or more [p elements](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element) containing content representing a subheading, alternative title, or tagline.
 */
export function Hgroup(
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

const hgroupContentModel = function hgroupContentModel(
  ctx: Context,
  node: DOMNode<TagProps>,
): boolean {
  let foundHeading: DebuggingInformation | null = null;

  for (const child of node.children) {
    const tag = child.info.tag;

    if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
      if (foundHeading === null) {
        foundHeading = child.definedAt!;
      } else {
        warn(
          ctx,
          `An ${
            ctx.fmtCode("hgroup")
          } tag can must have exactly one heading child (${
            ctx.fmtCode("h1")
          }, ${ctx.fmtCode("h2")}, etc), but this one has more.`,
        );
        ctx.loggingGroup(() => {
          warn(
            ctx,
            `First heading child at ${
              ctx.fmtDebuggingInformation(foundHeading!)
            }`,
          );
          warn(
            ctx,
            `Second heading child at ${
              ctx.fmtDebuggingInformation(child.definedAt!)
            }`,
          );
          warn(
            ctx,
            `Outer ${ctx.fmtCode("hgroup")} tag at ${
              ctx.fmtDebuggingInformation(
                node.definedAt!,
              )
            }`,
          );
        });
        return false;
      }
    } else if (!["p", "script", "template"].includes(tag)) {
      logContentModelViolation(ctx, node, child);
      return false;
    }
  }

  if (foundHeading === null) {
    warn(
      ctx,
      `An ${
        ctx.fmtCode("hgroup")
      } tag can must have exactly one heading child (${ctx.fmtCode("h1")}, ${
        ctx.fmtCode("h2")
      }, etc), but this one had none.`,
    );
    ctx.loggingGroup(() => {
      warn(
        ctx,
        `The ${ctx.fmtCode("hgroup")} tag is at ${
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
};

const dom = new DOMNodeInfo(
  "hgroup",
  hgroupContentModel,
);
