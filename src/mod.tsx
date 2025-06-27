import type { LogLevel } from "macromania";
import { configurableLogging } from "./loggingUtils.tsx";

export { type DynamicAttributes, H } from "./renderUtils.tsx";
export { type AOrAreaLinkProps } from "./aOrArea.tsx";
export { A, type AProps } from "./elements/a.tsx";
export { Abbr } from "./elements/abbr.tsx";
export { Address } from "./elements/address.tsx";
export { Area, type AreaProps } from "./elements/area.tsx";
export { Article } from "./elements/article.tsx";
export { Aside } from "./elements/aside.tsx";
export { Audio } from "./elements/audio.tsx";
export { B } from "./elements/b.tsx";
export { Base, type BaseProps } from "./elements/base.tsx";
export { Bdi } from "./elements/bdi.tsx";
export { Bdo } from "./elements/bdo.tsx";
export { Blockquote } from "./elements/blockquote.tsx";
export { Body } from "./elements/body.tsx";
export { Br } from "./elements/br.tsx";
export { Button } from "./elements/button.tsx";
export { Canvas } from "./elements/canvas.tsx";
export { Caption } from "./elements/caption.tsx";
export { Cite } from "./elements/cite.tsx";
export { Code } from "./elements/code.tsx";
export { Col } from "./elements/col.tsx";
export { Colgroup } from "./elements/colgroup.tsx";
export { Data } from "./elements/data.tsx";
export { Datalist } from "./elements/datalist.tsx";
export { Dd } from "./elements/dd.tsx";
export { Del } from "./elements/insdel.tsx";
export { Details } from "./elements/details.tsx";
export { Dfn } from "./elements/dfn.tsx";
export { Dialog } from "./elements/dialog.tsx";
export { Div } from "./elements/div.tsx";
export { Dl } from "./elements/dl.tsx";
export { Dt } from "./elements/dt.tsx";
export { Em } from "./elements/em.tsx";
export { Embed } from "./elements/embed.tsx";
export { Fieldset } from "./elements/fieldset.tsx";
export { Figcaption } from "./elements/figcaption.tsx";
export { Figure } from "./elements/figure.tsx";
export { Footer } from "./elements/footer.tsx";
export { Form } from "./elements/form.tsx";
export { H1, H2, H3, H4, H5, H6 } from "./elements/hs.tsx";
export { Head } from "./elements/head.tsx";
export { Header } from "./elements/header.tsx";
export { Hgroup } from "./elements/hgroup.tsx";
export { Hr } from "./elements/hr.tsx";
export { Html } from "./elements/html.tsx";
export { I } from "./elements/i.tsx";
export { Iframe } from "./elements/iframe.tsx";
export { Img } from "./elements/img.tsx";
export { Input } from "./elements/input.tsx";
export { Ins } from "./elements/insdel.tsx";
export { Kbd } from "./elements/kbd.tsx";
export { Label } from "./elements/label.tsx";
export { Legend } from "./elements/legend.tsx";
export { Li } from "./elements/li.tsx";
export {
  type Destination,
  Link,
  type LinkLinkType,
  type LinkProps,
  type PotentialDestination,
  type SizeEntry,
} from "./elements/link.tsx";
export { Main } from "./elements/main.tsx";
export { Map } from "./elements/map.tsx";
export { Mark } from "./elements/mark.tsx";
export { Menu } from "./elements/menu.tsx";
export { Meta } from "./elements/meta.tsx";
export { Meter } from "./elements/meter.tsx";
export { Nav } from "./elements/nav.tsx";
export { Noscript } from "./elements/noscript.tsx";
export { Object } from "./elements/object.tsx";
export { Ol } from "./elements/ol.tsx";
export { Optgroup } from "./elements/optgroup.tsx";
export { Option } from "./elements/option.tsx";
export { Output } from "./elements/output.tsx";
export { P } from "./elements/p.tsx";
export { Picture } from "./elements/picture.tsx";
export { Pre } from "./elements/pre.tsx";
export { Progress } from "./elements/progress.tsx";
export { Q } from "./elements/q.tsx";
export { Rp } from "./elements/rp.tsx";
export { Rt } from "./elements/rt.tsx";
export { Ruby } from "./elements/ruby.tsx";
export { S } from "./elements/s.tsx";
export { Samp } from "./elements/samp.tsx";
export { Script, type ScriptProps } from "./elements/script.tsx";
export { Search } from "./elements/search.tsx";
export { Section } from "./elements/section.tsx";
export { Select } from "./elements/select.tsx";
export { Slot } from "./elements/slot.tsx";
export { Small } from "./elements/small.tsx";
export { Source } from "./elements/source.tsx";
export { Span } from "./elements/span.tsx";
export { Strong } from "./elements/strong.tsx";
export { Style } from "./elements/style.tsx";
export { Sub } from "./elements/sub.tsx";
export { Summary } from "./elements/summary.tsx";
export { Sup } from "./elements/sup.tsx";
export { Table } from "./elements/table.tsx";
export { Tbody } from "./elements/tbody.tsx";
export { Td } from "./elements/td.tsx";
export { Template } from "./elements/template.tsx";
export { Textarea } from "./elements/textarea.tsx";
export { Tfoot } from "./elements/tfoot.tsx";
export { Th } from "./elements/th.tsx";
export { Thead } from "./elements/thead.tsx";
export { Time } from "./elements/time.tsx";
export { Title } from "./elements/title.tsx";
export { Tr } from "./elements/tr.tsx";
export { Track } from "./elements/track.tsx";
export { U } from "./elements/u.tsx";
export { Ul } from "./elements/ul.tsx";
export { Var } from "./elements/var.tsx";
export { Video } from "./elements/video.tsx";
export { Wbr } from "./elements/wbr.tsx";

