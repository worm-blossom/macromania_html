import {
  A,
  Br,
  Div,
  DynamicAttributes,
  H,
  Head,
  Html,
  Link,
  Title,
} from "../src/mod.tsx";
import { TagProps } from "../src/global.tsx";
import { Context, Expression, Expressions, expressions } from "../deps.ts";
import { assertEquals } from "../devDeps.ts";
import { Base } from "../src/mod.tsx";
import { EscapeHtml } from "../src/renderUtils.tsx";

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
});

Deno.test("escaping", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<EscapeHtml>{`&<>"'`}</EscapeHtml>);
  assertEquals(got, `&amp;&lt;&gt;&quot;&#39;`);
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
  await testGlobalNonVoid(A, "a")();

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

Deno.test("base", async () => {
  await testGlobalNonVoid(Base, "base")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Base
        href="bla"
        target="_self"
      >
      </Base>,
    );
    assertEquals(
      got,
      `<base href="bla" target="_self"></base>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Base target={{ name: "abc" }}></Base>);
    assertEquals(got, `<base target="abc"></base>`);
  })();
});

Deno.test("br", async () => {
  await testGlobalVoid(Br, "br")();
});

Deno.test("head", async () => {
  await testGlobalNonVoid(Div, "div")();
});

Deno.test("head", async () => {
  await testGlobalNonVoid(Head, "head")();
});

Deno.test("html", async () => {
  await testGlobalNonVoid(Html, "html")();
});

Deno.test("link", async () => {
  await testGlobalNonVoid(Link, "link")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link href="bla"></Link>,
    );
    assertEquals(
      got,
      `<link href="bla"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link crossorigin="anonymous"></Link>,
    );
    assertEquals(
      got,
      `<link crossorigin="anonymous"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link rel="alternate"></Link>,
    );
    assertEquals(
      got,
      `<link rel="alternate"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link media="foo"></Link>,
    );
    assertEquals(
      got,
      `<link media="foo"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link integrity="foo"></Link>,
    );
    assertEquals(
      got,
      `<link integrity="foo"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link hreflang="foo"></Link>,
    );
    assertEquals(
      got,
      `<link hreflang="foo"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link type="foo"></Link>,
    );
    assertEquals(
      got,
      `<link type="foo"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link referrerpolicy="origin"></Link>,
    );
    assertEquals(
      got,
      `<link referrerpolicy="origin"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link sizes="any"></Link>,
    );
    assertEquals(
      got,
      `<link sizes="any"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link sizes={["any", "any"]}></Link>,
    );
    assertEquals(
      got,
      `<link sizes="any any"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link sizes={{ width: 42, height: 17 }}></Link>,
    );
    assertEquals(
      got,
      `<link sizes="42x17"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link sizes={[{ width: 42, height: 17 }, { width: 1, height: 2 }, "any"]}>
      </Link>,
    );
    assertEquals(
      got,
      `<link sizes="42x17 1x2 any"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link imagesrcset="foo"></Link>,
    );
    assertEquals(
      got,
      `<link imagesrcset="foo"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link imagesizes="foo"></Link>,
    );
    assertEquals(
      got,
      `<link imagesizes="foo"></link>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link as="audio"></Link>,
    );
    assertEquals(got, `<link as="audio"></link>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link blocking="render"></Link>,
    );
    assertEquals(got, `<link blocking="render"></link>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link disabled></Link>,
    );
    assertEquals(got, `<link disabled></link>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link fetchpriority="low"></Link>,
    );
    assertEquals(got, `<link fetchpriority="low"></link>`);
  })();
});

Deno.test("title", async () => {
  await testGlobalNonVoid(Title, "title")();
});

function testGlobalNonVoid(
  Macro: (props: TagProps & { children?: Expressions }) => Expression,
  name: string,
) {
  return async () => {
    await (async () => {
      const ctx = new Context();
      const got = await ctx.evaluate(<Macro></Macro>);
      assertEquals(got, `<${name}></${name}>`);
    })();

    await (async () => {
      const ctx = new Context();
      const got = await ctx.evaluate(<Macro>uzuzu</Macro>);
      assertEquals(got, `<${name}>uzuzu</${name}>`);
    })();
  };
}

function testGlobalVoid(
  Macro: (props: TagProps & { children?: Expressions }) => Expression,
  name: string,
) {
  return async () => {
    await (async () => {
      const ctx = new Context();
      const got = await ctx.evaluate(<Macro />);
      assertEquals(got, `<${name} />`);
    })();
  };
}
