export type BaseVariantUnion = "filled" | "outline";
export type BaseRadiusUnion = "none" | "small" | "medium" | "large" | "full";
export type BasePositionUnion = "top" | "right" | "bottom" | "left";
export type BasePositionExtraUnion =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

/**
 * Semantic Tag
 */

export type BaseSemanticTagUnion =
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

export type BaseSizeUnion = "small" | "medium" | "large";
export type BaseSizeExtraUnion = "tiny" | "huge";
export type BaseSizeGigantUnion = "gigant-1" | "gigant-2";

/**
 * Color
 */

export type BasePrimaryPaletteUnion =
  | "primary"
  | "primary-light"
  | "primary-dark";
export type BaseLightPaletteUnion =
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
export type BaseDarkPaletteUnion =
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
export type BaseColorPaletteUnion =
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
export type BaseColorUnion =
  | BasePrimaryPaletteUnion
  | BaseLightPaletteUnion
  | BaseDarkPaletteUnion
  | BaseColorPaletteUnion;

/**
 * Typography
 */

export type BaseTypoNormalUnion = "small" | "label" | "span" | "p";
export type BaseTypoHeadingUnion = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type BaseTypoFormatUnion =
  | "mark"
  | "ins"
  | "del"
  | "sub"
  | "sup"
  | "em"
  | "strong";
export type BaseTypoTagUnion =
  | BaseTypoNormalUnion
  | BaseTypoHeadingUnion
  | BaseTypoFormatUnion;
export type BaseTypoWeightUnion =
  | "thin"
  | "light"
  | "semilight"
  | "normal"
  | "semibold"
  | "bold"
  | "heavy";
