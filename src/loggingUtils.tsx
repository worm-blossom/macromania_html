// deno-lint-ignore-file no-explicit-any
import {
  type Children,
  Context,
  type Expression,
  type LogLevel,
  logMin,
} from "macromania";
import { RenderChildren } from "./renderUtils.tsx";

const joiner = "§ö@";

/**
 * For tracking which key sequences have already logged, so that configuration hints are emitted only once per key sequence.
 */
type GlobalState = {
  alreadyExplained: Set<string>;
};

const [getGlobalState, _] = Context.createState<GlobalState>(() => ({
  alreadyExplained: new Set<string>(),
}));

/**
 * Used for determining the maximum logging level for configured logging calls.
 */
type CurrentKeys<C extends Record<string, undefined | LogLevel | null>> =
  (keyof C)[];

export type ConfigurableLogging<
  C extends Record<string, undefined | LogLevel | null>,
> = {
  ConfigLogging(props: { children?: Children; logLevels: C }): Expression;
  SetCurrentKeys(
    props: { children?: Children; keys: CurrentKeys<C> },
  ): Expression;
  withOtherKeys(ctx: Context, keys: CurrentKeys<C>, thunk: () => void): void;
  logEmptyLine(vtx: Context, level: LogLevel): void;
  log(
    ctx: Context,
    level: LogLevel,
    ...message: any[]
  ): void;
  error(ctx: Context, ...message: any[]): void;
  warn(ctx: Context, ...message: any[]): void;
  info(ctx: Context, ...message: any[]): void;
  debug(ctx: Context, ...message: any[]): void;
  trace(ctx: Context, ...message: any[]): void;
  Log(
    props: { level: LogLevel; children?: Children },
  ): Expression;
  Error(props: { children?: Children }): Expression;
  Warn(props: { children?: Children }): Expression;
  Info(props: { children?: Children }): Expression;
  Debug(props: { children?: Children }): Expression;
  Trace(props: { children?: Children }): Expression;
};

export function configurableLogging<
  C extends Record<string, undefined | LogLevel | null>,
