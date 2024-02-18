import { A, Br, Div, DynamicAttributes, H } from "../src/mod.tsx";
import { Context, Expression, Expressions, expressions } from "../deps.ts";
import { assertEquals } from "../devDeps.ts";

Deno.test("basic dynamic tags", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<H name="foo" isVoid />);
    assertEquals(got, `<foo />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<H name="foo" />);
    assertEquals(got, `<foo></foo>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<H name="foo">a</H>);
    assertEquals(got, `<foo>a</foo>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<H name="foo">a{"b"}c</H>);
    assertEquals(got, `<foo>abc</foo>`);
  })();
});

Deno.test("dynamic tags with dynamic attributes", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<H name="foo" isVoid attrs={{}} />);
    assertEquals(got, `<foo />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <H name="foo" isVoid attrs={{ bar: "zzz" }} />,
    );
    assertEquals(got, `<foo bar="zzz" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <H name="foo" isVoid attrs={{ bar: "zzz", baz: "yyy" }} />,
    );
    assertEquals(got, `<foo bar="zzz" baz="yyy" />`);
  })();
});

Deno.test("dynamic tags escaping", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <H name="foo" isVoid attrs={{ bar: `&<>"'` }} />,
    );
    assertEquals(got, `<foo bar="&amp;&lt;&gt;&quot;&#39;" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<H name="foo">{`&<>"'`}</H>);
    assertEquals(got, `<foo>&amp;&lt;&gt;&quot;&#39;</foo>`);
  })();
});

Deno.test("basic void tag", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Br />);
  assertEquals(got, `<br />`);
});

Deno.test("static tag with dynamic attributes", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br dynamicAttributes={{}} />);
    assertEquals(got, `<br />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Br dynamicAttributes={{ a: "y", b: "z" }} />,
    );
    assertEquals(got, `<br a="y" b="z" />`);
  })();
});

Deno.test("basic non-void tag", async () => {
  const ctx1 = new Context();
  const got1 = await ctx1.evaluate(<Div></Div>);
  assertEquals(got1, `<div></div>`);

  const ctx2 = new Context();
  const got2 = await ctx2.evaluate(<Div>foo</Div>);
  assertEquals(got2, `<div>foo</div>`);

  const ctx3 = new Context();
  const got3 = await ctx3.evaluate(<Div>foo{"bar"}</Div>);
  assertEquals(got3, `<div>foobar</div>`);
});

Deno.test("boolean attribute rendering", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br inert />);
    assertEquals(got, `<br inert />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br inert={false} />);
    assertEquals(got, `<br />`);
  })();
});

Deno.test("boolean-or-enum attribute rendering", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br contenteditable />);
    assertEquals(got, `<br contenteditable />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br contenteditable={false} />);
    assertEquals(got, `<br />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br contenteditable="plaintext-only" />);
    assertEquals(got, `<br contenteditable="plaintext-only" />`);
  })();
});

Deno.test("not boolean but true-false-enum rendering", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br draggable />);
    assertEquals(got, `<br draggable="true" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br draggable={false} />);
    assertEquals(got, `<br draggable="false" />`);
  })();
});

Deno.test("expression props", async () => {
  function A() {
    return <impure fun={(_) => "A"} />;
  }
  const ctx = new Context();
  const got = await ctx.evaluate(<Br id={<A />} />);
  assertEquals(got, `<br id="A" />`);
});

Deno.test("space-separated expression props", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br clazz={[]} />);
    assertEquals(got, `<br class="" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br clazz={["a"]} />);
    assertEquals(got, `<br class="a" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br clazz={["a b"]} />);
    assertEquals(got, `<br class="a b" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br clazz={["a", "b"]} />);
    assertEquals(got, `<br class="a b" />`);
  })();
});

Deno.test("inline expression props", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Br id={<impure fun={(_) => "A"} />} />);
  assertEquals(got, `<br id="A" />`);
});

Deno.test("number props", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Br tabindex={42} />);
  assertEquals(got, `<br tabindex="42" />`);
});

Deno.test("global attributes", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(
    <Br
      autocapitalize="sentences"
      autofocus
      clazz={["a", "b"]}
      contenteditable
      data={{
        foo: "42",
        "bar-baz": <Br />,
      }}
      dir="rtl"
      draggable
      enterkeyhint="go"
      exportparts={["f"]}
      hidden="hidden"
      id="f"
      inert
      inputmode="url"
      is="f"
      itemid="f"
      itemprop={["g"]}
      itemref={["f"]}
      itemscope
      itemtype={["f"]}
      lang="f"
      nonce="f"
      part={["f"]}
      popover="auto"
      slot="f"
      spellcheck
      style="f"
      tabindex={2}
      title="f"
      translate
    />,
  );
  assertEquals(
    got,
    `<br autocapitalize="sentences" autofocus class="a b" contenteditable data-foo="42" data-bar-baz="&lt;br /&gt;" dir="rtl" draggable="true" enterkeyhint="go" exportparts="f" hidden="hidden" id="f" inert inputmode="url" is="f" itemid="f" itemprop="g" itemref="f" itemscope itemtype="f" lang="f" nonce="f" part="f" popover="auto" slot="f" spellcheck="true" style="f" tabindex="2" title="f" translate="yes" />`,
  );
});

