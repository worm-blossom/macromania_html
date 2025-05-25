import { Expression, Expressions } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderNonVoidElement,
  RenderNumber,
  RenderVoidElement,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";

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
  action?: Expressions;
  autocomplete?: "on" | "off";
  enctype?: FormEnctype;
  method?: FormMethod;
  name?: Expressions;
  novalidate?: boolean;
  target?: Expressions;
  rel?: FormRel;
} & TagProps;

/**
 * The [form element](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) represents a [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) that can be manipulated through a collection of [form-associated elements](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element), some of which can represent editable values that can be submitted to a server for processing.
 */
export function Form(
  props: FormProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="form"
      attrs={<RenderFormAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderFormAttributes(
  { attrs }: { attrs?: FormProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.acceptCharset !== undefined
        ? <RenderEnum attr="accept-charset" value={attrs.acceptCharset} />
        : ""}
      {attrs.action !== undefined
        ? <RenderExpression attr="action" value={<exps x={attrs.action} />} />
        : ""}
      {attrs.autocomplete !== undefined
        ? <RenderEnum attr="autocomplete" value={attrs.autocomplete} />
        : ""}
      {attrs.enctype !== undefined
        ? <RenderEnum attr="enctype" value={attrs.enctype} />
        : ""}
      {attrs.method !== undefined
        ? <RenderEnum attr="method" value={attrs.method} />
        : ""}
      {attrs.name !== undefined
        ? <RenderExpression attr="name" value={<exps x={attrs.name} />} />
        : ""}
      {attrs.novalidate !== undefined
        ? <RenderBoolean attr="novalidate" value={attrs.novalidate} />
        : ""}
      {attrs.target !== undefined
        ? <RenderExpression attr="target" value={<exps x={attrs.target} />} />
        : ""}
      {attrs.rel !== undefined
        ? <RenderEnum attr="rel" value={attrs.rel} />
        : ""}
    </>
  );
}
