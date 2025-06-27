import type { Children, Context, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  type ContentModel,
  type DOMNode,
  DOMNodeInfo,
} from "../contentModel.tsx";
import { info } from "../mod.tsx";

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

const hgroupContentModel: ContentModel = {
  /**
   * Returns true iff the children are valid. Does not log anything.
   */
  checkChildren: (_ctx: Context, children: DOMNode<TagProps>[]) => {
    let foundHeading = false;

    for (const child of children) {
      const tag = child.info.tag;

      if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
        if (foundHeading) {
          return false;
        } else {
          foundHeading = true;
        }
      } else if (!["p", "script", "template"].includes(tag)) {
        return false;
      }
    }

    return foundHeading;
  },

  /**
   * Log with the `info` function a human-friendly description of what was expected (and optionally, where things went wrong).
   */
  expected: (ctx: Context, _children: DOMNode<TagProps>[]) => {
    info(
      ctx,
      `an ${ctx.fmtCode("h1")}, ${ctx.fmtCode("h2")}, ${ctx.fmtCode("h3")}, ${
        ctx.fmtCode("h4")
      }, ${ctx.fmtCode("h5")}, or ${
        ctx.fmtCode("h6")
      } tag, preceded and followed by any number of ${ctx.fmtCode("p")}, ${
        ctx.fmtCode("script")
      }, or ${ctx.fmtCode("template")} tags`,
    );
  },
};

const dom = new DOMNodeInfo(
  "hgroup",
  hgroupContentModel,
  "https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element",
);
