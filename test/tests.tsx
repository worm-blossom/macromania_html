import {
  A,
  Abbr,
  Address,
  Article,
  Aside,
  B,
  Bdi,
  Bdo,
  Blockquote,
  Body,
  Br,
  Cite,
  Code,
  Data,
  Dd,
  Del,
  Dfn,
  Div,
  Dl,
  Dt,
  Em,
  Figcaption,
  Figure,
  Footer,
  H,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Head,
  Header,
  Hgroup,
  Hr,
  Html,
  I,
  Ins,
  Kbd,
  Li,
  Link,
  Main,
  Mark,
  Menu,
  Meta,
  Nav,
  Ol,
  P,
  Pre,
  Q,
  Rp,
  Rt,
  Ruby,
  S,
  Samp,
  Script,
  Search,
  Section,
  Small,
  Span,
  Strong,
  Style,
  Sub,
  Sup,
  Time,
  Title,
  U,
  Ul,
  Var,
  Wbr,
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

Deno.test("abbr", async () => {
  await testGlobalNonVoid(Abbr, "abbr")();
});

Deno.test("address", async () => {
  await testGlobalNonVoid(Address, "address")();
});

Deno.test("article", async () => {
  await testGlobalNonVoid(Article, "article")();
});

Deno.test("aside", async () => {
  await testGlobalNonVoid(Aside, "aside")();
});

Deno.test("b", async () => {
  await testGlobalNonVoid(B, "b")();
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

Deno.test("bdi", async () => {
  await testGlobalNonVoid(Bdi, "bdi")();
});

Deno.test("bdo", async () => {
  await testGlobalNonVoid(Bdo, "bdo")();
});

Deno.test("blockquote", async () => {
  await testGlobalNonVoid(Blockquote, "blockquote")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Blockquote cite="foo"></Blockquote>);
    assertEquals(got, `<blockquote cite="foo"></blockquote>`);
  })();
});

Deno.test("body", async () => {
  await testGlobalNonVoid(Body, "body")();
});

Deno.test("br", async () => {
  await testGlobalVoid(Br, "br")();
});

Deno.test("cite", async () => {
  await testGlobalNonVoid(Cite, "cite")();
});

Deno.test("code", async () => {
  await testGlobalNonVoid(Code, "code")();
});

Deno.test("data", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Data value="foo"></Data>);
    assertEquals(got, `<data value="foo"></data>`);
  })();
});

Deno.test("dd", async () => {
  await testGlobalNonVoid(Dd, "dd")();
});

Deno.test("del", async () => {
  await testGlobalNonVoid(Del, "del")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Del cite="foo"></Del>);
    assertEquals(got, `<del cite="foo"></del>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Del datetime="foo"></Del>);
    assertEquals(got, `<del datetime="foo"></del>`);
  })();
});

Deno.test("dfn", async () => {
  await testGlobalNonVoid(Dfn, "dfn")();
});

Deno.test("div", async () => {
  await testGlobalNonVoid(Div, "div")();
});

Deno.test("dl", async () => {
  await testGlobalNonVoid(Dl, "dl")();
});

Deno.test("dt", async () => {
  await testGlobalNonVoid(Dt, "dt")();
});

Deno.test("em", async () => {
  await testGlobalNonVoid(Em, "em")();
});

Deno.test("figcaption", async () => {
  await testGlobalNonVoid(Figcaption, "figcaption")();
});

Deno.test("figure", async () => {
  await testGlobalNonVoid(Figure, "figure")();
});

Deno.test("footer", async () => {
  await testGlobalNonVoid(Footer, "footer")();
});

Deno.test("h1", async () => {
  await testGlobalNonVoid(H1, "h1")();
});

Deno.test("h2", async () => {
  await testGlobalNonVoid(H2, "h2")();
});

Deno.test("h3", async () => {
  await testGlobalNonVoid(H3, "h3")();
});

Deno.test("h4", async () => {
  await testGlobalNonVoid(H4, "h4")();
});

Deno.test("h5", async () => {
  await testGlobalNonVoid(H5, "h5")();
});

Deno.test("h6", async () => {
  await testGlobalNonVoid(H6, "h6")();
});

Deno.test("head", async () => {
  await testGlobalNonVoid(Head, "head")();
});

Deno.test("header", async () => {
  await testGlobalNonVoid(Header, "header")();
});

Deno.test("hgroup", async () => {
  await testGlobalNonVoid(Hgroup, "hgroup")();
});

Deno.test("hr", async () => {
  await testGlobalVoid(Hr, "hr")();
});

Deno.test("html", async () => {
  await testGlobalNonVoid(Html, "html")();
});

Deno.test("i", async () => {
  await testGlobalNonVoid(I, "i")();
});

Deno.test("ins", async () => {
  await testGlobalNonVoid(Ins, "ins")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Ins cite="foo"></Ins>);
    assertEquals(got, `<ins cite="foo"></ins>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Ins datetime="foo"></Ins>);
    assertEquals(got, `<ins datetime="foo"></ins>`);
  })();
});

