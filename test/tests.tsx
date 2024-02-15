import {
  A,
  Abbr,
  Address,
  Area,
  Article,
  Aside,
  Audio,
  B,
  Base,
  Bdi,
  Bdo,
  Blockquote,
  Body,
  Br,
  Div,
  TagProps,
} from "../mod.tsx";
import { Context, Expression, Expressions, expressions } from "../deps.ts";
import { assertEquals } from "../devDeps.ts";

Deno.test("basic void tag", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Br />);
  assertEquals(got, `<br />`);
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

Deno.test("escaping", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Div id={`&<>"'`}>{`&<>"'`}</Div>);
  assertEquals(
    got,
    `<div id="&amp;&lt;&gt;&quot;&#39;">&amp;&lt;&gt;&quot;&#39;</div>`,
  );
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
    const got = await ctx.evaluate(<Br aria-haspopup />);
    assertEquals(got, `<br aria-haspopup />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br aria-haspopup={false} />);
    assertEquals(got, `<br />`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Br aria-haspopup="menu" />);
    assertEquals(got, `<br aria-haspopup="menu" />`);
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

Deno.test("inline expression props", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Br id={<impure fun={(_) => "A"} />} />);
  assertEquals(got, `<br id="A" />`);
});

Deno.test("number props", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Br aria-colcount={42} />);
  assertEquals(got, `<br aria-colcount="42" />`);
});

Deno.test("aria", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(
    <Br
      aria-activedescendant="f"
      aria-atomic
      aria-autocomplete="both"
      aria-braillelabel="f"
      aria-brailleroledescription="f"
      aria-busy
      aria-checked
      aria-colcount={1}
      aria-colindex={1}
      aria-colindextext="f"
      aria-colspan={1}
      aria-controls="f"
      aria-current
      aria-describedby="f"
      aria-description="f"
      aria-details="f"
      aria-disabled
      aria-dropeffect="move"
      aria-errormessage="f"
      aria-expanded
      aria-flowto="f"
      aria-grabbed
      aria-haspopup
      aria-hidden
      aria-invalid
      aria-keyshortcuts="f"
      aria-label="f"
      aria-labelledby="f"
      aria-level={1}
      aria-live="polite"
      aria-modal
      aria-multiline
      aria-multiselectable
      aria-orientation="horizontal"
      aria-owns="f"
      aria-placeholder="f"
      aria-posinset={1}
      aria-pressed
      aria-readonly
      aria-relevant="all"
      aria-required
      aria-roledescription="f"
      aria-rowcount={1}
      aria-rowindex={1}
      aria-rowindextext="g"
      aria-rowspan={2}
      aria-selected
      aria-setsize={1}
      aria-sort="other"
      aria-valuemax={1}
      aria-valuemin={1}
      aria-valuenow={1}
      aria-valuetext="f"
    />,
  );
  assertEquals(
    got,
    `<br aria-activedescendant="f" aria-atomic aria-autocomplete="both" aria-braillelabel="f" aria-brailleroledescription="f" aria-busy aria-checked aria-colcount="1" aria-colindex="1" aria-colindextext="f" aria-colspan="1" aria-controls="f" aria-current aria-describedby="f" aria-description="f" aria-details="f" aria-disabled aria-dropeffect="move" aria-errormessage="f" aria-expanded aria-flowto="f" aria-grabbed aria-haspopup aria-hidden aria-invalid aria-keyshortcuts="f" aria-label="f" aria-labelledby="f" aria-level="1" aria-live="polite" aria-modal aria-multiline aria-multiselectable aria-orientation="horizontal" aria-owns="f" aria-placeholder="f" aria-posinset="1" aria-pressed aria-readonly aria-relevant="all" aria-required aria-roledescription="f" aria-rowcount="1" aria-rowindex="1" aria-rowindextext="g" aria-rowspan="2" aria-selected aria-setsize="1" aria-sort="other" aria-valuemax="1" aria-valuemin="1" aria-valuenow="1" aria-valuetext="f" />`,
  );
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
      role="feed"
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
    `<br data-foo="42" data-bar-baz="&lt;br /&gt;" autocapitalize="sentences" autofocus class="a b" contenteditable dir="rtl" draggable="true" enterkeyhint="go" exportparts="f" hidden="hidden" id="f" inert inputmode="url" is="f" itemid="f" itemprop="g" itemref="f" itemscope itemtype="f" lang="f" nonce="f" part="f" popover="auto" role="feed" slot="f" spellcheck="true" style="f" tabindex="2" title="f" translate="yes" />`,
  );
});

Deno.test("a", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <A
        download=""
        href="bla"
        hreflang="en-gb"
        ping="a b"
        referrerpolicy="origin"
        rel="z"
        target="_self"
        type="txt"
      >
      </A>,
    );
    assertEquals(
      got,
      `<a download="" href="bla" hreflang="en-gb" ping="a b" referrerpolicy="origin" rel="z" target="_self" type="txt"></a>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<A download="n"></A>);
    assertEquals(got, `<a download="n"></a>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<A></A>);
    assertEquals(got, `<a></a>`);
  })();
});

Deno.test("abbr", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Abbr></Abbr>);
  assertEquals(got, `<abbr></abbr>`);
});

Deno.test("address", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Address></Address>);
  assertEquals(got, `<address></address>`);
});

Deno.test("area", async () => {
  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(
      <Area
        alt="f"
        coords="g"
        download=""
        href="bla"
        ping="a b"
        referrerpolicy="origin"
        rel="z"
        shape="default"
        target="_self"
      >
      </Area>,
    );
    assertEquals(
      got,
      `<area alt="f" coords="g" download="" href="bla" ping="a b" referrerpolicy="origin" rel="z" shape="default" target="_self"></area>`,
    );
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Area download="n"></Area>);
    assertEquals(got, `<area download="n"></area>`);
  })();

  await (async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<Area></Area>);
    assertEquals(got, `<area></area>`);
  })();
});

Deno.test("address", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Article></Article>);
  assertEquals(got, `<article></article>`);
});

Deno.test("aside", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Aside></Aside>);
  assertEquals(got, `<aside></aside>`);
});

Deno.test("area", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(
    <Audio
      autoplay
      controls
      controlslist="nodownload"
      crossorigin="anonymous"
      loop
      muted
      preload="none"
      src="f"
    >
    </Audio>,
  );
  assertEquals(
    got,
    `<audio autoplay controls controlslist="nodownload" crossorigin="anonymous" loop muted preload="none" src="f"></audio>`,
  );
});

Deno.test("b", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<B></B>);
  assertEquals(got, `<b></b>`);
});

Deno.test("base", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(
    <Base
      href="f"
      target="_blank"
    />,
  );
  assertEquals(
    got,
    `<base href="f" target="_blank" />`,
  );
});

Deno.test("bdi", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Bdi></Bdi>);
  assertEquals(got, `<bdi></bdi>`);
});

Deno.test("bdo", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Bdo></Bdo>);
  assertEquals(got, `<bdo></bdo>`);
});

Deno.test("blockquote", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(
    <Blockquote cite="f"></Blockquote>,
  );
  assertEquals(
    got,
    `<blockquote cite="f"></blockquote>`,
  );
});

Deno.test("body", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Body></Body>);
  assertEquals(got, `<body></body>`);
});

Deno.test("br", async () => {
  const ctx = new Context();
  const got = await ctx.evaluate(<Br />);
  assertEquals(got, `<br />`);
});
