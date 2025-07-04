import { Children, Context, Expression } from "macromania";
import {
  RenderGlobalAttributes,
  renderGlobalAttributes,
  TagProps,
} from "../global.tsx";
import { RenderNonVoidElement } from "../renderUtils.tsx";
import {
  BuildVerificationDOM,
  ContentModel,
  DOMNode,
  DOMNodeInfo,
} from "../contentModel.tsx";
import { info } from "../mod.tsx";

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

const dlContentModel: ContentModel = {
  /**
   * Returns true iff the children are valid. Does not log anything.
   */
  checkChildren: (_ctx: Context, children: DOMNode<TagProps>[]) => {
    // Either: Zero or more groups each consisting of one or more dt elements followed by one or more dd elements, optionally intermixed with script-supporting elements.
    // Or: One or more div elements, optionally intermixed with script-supporting elements.

    let kind: "divs" | "dts" | "unknown" = "unknown";
    let endingOnDd = false;

    for (const child of children) {
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
          return false;
        }
      }

      if (kind === "divs") {
        if (tag !== "div") {
          return false;
        }
      } else if (kind === "dts") {
        if (tag === "dd") {
          endingOnDd = true;
        } else if (tag === "dt") {
          endingOnDd = false;
        } else {
          return false;
        }
      }
    }

    if (kind === "dts") {
      return endingOnDd;
    } else {
      return true;
    }
  },

  /**
   * Log with the `info` function a human-friendly description of what was expected (and optionally, where things went wrong).
   */
  expected: (ctx: Context, _children: DOMNode<TagProps>[]) => {
    info(
      ctx,
      `either one or more ${
        ctx.fmtCode("div")
      } elements, or zero or more groups of each one or more ${
        ctx.fmtCode("dt")
      } elements followed by one or more ${
        ctx.fmtCode("dd")
      } dd elements, either option with any number of ${
        ctx.fmtCode("script")
      } or ${ctx.fmtCode("template")} tags anywhere`,
    );
  },
};

const dom = new DOMNodeInfo(
  "dl",
  dlContentModel,
  "https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element",
);
