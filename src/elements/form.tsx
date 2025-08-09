import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import {
  BuildVerificationDOM,
  CAT_FORM,
  cmAllFlow,
  cmAnd,
  cmNoDescendant,
  DOMNodeInfo,
} from "../contentModel.tsx";

export type FormRel =
  | "external"
  | "license"
  | "next"
  | "nofollow"
  | "noopener"
  | "noreferrer"
  | "opener"
  | "prev"
  | "search";

export type FormEnctype =
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/plain";

export type FormMethod = "get" | "post" | "dialog";

/**
 * Props for the {@linkcode Form} macro.
 *
 * https://html.spec.whatwg.org/multipage/forms.html#the-form-element
 */
export type FormProps = {
  acceptCharset?: "UTF-8";
  action?: Expression;
  autocomplete?: "on" | "off";
  enctype?: FormEnctype;
  method?: FormMethod;
  name?: Expression;
  novalidate?: boolean;
  target?: Expression;
  rel?: FormRel | FormRel[];
} & TagProps;

/**
 * The [form element](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) represents a [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) that can be manipulated through a collection of [form-associated elements](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element), some of which can represent editable values that can be submitted to a server for processing.
 */
export function Form(
  props: FormProps & { children?: Children },
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
  "form",
  cmAnd([cmAllFlow, cmNoDescendant(CAT_FORM)]),
);
