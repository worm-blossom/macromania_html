import { Expression, Expressions } from "macromania";
import {
  RenderBoolean,
  RenderEnum,
  RenderExpression,
  RenderNonVoidElement,
  RenderNumber,
  RenderVoidElement,
} from "../renderUtils.tsx";
import { RenderGlobalAttributes, TagProps } from "../global.tsx";
import { CrossOrigin, FetchPriority, Preload } from "../shared.tsx";

/**
 * Props for the {@linkcode Audio} macro.
 *
 * https://html.spec.whatwg.org/multipage/media.html#the-audio-element
 */
export type AudioProps = {
  /**
   * The [src content attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-src) on [media elements](https://html.spec.whatwg.org/multipage/media.html#media-element) gives the [URL](https://url.spec.whatwg.org/#concept-url) of the media resource (video, audio) to show. The attribute, if present, must contain a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces).
   */
  src?: Expression;
  /**
   * The [crossorigin content attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-crossorigin) on [media elements](https://html.spec.whatwg.org/multipage/media.html#media-element) is a [CORS settings attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute).
   */
  crossorigin?: CrossOrigin;
  /**
   * The [preload attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-preload) hints how much buffering the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) will likely need.
   */
  preload?: Preload;
  /**
   * The [autoplay attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-autoplay) hint that the media resource can be started automatically when the page is loaded.
   */
  autoplay?: boolean;
  /**
   * The [loop attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-loop), if specified, indicates that the [media element](https://html.spec.whatwg.org/multipage/media.html#media-element) is to seek back to the start of the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) upon reaching the end.
   */
  loop?: boolean;
  /**
   * The [muted content attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-muted) on [media elements](https://html.spec.whatwg.org/multipage/media.html#media-element) controls the default state of the audio output of the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource), potentially overriding user preferences.
   */
  muted?: boolean;
  /**
   * The [controls attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-controls), if present, indicates that the author has not provided a scripted controller and would like the user agent to provide its own set of controls.
   */
  controls?: boolean;
} & TagProps;

/**
 * An [audio element](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) represents a sound or audio stream.
 */
export function Audio(
  props: AudioProps & { children?: Expressions },
): Expression {
  return (
    <RenderNonVoidElement
      name="audio"
      attrs={<RenderAudioAttributes attrs={props} />}
      children={props.children}
    />
  );
}

function RenderAudioAttributes(
  { attrs }: { attrs?: AudioProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.src !== undefined
        ? <RenderExpression attr="src" value={<exps x={attrs.src} />} />
        : ""}
      {attrs.crossorigin !== undefined
        ? <RenderEnum attr="crossorigin" value={attrs.crossorigin} />
        : ""}
      {attrs.preload !== undefined
        ? <RenderEnum attr="preload" value={attrs.preload} />
        : ""}
      {attrs.autoplay !== undefined
        ? <RenderBoolean attr="autoplay" value={attrs.autoplay} />
        : ""}
      {attrs.loop !== undefined
        ? <RenderBoolean attr="loop" value={attrs.loop} />
        : ""}
      {attrs.muted !== undefined
        ? <RenderBoolean attr="muted" value={attrs.muted} />
        : ""}
      {attrs.controls !== undefined
        ? <RenderBoolean attr="controls" value={attrs.controls} />
        : ""}
    </>
  );
}