Deno.test("exportparts attribute", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br exportparts={[]} />);
    assertEquals(got, `<br exportparts="" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br exportparts={["a"]} />);
    assertEquals(got, `<br exportparts="a" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br exportparts={[["a", "b"]]} />);
    assertEquals(got, `<br exportparts="a: b" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br exportparts={["a", "c"]} />);
    assertEquals(got, `<br exportparts="a, c" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br exportparts={[["a", "b"], "c"]} />);
    assertEquals(got, `<br exportparts="a: b, c" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br exportparts={["a", ["c", "d"]]} />);
    assertEquals(got, `<br exportparts="a, c: d" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Br exportparts={[["a", "b"], ["c", "d"]]} />,
    );
    assertEquals(got, `<br exportparts="a: b, c: d" />`);
  })();
});

Deno.test("a", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <A
        download=""
        href="bla"
        hreflang="en-gb"
        ping="a"
        referrerpolicy="origin"
        rel="prev"
        target="_self"
        type="txt"
      >
      </A>,
    );
    assertEquals(
      got,
      `<a download="" href="bla" ping="a" referrerpolicy="origin" rel="prev" target="_self" hreflang="en-gb" type="txt"></a>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<A download="n"></A>);
    assertEquals(got, `<a download="n"></a>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<A target={{ name: "abc" }}></A>);
    assertEquals(got, `<a target="abc"></a>`);
  })();
});

// Deno.test("abbr", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<Abbr></Abbr>);
//   assertEquals(got, `<abbr></abbr>`);
// });

// Deno.test("address", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<Address></Address>);
//   assertEquals(got, `<address></address>`);
// });

// Deno.test("area", async () => {
//   await (async () => {
//     const ctx = new Context();
//     const got = await ctx.evaluate(
//       <Area
//         alt="f"
//         coords="g"
//         download=""
//         href="bla"
//         ping="a b"
//         referrerpolicy="origin"
//         rel="z"
//         shape="default"
//         target="_self"
//       >
//       </Area>,
//     );
//     assertEquals(
//       got,
//       `<area alt="f" coords="g" download="" href="bla" ping="a b" referrerpolicy="origin" rel="z" shape="default" target="_self"></area>`,
//     );
//   })();

//   await (async () => {
//     const ctx = new Context();
//     const got = await ctx.evaluate(<Area download="n"></Area>);
//     assertEquals(got, `<area download="n"></area>`);
//   })();

//   await (async () => {
//     const ctx = new Context();
//     const got = await ctx.evaluate(<Area></Area>);
//     assertEquals(got, `<area></area>`);
//   })();
// });

// Deno.test("address", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<Article></Article>);
//   assertEquals(got, `<article></article>`);
// });

// Deno.test("aside", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<Aside></Aside>);
//   assertEquals(got, `<aside></aside>`);
// });

// Deno.test("area", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(
//     <Audio
//       autoplay
//       controls
//       controlslist="nodownload"
//       crossorigin="anonymous"
//       loop
//       muted
//       preload="none"
//       src="f"
//     >
//     </Audio>,
//   );
//   assertEquals(
//     got,
//     `<audio autoplay controls controlslist="nodownload" crossorigin="anonymous" loop muted preload="none" src="f"></audio>`,
//   );
// });

// Deno.test("b", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<B></B>);
//   assertEquals(got, `<b></b>`);
// });

// Deno.test("base", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(
//     <Base
//       href="f"
//       target="_blank"
//     />,
//   );
//   assertEquals(
//     got,
//     `<base href="f" target="_blank" />`,
//   );
// });

// Deno.test("bdi", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<Bdi></Bdi>);
//   assertEquals(got, `<bdi></bdi>`);
// });

// Deno.test("bdo", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<Bdo></Bdo>);
//   assertEquals(got, `<bdo></bdo>`);
// });

// Deno.test("blockquote", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(
//     <Blockquote cite="f"></Blockquote>,
//   );
//   assertEquals(
//     got,
//     `<blockquote cite="f"></blockquote>`,
//   );
// });

// Deno.test("body", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<Body></Body>);
//   assertEquals(got, `<body></body>`);
// });

// Deno.test("br", async () => {
//   const ctx = new Context();
//   const got = await ctx.evaluate(<Br />);
//   assertEquals(got, `<br />`);
// });