export {
  type CrossOrigin,
  type FetchPriority,
  type PossiblyBlockingToken,
} from "./shared.tsx";

export { EscapeHtml } from "./renderUtils.tsx";
export { type TagProps } from "./global.tsx";

export type LoggingConfig = {
  /**
   * Set the logging level for all html verification. Defaults to `"warn"`.
   *
   * More specific logging options overwrite this one.
   */
  "verify": LogLevel;

  /**
   * Set the logging level for all verification of the `html` tag.
   */
  "html": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `html` tag.
   */
  "htmlContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `head` tag.
   */
  "head": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `head` tag.
   */
  "headContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `base` tag.
   */
  "base": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `base` tag.
   */
  "baseContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `link` tag.
   */
  "link": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `link` tag.
   */
  "linkContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `meta` tag.
   */
  "meta": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `meta` tag.
   */
  "metaContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `style` tag.
   */
  "style": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `style` tag.
   */
  "styleContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `body` tag.
   */
  "body": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `body` tag.
   */
  "bodyContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `article` tag.
   */
  "article": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `article` tag.
   */
  "articleContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `section` tag.
   */
  "section": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `section` tag.
   */
  "sectionContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `nav` tag.
   */
  "nav": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `nav` tag.
   */
  "navContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `aside` tag.
   */
  "aside": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `aside` tag.
   */
  "asideContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `h1` tag.
   */
  "h1": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `h1` tag.
   */
  "h1ContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `h2` tag.
   */
  "h2": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `h2` tag.
   */
  "h2ContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `h3` tag.
   */
  "h3": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `h3` tag.
   */
  "h3ContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `h4` tag.
   */
  "h4": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `h4` tag.
   */
  "h4ContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `h5` tag.
   */
  "h5": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `h5` tag.
   */
  "h5ContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `h6` tag.
   */
  "h6": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `h6` tag.
   */
  "h6ContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `hgroup` tag.
   */
  "hgroup": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `hgroup` tag.
   */
  "hgroupContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `header` tag.
   */
  "header": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `header` tag.
   */
  "headerContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `footer` tag.
   */
  "footer": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `footer` tag.
   */
  "footerContentModel": LogLevel | null;

  /**
   * Set the logging level for all verification of the `address` tag.
   */
  "address": LogLevel | null;
  /**
   * Set the logging level for content model verification of the `address` tag.
   */
  "addressContentModel": LogLevel | null;
};

const {
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
    "html": null,
    "htmlContentModel": null,
    head: null,
    headContentModel: null,
    base: null,
    baseContentModel: null,
    link: null,
    linkContentModel: null,
    meta: null,
    metaContentModel: null,
    style: null,
    styleContentModel: null,
    body: null,
    bodyContentModel: null,
    article: null,
    articleContentModel: null,
    section: null,
    sectionContentModel: null,
    nav: null,
    navContentModel: null,
    aside: null,
    asideContentModel: null,
    h1: null,
    h1ContentModel: null,
    h2: null,
    h2ContentModel: null,
    h3: null,
    h3ContentModel: null,
    h4: null,
    h4ContentModel: null,
    h5: null,
    h5ContentModel: null,
    h6: null,
    h6ContentModel: null,
    hgroup: null,
    hgroupContentModel: null,
    header: null,
    headerContentModel: null,
    footer: null,
    footerContentModel: null,
    address: null,
    addressContentModel: null,
  }),
  "ConfigHtmlLogging",
);

export { ConfigLogging as ConfigHtmlLogging };

/**
 * For internal use.
 */
export { Info, info, logEmptyLine, SetCurrentKeys, Warn, warn, withOtherKeys };
