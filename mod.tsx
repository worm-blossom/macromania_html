/**
 * # Macromania HTML
 *
 * Generate HTML with [Macromania](https://macromania.worm-blossom.org/). This package provides statically typed macros for the [elements of HTML](https://html.spec.whatwg.org/multipage/#toc-semantics).
 *
```ts
import { Context } from "@macromania/macromania";
import { P, Em } from "@macromania/macromania-html";

const ctx = new Context();
const someHtml = await ctx.evaluate(
    <P clazz="neat">
        This is a <Em>neat</Em> paragraph.{"<>"}
    </P>
);

// Logs `"<p class="neat">This is a <em>neat</em> paragraph&lt;&gt;</p>"`.
console.log(someHtml);
```

## Static Element Macros

The macro names for creating specific HTML elements are always Uppercase spellings of the HTML element in question. [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes) of the elements can be passed as props. Some attribute names are keywords in typescript, so the prop names occasionally deviate:

- `class` becomes `clazz`,
- `type` becomes `type_`,
- `for` becomes `for_`. and
- `data` becomes `data_` (because we use `data` as the prop for [data-* attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-*)).

See {@linkcode TagProps} for the type of all supported [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes).

To add [data-* attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-*) attributes, use the `data` prop:

```ts
const ctx = new Context();
const got = await ctx.evaluate(
    <Br
        data={{
            foo: "42",
            "bar-baz": "hi",
        }}
    />,
);
assertEquals(got, `<br data-foo="42" data-bar-baz="hi" />`);
```

You can add non-standard attributes via the `dynamicAttributes` prop:

```
const ctx = new Context();
const got = await ctx.evaluate(
    <Br dynamicAttributes={{ a: "y", b: "z" }} />,
);
assertEquals(got, `<br a="y" b="z" />`);
```

## HTML Validation

All static element macros validate the HTML they are tasked to produce. For example, nesting a {@linkcode Main | <Main>} macro inside a {@linkcode Section | <Section>} would log the following warning:

```
[info]     To configure the logging level for the following logged message, use the verify prop of the ConfigHtmlLogging macro.
[warn]     The only allowed ancestors for a main tag are html, body, div, or form tags.
[warn]       Offending main tag at Main in file:///C:/Users/mail/projects/macromania_html/test/tests.tsx:2186:7
[warn]       Offending ancestor blockquote tag at Blockquote in file:///C:/Users/mail/projects/macromania_html/test/tests.tsx:2185:5
```

The {@linkcode ConfigHtmlLogging} macro controls the logging of all invalid html inside its children:

```ts
// Does not log any output despite the invalid HTML.
<ConfigHtmlLogging verify="ignore">
  <Section>
    <Main>Hi!</Main>
  </Section>
</ConfigHtmlLogging>

// Not only increases the logging level to `"error"`,
// but also causes macro evaluation to halt immediately.
<ConfigHtmlLogging verify="error">
  <Section>
    <Main>Hi!</Main>
  </Section>
</ConfigHtmlLogging>;
```

Validation is best-effort, we do not even come close to full HTML validation yet. When in doubt, use a proper HTML validator on the output you generate.

When rendering fragments of HTML instead of full, self-contained documents, the HTML validation might complain about missing ancestor elements. Wrapping the fragment in the missing ancestors would add unwanted outer tags to the output. The `omitOuterHtml` prop can be set to `true` in such settings, letting you specify presence of ancestors to the validation logic without impacting the generated HTML.

```ts
const ctx = new Context();
const got = await ctx.evaluate(
<Div omitOuterHtml>
    <Span>foo</Span>
</Div>,
);
assertEquals(got, `<span>foo</span>`);
```

## Dynamic HTML

Sometimes you need to determine the element to output dynamically. The {@linkcode H | <H>} macro has you covered, you can even use it to generate tags which are not at all official HTML elements:

```ts
const ctx = new Context();
const got = await ctx.evaluate(
    <H name="foo" isVoid attrs={{ bar: "zzz" }} />,
);
assertEquals(got, `<foo bar="zzz" />`);
```

Note that the {@linkcode H | <H>} macro does not perform any HTML validation. It also does not contribute any information to the validation process. For example, nesting a `<main>` element inside a dynamically created `<section>` element will not log any warnings.

* @module
*/

export * from "./src/mod.tsx";
export { ConfigHtmlLogging } from "./src/loggingExports.tsx";
