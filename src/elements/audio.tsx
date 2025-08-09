import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import type { CrossOrigin, Preload } from "../shared.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

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
  props: AudioProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={new DOMNodeInfo(
        "audio",
        cmUnverified,
      )}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}
