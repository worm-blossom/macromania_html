import { Br, Div } from "./mod.tsx";
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
