import { Expression, Expressions, expressions } from "../deps.ts";

function escapeHtmlString(raw: string): string {
  return raw.replaceAll(/&|<|>|"|'/g, (match) => {
    if (match === `&`) {
      return `&amp;`;
    } else if (match === `<`) {
      return `&lt;`;
    } else if (match === `>`) {
      return `&gt;`;
    } else if (match === `"`) {
      return `&quot;`;
    } else if (match === `'`) {
      return `&#39;`;
    } else {
      throw new Error("unreachable");
    }
  });
}

export function EscapeHtml(
  { children }: { children?: Expressions },
): Expression {
  return (
    <map
      fun={(evaled, _ctx) => {
        return escapeHtmlString(evaled);
      }}
    >
      {expressions(children)}
    </map>
  );
}

export function RenderAttribute(
  { attr, children }: { attr: string; children: Expressions },
): Expression {
  return (
    <>
      {" "}
      {attr}="{
        <EscapeHtml>
          <fragment exps={expressions(children)} />
        </EscapeHtml>
      }"
    </>
  );
}

export function RenderSpaceSeparatedList(
  { attr, value }: { attr: string; value: Expression[] | Expression },
): Expression {
  const actualExps: Expression[] = [];

  if (Array.isArray(value)) {
    let first = true;
    for (const exp of value) {
      if (!first) {
        actualExps.push(" ");
      }

      actualExps.push(exp);

      first = false;
    }
  } else {
    actualExps.push(value);
  }

  return (
    <RenderAttribute attr={attr}>
      <fragment exps={actualExps} />
    </RenderAttribute>
  );
}

export function RenderBoolean(
  { attr, value }: { attr: string; value: boolean },
): Expression {
  return <>{" "}{value ? attr : ""}</>;
}

export function RenderNumber(
  { attr, value }: { attr: string; value: number },
): Expression {
  return (
    <RenderAttribute attr={attr}>
      {`${value}`}
    </RenderAttribute>
  );
}

export function RenderEnum(
  { attr, value }: { attr: string; value: string },
): Expression {
  return (
    <RenderAttribute attr={attr}>
      {value}
    </RenderAttribute>
  );
}

export function RenderBooleanOrEnum(
  { attr, value }: { attr: string; value: boolean | string },
): Expression {
  if (typeof value === "boolean") {
    return <RenderBoolean attr={attr} value={value} />;
  } else {
    return <RenderEnum attr={attr} value={value} />;
  }
}

export function RenderYesNo(
  { attr, value }: { attr: string; value: boolean },
): Expression {
  return <RenderEnum attr={attr} value={value ? "yes" : "no"} />;
}

export function RenderTrueFalse(
  { attr, value }: { attr: string; value: boolean },
): Expression {
  return <RenderEnum attr={attr} value={value ? "true" : "false"} />;
}

export function RenderExpression(
  { attr, value }: { attr: string; value: Expression },
): Expression {
  return (
    <RenderAttribute attr={attr}>
      {value}
    </RenderAttribute>
  );
}

// "void element" is the official name for "self-closing tags".
export function RenderVoidElement(
  { name, attrs }: { name: string; attrs: Expression },
): Expression {
  return (
    <>
      {"<"}
      {name}
      {attrs}
      {"/>"}
    </>
  );
}

export function RenderNonVoidElement(
  { name, attrs, children }: {
    name: string;
    attrs: Expression;
    children: Expressions;
  },
): Expression {
  return (
    <>
      {"<"}
      {name}
      {attrs}
      {">"}
      <EscapeHtml>{expressions(children)}</EscapeHtml>
      {"</"}
      {name}
      {">"}
    </>
  );
}