>(init: () => Required<C>, configMacroName: string): ConfigurableLogging<C> {
  const [NewKeyScope, getCurrentKeys, setCurrentKeys] = Context
    .createScopedState<
      CurrentKeys<C>
    >(() => []);

  const [ConfigureLogging, getConfig] = Context.createConfig<C>(init);

  function log(
    ctx: Context,
    level: LogLevel,
    ...message: any[]
  ): void {
    return doLog(false, ctx, level, ...message);
  }

  function doLog(
    internal: boolean,
    ctx: Context,
    level: LogLevel,
    ...message: any[]
  ): void {
    const keys = getCurrentKeys(ctx);

    if (keys.length === 0) {
      ctx.error(
        "A macro has mismanaged its logging level, no keys were specified to retrieve the logging level from the configuration. Please go yell (in a friendly way) at the author(s) responsible for the following macro (we sure hope that's the correct culprit, but the mistake might be in a dependency of theirs):",
      );
      ctx.loggingGroup(() => {
        ctx.currentError();
      });
      ctx.halt();
    }

    const globalState = getGlobalState(ctx);
    const joinedKeys = keys.join(joiner);

    if (!internal && !globalState.alreadyExplained.has(joinedKeys)) {
      let renderedProps = "";
      if (keys.length === 1) {
        renderedProps = ctx.fmtCode(`${String(keys[0])}`);
      } else {
        for (let i = 0; i < keys.length; i++) {
          renderedProps = `${renderedProps}${ctx.fmtCode(String(keys[i]))}`;

          if (i + 1 !== keys.length) {
            renderedProps = `${renderedProps}, `;
          }

          if (i + 2 === keys.length) {
            renderedProps = `${renderedProps}or `;
          }
        }
      }

      doLog(
        true, /* prevents infinite recursion */
        ctx,
        "info",
        `To configure the logging level for the following logged message, use the ${renderedProps} prop${
          keys.length === 1 ? "" : "s"
        } of the ${ctx.fmtCode(configMacroName)} macro.`,
      );
      globalState.alreadyExplained.add(joinedKeys);
    }

    const config = getConfig(ctx);

    let configuredLevel: null | LogLevel = null;
    for (const key of keys) {
      const levelForKey = config[key];
      if (levelForKey !== undefined && levelForKey !== null) {
        configuredLevel = levelForKey;
      }
    }

    if (configuredLevel === null) {
      ctx.error(
        "A macro has mismanaged its logging level, all keys were configured to return null instead of a proper logging level. Please go yell (in a friendly way) at the author(s) responsible for the following macro (we sure hope that's the correct culprit, but the mistake might be in a dependency of theirs):",
      );
      ctx.loggingGroup(() => {
        ctx.currentError();
        ctx.error(
          `Now logging the problematic message, at logging level ${
            ctx.fmtCode("info")
          }.`,
        );
      });
      configuredLevel = "info";
    }

    ctx.log(logMin(configuredLevel, level), ...message);
  }

  function logEmptyLine(
    ctx: Context,
    level: LogLevel,
  ): void {
    const keys = getCurrentKeys(ctx);

    if (keys.length === 0) {
      ctx.error(
        "A macro has mismanaged its logging level, no keys were specified to retrieve the logging level from the configuration. Please go yell (in a friendly way) at the author(s) responsible for the following macro (we sure hope that's the correct culprit, but the mistake might be in a dependency of theirs):",
      );
      ctx.loggingGroup(() => {
        ctx.currentError();
      });
      ctx.halt();
    }

    const globalState = getGlobalState(ctx);
    const joinedKeys = keys.join(joiner);

    const config = getConfig(ctx);

    let configuredLevel: null | LogLevel = null;
    for (const key of keys) {
      const levelForKey = config[key];
      if (levelForKey !== undefined && levelForKey !== null) {
        configuredLevel = levelForKey;
      }
    }

    if (configuredLevel === null) {
      ctx.error(
        "A macro has mismanaged its logging level, all keys were configured to return null instead of a proper logging level. Please go yell (in a friendly way) at the author(s) responsible for the following macro (we sure hope that's the correct culprit, but the mistake might be in a dependency of theirs):",
      );
      ctx.loggingGroup(() => {
        ctx.currentError();
      });
      configuredLevel = "info";
    }

    ctx.logEmptyLine(logMin(configuredLevel, level));
  }

  function Log(
    { level, children }: {
      level: LogLevel;
      children?: Children;
    },
  ): Expression {
    return (
      <map
        fun={(ctx, evaled) => {
          log(ctx, level, evaled);
          return "";
        }}
      >
        {children}
      </map>
    );
  }

  return {
    ConfigLogging: ConfigureLogging,
    SetCurrentKeys: (
      { children, keys }: { children?: Children; keys: CurrentKeys<C> },
    ) => {
      return (
        <NewKeyScope>
          <effect
            fun={(ctx) => {
              setCurrentKeys(ctx, keys);
              return <>{children}</>;
            }}
          />
        </NewKeyScope>
      );
    },
    withOtherKeys: (ctx: Context, keys: CurrentKeys<C>, thunk: () => void) => {
      const oldKeys = getCurrentKeys(ctx);
      setCurrentKeys(ctx, keys);
      thunk();
      setCurrentKeys(ctx, oldKeys);
    },
    log,
    logEmptyLine,
    error: (ctx: Context, ...message: any[]) => log(ctx, "error", ...message),
    warn: (ctx: Context, ...message: any[]) => log(ctx, "warn", ...message),
    info: (ctx: Context, ...message: any[]) => log(ctx, "info", ...message),
    debug: (ctx: Context, ...message: any[]) => log(ctx, "debug", ...message),
    trace: (ctx: Context, ...message: any[]) => log(ctx, "trace", ...message),
    Log,
    Error: (props: { children?: Children }) =>
      Log({ ...props, level: "error" }),
    Warn: (props: { children?: Children }) => Log({ ...props, level: "warn" }),
    Info: (props: { children?: Children }) => Log({ ...props, level: "info" }),
    Debug: (props: { children?: Children }) =>
      Log({ ...props, level: "debug" }),
    Trace: (props: { children?: Children }) =>
      Log({ ...props, level: "trace" }),
  };
}
