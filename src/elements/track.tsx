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

export type TrackKind =
  /**
   * Transcription or translation of the dialogue, suitable for when the sound is available but not understood (e.g. because the user does not understand the language of the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource)'s audio track). Overlaid on the video.
   */
  | "subtitles"
  /**
   * Transcription or translation of the dialogue, sound effects, relevant musical cues, and other relevant audio information, suitable for when sound is unavailable or not clearly audible (e.g. because it is muted, drowned-out by ambient noise, or because the user is deaf). Overlaid on the video; labeled as appropriate for the hard-of-hearing.
   */
  | "captions"
  /**
   * Textual descriptions of the video component of the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource), intended for audio synthesis when the visual component is obscured, unavailable, or not usable (e.g. because the user is interacting with the application without a screen while driving, or because the user is blind). Synthesized as audio.
   */
  | "descriptions"
  /**
   * Track intended for use from script. Not displayed by the user agent.
   */
  | "chapters"
  /**
   * Track intended for use from script. Not displayed by the user agent.
   */
  | "metadata";

/**
 * Props for the {@linkcode Track} macro.
 *
 * https://html.spec.whatwg.org/multipage/media.html#the-track-element
 */
export type TrackProps = {
  /**
   * The [kind attribute](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind) defines the type of text track.
   */
  kind?: TrackKind;
  /**
   * The [src attribute](https://html.spec.whatwg.org/multipage/media.html#attr-track-src) gives the [URL](https://url.spec.whatwg.org/#concept-url) of the text track data. The value must be a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces).
   */
  src: Expressions;
  /**
   * The [srclang attribute](https://html.spec.whatwg.org/multipage/media.html#attr-track-srclang) gives the language of the text track data. The value must be a valid BCP 47 language tag. This attribute must be present if the element's [kind attribute](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind) is in the [subtitles](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-subtitles) state.
   */
  srclang?: Expressions;
  /**
   * The [label attribute](https://html.spec.whatwg.org/multipage/media.html#attr-track-label) gives a user-readable title for the track. This title is used by user agents when listing [subtitle](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-subtitles), [caption](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-captions), and [audio description](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-descriptions) tracks in their user interface.
   */
  label?: Expressions;
  /**
   * The [default attribute](https://html.spec.whatwg.org/multipage/media.html#attr-track-default), if specified, indicates that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.
   */
  default?: boolean;
} & TagProps;

/**
 * The [track element](https://html.spec.whatwg.org/multipage/media.html#the-track-element) allows authors to specify explicit external timed [text tracks](https://html.spec.whatwg.org/multipage/media.html#text-track) for [media elements](https://html.spec.whatwg.org/multipage/media.html#media-element).
 */
export function Track(
  props: TrackProps,
): Expression {
  return (
    <RenderVoidElement
      name="track"
      attrs={<RenderTrackAttributes attrs={props} />}
    />
  );
}

function RenderTrackAttributes(
  { attrs }: { attrs?: TrackProps },
): Expression {
  if (attrs === undefined) {
    return "";
  }

  return (
    <>
      <RenderGlobalAttributes attrs={attrs} />
      {attrs.kind !== undefined
        ? <RenderEnum attr="kind" value={attrs.kind} />
        : ""}
      <RenderExpression attr="src" value={<exps x={attrs.src} />} />
      {attrs.srclang !== undefined
        ? <RenderExpression attr="srclang" value={<exps x={attrs.srclang} />} />
        : ""}
      {attrs.label !== undefined
        ? <RenderExpression attr="label" value={<exps x={attrs.label} />} />
        : ""}
      {attrs.default !== undefined
        ? <RenderBoolean attr="default" value={attrs.default} />
        : ""}
    </>
  );
}
