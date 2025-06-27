import { Children, Expression } from "macromania";

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

/**
 * Escape all characters in the children that need escaping to be safe to use
 * in HTML: `< > & " '`
 */
export function EscapeHtml(
  { children }: { children?: Children },
): Expression {
  return (
    <map
      fun={(_ctx, evaled) => {
        return escapeHtmlString(evaled);
      }}
    >
      {children}
    </map>
  );
}

export function RenderAttribute(
  { attr, children }: { attr: string; children: Children },
): Expression {
  return (
    <>
      {" "}
      {attr}="{
        <EscapeHtml>
          {children}
        </EscapeHtml>
      }"
    </>
  );
}

export function RenderSpaceSeparatedList(
  { value }: { value: Expression[] | Expression },
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

  return <fragment x={actualExps} />;
}

export function RenderBoolean(
  { attr, value }: { attr: string; value: boolean },
): Expression {
  return value ? ` ${attr}` : "";
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

export function RenderExpression(
  { attr, value }: { attr: string; value: Expression },
): Expression {
  return (
    <RenderAttribute attr={attr}>
      {value}
    </RenderAttribute>
  );
}

export function RenderChildren(
  { attr, value }: { attr: string; value: Expression },
): Expression {
  return <RenderExpression attr={attr} value={value} />;
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
      {" />"}
    </>
  );
}

export function RenderNonVoidElement(
  { name, attrs, children }: {
    name: string;
    attrs: Expression;
    children?: Children;
  },
): Expression {
  return (
    <>
      {"<"}
      {name}
      {attrs}
      {">"}
      {children}
      {"</"}
      {name}
      {">"}
    </>
  );
}

export function RenderDynamicAttributes(
  { attrs }: { attrs?: DynamicAttributes },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  const exps: Expression[] = [];

  for (const key in attrs) {
    exps.push(" ");
    exps.push(key);
    exps.push(`="`);
    exps.push(
      <EscapeHtml>
        {attrs[key]}
      </EscapeHtml>,
    );
    exps.push(`"`);
  }

  return <>{exps}</>;
}

/**
 * Dynamically described html attributes.
 */
export type DynamicAttributes = Record<string, Expression>;

/**
 * Render a dynamically crafted HTML tag.
 */
export function H(
  { name, attrs, isVoid, children }: {
    name: Expression;
    attrs?: DynamicAttributes;
    isVoid?: boolean;
    children?: Children;
  },
): Expression {
  if (isVoid) {
    return (
      <>
        {"<"}
        {name}
        <RenderDynamicAttributes attrs={attrs} />
        {" />"}
      </>
    );
  } else {
    return (
      <>
        {"<"}
        {name}
        <RenderDynamicAttributes attrs={attrs} />
        {">"}
        {children}
        {"</"}
        {name}
        {">"}
      </>
    );
  }
}
