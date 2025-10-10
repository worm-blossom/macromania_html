import type { Children, LogLevel } from "macromania";
import { configurableLogging } from "./loggingUtils.tsx";

/**
 * Config data for the logging level for html verification.
 */
export type LoggingConfig = {
  /**
   * Set the logging level for all html verification. Defaults to `"warn"`.
   */
  "verify": LogLevel;
};

const {
  /**
   * The macro to configure the logging levels for reporting invalid html (e.g., nesting a `div` inside a `span`).
   */
  ConfigLogging,
  SetCurrentKeys,
  warn,
  info,
  Info,
  Warn,
  withOtherKeys,
  logEmptyLine,
} = configurableLogging<
  LoggingConfig
>(
  () => ({
    "verify": "warn",
  }),
  "ConfigHtmlLogging",
);

export const ConfigHtmlLogging = (
  { verify, children }: { verify: LogLevel; children: Children },
) => {
  return (
    <ConfigLogging logLevels={{ verify }}>
      <xs x={children} />
    </ConfigLogging>
  );
};

/**
 * For internal use.
 *
 * @internal
 */
export { Info, info, logEmptyLine, SetCurrentKeys, Warn, warn, withOtherKeys };
