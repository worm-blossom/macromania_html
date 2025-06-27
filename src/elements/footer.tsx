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
 * The [footer element](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element) represents a footer for its nearest ancestor [sectioning content](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content-2) element, or for the [body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2) if there is no such ancestor. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.
 *
 * When the [footer element](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element) contains entire sections, they represent appendices, indices, long colophons, verbose license agreements, and other such content.
 */
export function Footer(
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
  "footer",
  new CmZeroOrMore(new CmCategory(CAT_FLOW_CONTENT)),
  "https://html.spec.whatwg.org/multipage/sections.html#the-footer-element",
);
