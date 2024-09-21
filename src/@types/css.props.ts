/**
 * WidthProps
 */

type WidthCSSType = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
};

export type WidthProps = {
  widthProps?: WidthCSSType;
};

/**
 * HeightProps
 */

type HeightCSSType = {
  height?: string;
  maxHeight?: string;
  minHeight?: string;
};

export type HeightProps = {
  heightProps?: HeightCSSType;
};

/**
 * MarginProps
 */

type MarginCSSType = {
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  margin?: string;
};

export type MarginProps = {
  marginProps?: MarginCSSType;
};

/**
 * PaddingProps
 */

type PaddingCSSType = {
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  padding?: string;
};

export type PaddingProps = {
  paddingProps?: PaddingCSSType;
};
