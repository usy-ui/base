"use client";
import { usyColor } from "@src/styles";
import { camelCase, toCssVariable } from "@src/utils/format";

import { BaseRadius } from "../../@types";

type ColorModify = {
  colorPrimary: string;
  colorPrimaryLight: string;
  colorPrimaryDark: string;
};

type ElementModify = {
  elementHeightSmall: string;
  elementHeightMedium: string;
  elementHeightLarge: string;
  elementRadius: BaseRadius;
};

type LayoutModify = {
  horizontalPadding: string;
};

type ThemeProps = Partial<ColorModify & ElementModify & LayoutModify>;

const setThemeToCssVariables = (theme: ThemeProps) => {
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    const varName = toCssVariable(key);
    root.style.setProperty(varName, value);
  });
};

const setThemeToUsyConstants = (theme: ThemeProps) => {
  const setColors = (key: string, value: string) => {
    if (key.startsWith("color")) {
      const usyColorKey = camelCase(
        key.replace("color", "")
      ) as keyof typeof usyColor;

      usyColor[usyColorKey] = value;
    }
  };

  Object.entries(theme).forEach(([key, value]) => {
    setColors(key, value);
  });
};

export const setUsyTheme = (theme: ThemeProps) => {
  setThemeToCssVariables(theme);
  setThemeToUsyConstants(theme);
};