Deno.test("kbd", async () => {
  await testGlobalNonVoid(Kbd, "kbd")();
});

Deno.test("li", async () => {
  await testGlobalNonVoid(Li, "li")();
});

Deno.test("link", async () => {
  await testGlobalVoid(Link, "link")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link href="bla" />,
    );
    assertEquals(
      got,
      `<link href="bla" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link crossorigin="anonymous" />,
    );
    assertEquals(
      got,
      `<link crossorigin="anonymous" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link rel="alternate" />,
    );
    assertEquals(
      got,
      `<link rel="alternate" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link media="foo" />,
    );
    assertEquals(
      got,
      `<link media="foo" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link integrity="foo" />,
    );
    assertEquals(
      got,
      `<link integrity="foo" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link hreflang="foo" />,
    );
    assertEquals(
      got,
      `<link hreflang="foo" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link type="foo" />,
    );
    assertEquals(
      got,
      `<link type="foo" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link referrerpolicy="origin" />,
    );
    assertEquals(
      got,
      `<link referrerpolicy="origin" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link sizes="any" />,
    );
    assertEquals(
      got,
      `<link sizes="any" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link sizes={["any", "any"]} />,
    );
    assertEquals(
      got,
      `<link sizes="any any" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link sizes={{ width: 42, height: 17 }} />,
    );
    assertEquals(
      got,
      `<link sizes="42x17" />`,
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
      `<link sizes="42x17 1x2 any" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link imagesrcset="foo" />,
    );
    assertEquals(
      got,
      `<link imagesrcset="foo" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link imagesizes="foo" />,
    );
    assertEquals(
      got,
      `<link imagesizes="foo" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link as="audio" />,
    );
    assertEquals(got, `<link as="audio" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link blocking="render" />,
    );
    assertEquals(got, `<link blocking="render" />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link disabled />,
    );
    assertEquals(got, `<link disabled />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Link fetchpriority="low" />,
    );
    assertEquals(got, `<link fetchpriority="low" />`);
  })();
});

Deno.test("main", async () => {
  await testGlobalNonVoid(Main, "main")();
});

Deno.test("mark", async () => {
  await testGlobalNonVoid(Mark, "mark")();
});

Deno.test("menu", async () => {
  await testGlobalNonVoid(Menu, "menu")();
});

