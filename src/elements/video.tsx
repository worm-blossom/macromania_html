import type { Children, Expression } from "macromania";
import { renderGlobalAttributes, type TagProps } from "../global.tsx";
import type { CrossOrigin, Preload } from "../shared.tsx";
import {
  BuildVerificationDOM,
  cmUnverified,
  DOMNodeInfo,
} from "../contentModel.tsx";

/**
 * Props for the {@linkcode Video} macro.
 *
 * https://html.spec.whatwg.org/multipage/media.html#the-video-element
 */
export type VideoProps = {
  /**
   * The [src content attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-src) on [media elements](https://html.spec.whatwg.org/multipage/media.html#media-element) gives the [URL](https://url.spec.whatwg.org/#concept-url) of the media resource (video, audio) to show. The attribute, if present, must contain a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces).
   */
  src?: Expression;
  /**
   * The [crossorigin content attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-crossorigin) on [media elements](https://html.spec.whatwg.org/multipage/media.html#media-element) is a [CORS settings attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute).
   */
  crossorigin?: CrossOrigin;
  /**
   * The [poster attribute](https://html.spec.whatwg.org/multipage/media.html#attr-video-poster) gives the [URL](https://url.spec.whatwg.org/#concept-url) of an image file that the user agent can show while no video data is available. The attribute, if present, must contain a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces).
   */
  poster?: Expression;
  /**
   * The [preload attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-preload) hints how much buffering the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) will likely need.
   */
  preload?: Preload;
  /**
   * The [autoplay attribute](https://html.spec.whatwg.org/multipage/media.html#attr-media-autoplay) hint that the media resource can be started automatically when the page is loaded.
   */
  autoplay?: boolean;
  /**
   * The [playsinline attribute](https://html.spec.whatwg.org/multipage/media.html#attr-video-playsinline), if present, serves as a hint to the user agent that the video ought to be displayed "inline" in the document by default, constrained to the element's playback area, instead of being displayed fullscreen or in an independent resizable window.
   */
  playsinline?: boolean;
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
  /**
   * The [width attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width) specifies the horizontal dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  width?: number;
  /**
   * The [height attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height) specifies the vertical dimension in [CSS pixels](https://drafts.csswg.org/css-values/#px). It is a [dimension attribute](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dimension-attributes), i.e., a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).
   */
  height?: number;
} & TagProps;

/**
 * A [video element](https://html.spec.whatwg.org/multipage/media.html#the-video-element) is used for playing videos or movies, and audio files with captions.
 */
export function Video(
  props: VideoProps & { children?: Children },
): Expression {
  return (
    <BuildVerificationDOM
      dom={dom}
      attrs={props}
      attrRendering={renderGlobalAttributes}
    >
      {props.children}
    </BuildVerificationDOM>
  );
}

const dom = new DOMNodeInfo(
  "video",
  cmUnverified,
);
