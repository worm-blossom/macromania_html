import { Expression, Children } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderNonVoidElement,
  RenderNumber,
  RenderVoidElement,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { CrossOrigin, FetchPriority } from "../shared.tsx";

/**
 * Props for the {@linkcode Object} macro.
 *
 * https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element
 */
export type ObjectProps = {
  /**
   * The [data attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-data) specifies the [URL](https://url.spec.whatwg.org/#concept-url) of the resource. It must be present, and must contain a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces).
   */
  data_?: Expression;
  /**
   * The [type attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-type), if present, specifies the type of the resource. If present, the attribute must be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type).
   */
  type_?: Expression;
  /**
   * The [name attribute](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-name), if present, must be a [valid navigable target name](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name). The given value is used to name the element's [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable), if applicable, and if present when the element's [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable) is [created](https://html.spec.whatwg.org/multipage/document-sequences.html#create-a-new-child-navigable).
   */
  name?: Expression;
  /**
   * The [form attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form) associates the element with a form element .
   */
  form?: Expression;
  /**
   * The [width attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width) specifies the horizontal dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  width?: number;
  /**
   * The [height attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height) specifies the vertical dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  height?: number;
} & TagProps;

/**
 * The [object element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element) can represent an external resource, which, depending on the type of the resource, will either be treated as an image or as a [child navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#child-navigable).
 */
export function Object(
  props: ObjectProps & { children?: Children },
): Expression {
  return (
    <RenderNonVoidElement
      name="object"
      attrs={<RenderObjectAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderObjectAttributes(
  { attrs }: { attrs?: ObjectProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.data_ !== undefined
        ? <RenderExpression attr="data" value={attrs.data_} />
        : ""}
      {attrs.type_ !== undefined
        ? <RenderExpression attr="type" value={attrs.type_} />
        : ""}
      {attrs.name !== undefined
        ? <RenderExpression attr="name" value={attrs.name} />
        : ""}
      {attrs.form !== undefined
        ? <RenderExpression attr="form" value={attrs.form} />
        : ""}
      {attrs.width !== undefined
        ? <RenderNumber attr="width" value={attrs.width} />
        : ""}
      {attrs.height !== undefined
        ? <RenderNumber attr="height" value={attrs.height} />
        : ""}
    </>
  );
}