Deno.test("meta", async () => {
  await testGlobalVoid(Meta, "meta")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Meta name="author" />,
    );
    assertEquals(
      got,
      `<meta name="author" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Meta httpEquiv="refresh" />,
    );
    assertEquals(
      got,
      `<meta http-equiv="refresh" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Meta content="foo" />,
    );
    assertEquals(
      got,
      `<meta content="foo" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Meta charset="utf-8" />,
    );
    assertEquals(
      got,
      `<meta charset="utf-8" />`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Meta media="foo" />,
    );
    assertEquals(
      got,
      `<meta media="foo" />`,
    );
  })();
});

Deno.test("nav", async () => {
  await testGlobalNonVoid(Nav, "nav")();
});

Deno.test("ol", async () => {
  await testGlobalNonVoid(Ol, "ol")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Ol reversed></Ol>);
    assertEquals(got, `<ol reversed></ol>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Ol start={42}></Ol>);
    assertEquals(got, `<ol start="42"></ol>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Ol type="i"></Ol>);
    assertEquals(got, `<ol type="i"></ol>`);
  })();
});

Deno.test("p", async () => {
  await testGlobalNonVoid(P, "p")();
});

Deno.test("pre", async () => {
  await testGlobalNonVoid(Pre, "pre")();
});

Deno.test("q", async () => {
  await testGlobalNonVoid(Q, "q")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Q cite="foo"></Q>);
    assertEquals(got, `<q cite="foo"></q>`);
  })();
});

Deno.test("rp", async () => {
  await testGlobalNonVoid(Rp, "rp")();
});

Deno.test("rt", async () => {
  await testGlobalNonVoid(Rt, "rt")();
});

Deno.test("ruby", async () => {
  await testGlobalNonVoid(Ruby, "ruby")();
});

Deno.test("s", async () => {
  await testGlobalNonVoid(S, "s")();
});

Deno.test("samp", async () => {
  await testGlobalNonVoid(Samp, "samp")();
});

Deno.test("script", async () => {
  await testGlobalNonVoid(Script, "script")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script src="foo"></Script>);
    assertEquals(got, `<script src="foo"></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script type="module"></Script>);
    assertEquals(got, `<script type="module"></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script type={{ data: "foo" }}></Script>);
    assertEquals(got, `<script type="foo"></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script nomodule></Script>);
    assertEquals(got, `<script nomodule></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script async></Script>);
    assertEquals(got, `<script async></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script defer></Script>);
    assertEquals(got, `<script defer></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script crossorigin="anonymous"></Script>);
    assertEquals(got, `<script crossorigin="anonymous"></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script integrity="foo"></Script>);
    assertEquals(got, `<script integrity="foo"></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script referrerpolicy="origin"></Script>);
    assertEquals(got, `<script referrerpolicy="origin"></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script blocking="render"></Script>);
    assertEquals(got, `<script blocking="render"></script>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Script fetchpriority="high"></Script>);
    assertEquals(got, `<script fetchpriority="high"></script>`);
  })();
});

Deno.test("search", async () => {
  await testGlobalNonVoid(Search, "search")();
});

Deno.test("section", async () => {
  await testGlobalNonVoid(Section, "section")();
});

Deno.test("small", async () => {
  await testGlobalNonVoid(Small, "small")();
});

Deno.test("span", async () => {
  await testGlobalNonVoid(Span, "span")();
});

Deno.test("strong", async () => {
  await testGlobalNonVoid(Strong, "strong")();
});

Deno.test("style", async () => {
  await testGlobalNonVoid(Style, "style")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Style blocking="render" />,
    );
    assertEquals(
      got,
      `<style blocking="render"></style>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Style media="foo" />,
    );
    assertEquals(
      got,
      `<style media="foo"></style>`,
    );
  })();
});

Deno.test("sub", async () => {
  await testGlobalNonVoid(Sub, "sub")();
});

Deno.test("sup", async () => {
  await testGlobalNonVoid(Sup, "sup")();
});

Deno.test("time", async () => {
  await testGlobalNonVoid(Time, "time")();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Time datetime="foo"></Time>);
    assertEquals(got, `<time datetime="foo"></time>`);
  })();
});

Deno.test("title", async () => {
  await testGlobalNonVoid(Title, "title")();
});

Deno.test("u", async () => {
  await testGlobalNonVoid(U, "u")();
});

Deno.test("ul", async () => {
  await testGlobalNonVoid(Ul, "ul")();
});

Deno.test("var", async () => {
  await testGlobalNonVoid(Var, "var")();
});

Deno.test("wbr", async () => {
  await testGlobalVoid(Wbr, "wbr")();
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
