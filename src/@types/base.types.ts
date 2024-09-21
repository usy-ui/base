export type BaseVariant = "filled" | "outline";
export type BaseRadius = "none" | "small" | "medium" | "large" | "full";
export type BasePosition = "top" | "right" | "bottom" | "left";
export type BasePositionExtra =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

/**
 * Semantic Tag
 */

export type BaseSemanticTag =
  | "header"
  | "footer"
  | "main"
  | "section"
  | "summary"
  | "nav"
  | "details"
  | "article"
  | "aside"
  | "figcaption"
  | "figure"
  | "mark"
  | "div"
  | "span";

/**
 * Size
 */

export type BaseSize = "small" | "medium" | "large";
export type BaseSizeExtra = "tiny" | "huge";
export type BaseSizeGigant = "gigant-1" | "gigant-2";

/**
 * Color
 */

export type BasePrimaryPalette = "primary" | "primary-light" | "primary-dark";
export type BaseLightPalette =
  | "light-0"
  | "light-1"
  | "light-2"
  | "light-3"
  | "light-4"
  | "light-5"
  | "light-6"
  | "light-7"
  | "light-8"
  | "light-9";
export type BaseDarkPalette =
  | "dark-0"
  | "dark-1"
  | "dark-2"
  | "dark-3"
  | "dark-4"
  | "dark-5"
  | "dark-6"
  | "dark-7"
  | "dark-8"
  | "dark-9";
export type BaseColorPalette =
  | "white"
  | "black"
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "lime"
  | "mint"
  | "sky";
export type BaseColor =
  | BasePrimaryPalette
  | BaseLightPalette
  | BaseDarkPalette
  | BaseColorPalette;

/**
 * Typography
 */

export type BaseTypographyNormal = "small" | "label" | "span" | "p";
export type BaseTypographyHeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type BaseTypographyFormat =
  | "mark"
  | "ins"
  | "del"
  | "sub"
  | "sup"
  | "em"
  | "strong";
export type BaseTypographyTag =
  | BaseTypographyNormal
  | BaseTypographyHeading
  | BaseTypographyFormat;
export type BaseTypographyWeight =
  | "thin"
  | "light"
  | "semilight"
  | "normal"
  | "semibold"
  | "bold"
  | "heavy";
