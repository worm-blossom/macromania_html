# Macromania HTML

Macros for [Macromania](https://github.com/worm-blossom/macromania) to generate
[html](https://en.wikipedia.org/wiki/HTML).

Offers the `<H>` macro for dynamically generated tags, and statically typed
macros (`<A>`, `<Abbr>`, etc...).

```tsx
<P>
  {/* The html `class` attribute is set with the `clazz` prop. */}
  This is a <Em clazz="info">helpful</Em> example.
</P>;

// And a custom tag (use this for tags
// which do not have a dedicated macro yet).
const ctx = new Context();
const got = await ctx.evaluate(
  <H name="foo" isVoid attrs={{ bar: "zzz" }} />,
);
assertEquals(got, `<foo bar="zzz" />`);
```

The statically typed API is based off the
[living standard](https://html.spec.whatwg.org/multipage/). Most tags have
macros, but the following are still missing:

- Some elements from section
  [`4.10 Forms`](https://html.spec.whatwg.org/multipage/forms.html#forms) of the
  living standard:
  - select
  - datalist
  - option
  - textarea
  - output
  - progress
  - meter
  - fieldset
  - legend

There are no statically typed macros for SVG and MathML.

Pull requests for any of these are welcome, but should imitate exactly how all
the other elements are implemented (including tests and doc comments in the same
style).
