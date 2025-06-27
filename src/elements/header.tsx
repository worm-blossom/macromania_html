import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FLOW_CONTENT,
  CmCategory,
  CmZeroOrMore,
  DOMNodeInfo,
  isCurrentlyInsideHeaderOrFooter,
  setCurrentlyInsideHeaderOrFooter,
} from "../contentModel.tsx";
import {
  info,
  logEmptyLine,
  type LoggingConfig,
  warn,
  withOtherKeys,
} from "../mod.tsx";

/**
 * The [header element](https://html.spec.whatwg.org/multipage/sections.html#the-header-element) represents a group of introductory or navigational aids.
 */
export function Header(
  props: TagProps & { children?: Children },
): Expression {
  let prev = false;
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      <effect
        fun={(ctx) => {
          if (isCurrentlyInsideHeaderOrFooter(ctx)) {
            withOtherKeys(ctx, [
              "verify",
              dom.tag as (keyof LoggingConfig),
              (`${dom.tag}ContentModel`) as (keyof LoggingConfig),
            ], () => {
              warn(
                ctx,
                `Failed content model verification for a ${
                  ctx.fmtCode(
                    dom.tag,
                  )
                } tag:`,
              );
              ctx.loggingGroup(() => {
                info(
                  ctx,
                  `must not nest a ${ctx.fmtCode(dom.tag)} tag inside another ${
                    ctx.fmtCode("header")
                  } or ${ctx.fmtCode("footer")} tag`,
                );
              });
              logEmptyLine(ctx, "warn");
            });
          }

          return (
            <lifecycle
              pre={(ctx) => {
                prev = isCurrentlyInsideHeaderOrFooter(ctx);
                setCurrentlyInsideHeaderOrFooter(ctx, true);
              }}
              post={(ctx) => {
                setCurrentlyInsideHeaderOrFooter(ctx, prev);
              }}
            >
              {props.children}
            </lifecycle>
          );
        }}
      />
    </BuildVerificationDOM>
  );
}

const dom = new DOMNodeInfo(
  "header",
  new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-header-element",
);
