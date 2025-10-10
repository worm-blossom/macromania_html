import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  type DOMNode,
  DOMNodeInfo,
  logContentModelViolation,
} from "../contentModel.tsx";
import { info, warn } from "../loggingExports.tsx";

/**
 * The [dl element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names ([dt elements](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element), possibly as children of a [div element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element) child) followed by one or more values (dd elements, possibly as children of a [div element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element) child), ignoring any nodes other than [dt](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element) and [dd element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element) children, and [dt](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element) and [dd elements](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element) that are children of [div element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element) children. Within a single [dl element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element), there should not be more than one [dt element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element) for each name.
 */
export function Dl(
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

function dlContentModel(
  ctx: Context,
  node: DOMNode<TagProps>,
): boolean {
  // Either: Zero or more groups each consisting of one or more dt elements followed by one or more dd elements, optionally intermixed with script-supporting elements.
  // Or: One or more div elements, optionally intermixed with script-supporting elements.

  let kind: "divs" | "dts" | "unknown" = "unknown";
  let endingOnDd = false;

  for (const child of node.children) {
    const tag = child.info.tag;

    // Always ignore script-supporting elements.
    if (["script", "template"].includes(tag)) {
      continue;
    }

    if (kind === "unknown") {
      if (tag === "div") {
        kind = "divs";
      } else if (tag === "dt") {
        kind = "dts";
      } else {
        logContentModelViolation(ctx, node, child);
        return false;
      }
    }

    if (kind === "divs") {
      if (tag !== "div") {
        logContentModelViolation(
          ctx,
          node,
          child,
          `When a ${ctx.fmtCode("dl")} tag has a ${
            ctx.fmtCode("div")
          } child tag, then all of its child tags must be ${
            ctx.fmtCode("div")
          }s.`,
        );
        return false;
      }
    } else if (kind === "dts") {
      if (tag === "dd") {
        endingOnDd = true;
      } else if (tag === "dt") {
        endingOnDd = false;
      } else {
        logContentModelViolation(ctx, node, child);
        return false;
      }
    }
  }

  if (kind === "dts") {
    if (endingOnDd) {
      return true;
    } else {
      warn(
        ctx,
        `When a ${ctx.fmtCode("dl")} tag has a ${
          ctx.fmtCode("dt")
        } child tag, then its final child tag must be a ${
          ctx.fmtCode("dd")
        } tag.`,
      );
      ctx.loggingGroup(() => {
        warn(
          ctx,
          `Outer ${ctx.fmtCode("dl")} tag at ${
            ctx.fmtDebuggingInformation(
              node.definedAt!,
            )
          }`,
        );
      });
      return false;
    }
  } else {
    return true;
  }
}

const dom = new DOMNodeInfo(
  "dl",
  dlContentModel,
);
