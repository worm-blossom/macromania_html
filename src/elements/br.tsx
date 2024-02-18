import { Expression } from "../../deps.ts";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { RenderVoidElement } from "../renderUtils.tsx";

export function Br(
  attrs: TagProps
): Expression {
  return (
    <RenderVoidElement
      name="br"
      attrs={<RenderGlobalAttributes attrs={attrs} />}
    />
  );
}
