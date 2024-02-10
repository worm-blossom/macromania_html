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
} from "./mod.tsx";
import { Context, Expression, Expressions, expressions } from "./deps.ts";
import { assertEquals } from "./devDeps.ts";

Deno.test("basic void tag", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Br />);
  assertEquals(got, `<br />`);
});

Deno.test("basic non-void tag", () => {
  const ctx1 = new Context();
  const got1 = ctx1.evaluate(<Div></Div>);
  assertEquals(got1, `<div></div>`);

  const ctx2 = new Context();
  const got2 = ctx2.evaluate(<Div>foo</Div>);
  assertEquals(got2, `<div>foo</div>`);

  const ctx3 = new Context();
  const got3 = ctx3.evaluate(<Div>foo{"bar"}</Div>);
  assertEquals(got3, `<div>foobar</div>`);
});

Deno.test("escaping", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Div accesskey={`&<>"'`}>{`&<>"'`}</Div>);
  assertEquals(
    got,
    `<div accesskey="&amp;&lt;&gt;&quot;&#39;">&amp;&lt;&gt;&quot;&#39;</div>`,
  );
});

Deno.test("boolean attribute rendering", () => {
  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Br inert />);
    assertEquals(got, `<br inert />`);
  })();

  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Br inert={false} />);
    assertEquals(got, `<br />`);
  })();
});

Deno.test("boolean-or-enum attribute rendering", () => {
  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Br aria-haspopup />);
    assertEquals(got, `<br aria-haspopup />`);
  })();

  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Br aria-haspopup={false} />);
    assertEquals(got, `<br />`);
  })();

  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Br aria-haspopup="menu" />);
    assertEquals(got, `<br aria-haspopup="menu" />`);
  })();
});

Deno.test("not boolean but true-false-enum rendering", () => {
  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Br draggable />);
    assertEquals(got, `<br draggable="true" />`);
  })();

  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Br draggable={false} />);
    assertEquals(got, `<br draggable="false" />`);
  })();
});

Deno.test("expression props", () => {
  function A() {
    return <impure fun={(_) => "A"} />;
  }
  const ctx = new Context();
  const got = ctx.evaluate(<Br accesskey={<A />} />);
  assertEquals(got, `<br accesskey="A" />`);
});

Deno.test("inline expression props", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Br accesskey={<impure fun={(_) => "A"} />} />);
  assertEquals(got, `<br accesskey="A" />`);
});

Deno.test("number props", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Br aria-colcount={42} />);
  assertEquals(got, `<br aria-colcount="42" />`);
});

Deno.test("aria", () => {
  const ctx = new Context();
  const got = ctx.evaluate(
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

Deno.test("global attributes", () => {
  const ctx = new Context();
  const got = ctx.evaluate(
    <Br
      accesskey="f"
      autocapitalize="on"
      autofocus
      clazz="a b"
      contenteditable
      data={{
        foo: "42",
        "bar-baz": <Br />,
      }}
      dir="rtl"
      draggable
      enterkeyhint="go"
      exportparts="f"
      hidden="hidden"
      id="f"
      inert
      inputmode="url"
      is="f"
      itemid="f"
      itemprop="g"
      itemref="f"
      itemscope
      itemtype="f"
      lang="f"
      nonce="f"
      part="f"
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
    `<br class="a b" data-foo="42" data-bar-baz="&lt;br /&gt;" accesskey="f" autocapitalize="on" autofocus contenteditable dir="rtl" draggable="true" enterkeyhint="go" exportparts="f" hidden="hidden" id="f" inert inputmode="url" is="f" itemid="f" itemprop="g" itemref="f" itemscope itemtype="f" lang="f" nonce="f" part="f" popover="auto" role="feed" slot="f" spellcheck="true" style="f" tabindex="2" title="f" translate="yes" />`,
  );
});

Deno.test("a", () => {
  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(
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

  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<A download="n"></A>);
    assertEquals(got, `<a download="n"></a>`);
  })();

  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<A></A>);
    assertEquals(got, `<a></a>`);
  })();
});

Deno.test("abbr", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Abbr></Abbr>);
  assertEquals(got, `<abbr></abbr>`);
});

Deno.test("address", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Address></Address>);
  assertEquals(got, `<address></address>`);
});

Deno.test("area", () => {
  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(
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

  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Area download="n"></Area>);
    assertEquals(got, `<area download="n"></area>`);
  })();

  (() => {
    const ctx = new Context();
    const got = ctx.evaluate(<Area></Area>);
    assertEquals(got, `<area></area>`);
  })();
});

Deno.test("address", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Article></Article>);
  assertEquals(got, `<article></article>`);
});

Deno.test("aside", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Aside></Aside>);
  assertEquals(got, `<aside></aside>`);
});

Deno.test("area", () => {
  const ctx = new Context();
  const got = ctx.evaluate(
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

Deno.test("b", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<B></B>);
  assertEquals(got, `<b></b>`);
});

Deno.test("base", () => {
  const ctx = new Context();
  const got = ctx.evaluate(
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

Deno.test("bdi", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Bdi></Bdi>);
  assertEquals(got, `<bdi></bdi>`);
});

Deno.test("bdo", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Bdo></Bdo>);
  assertEquals(got, `<bdo></bdo>`);
});

Deno.test("blockquote", () => {
  const ctx = new Context();
  const got = ctx.evaluate(
    <Blockquote cite="f"></Blockquote>,
  );
  assertEquals(
    got,
    `<blockquote cite="f"></blockquote>`,
  );
});

Deno.test("body", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Body></Body>);
  assertEquals(got, `<body></body>`);
});

Deno.test("br", () => {
  const ctx = new Context();
  const got = ctx.evaluate(<Br />);
  assertEquals(got, `<br />`);
});
