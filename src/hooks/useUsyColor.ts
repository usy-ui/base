import { useMemo } from "react";

import { usyColor, usyHexColors } from "@src/styles";
import { camelCase } from "@src/utils";

import { BaseColor } from "../@types";

/**
 *
 * @param colorName can be random or color name from BaseColor
 * @returns Return corresponding color in hex
 */

export const useUsyColor = (colorName: BaseColor | "random") => {
  const colorInHex = useMemo(() => {
    if (colorName === "random") {
      return usyHexColors[
        Math.floor(Math.random() * usyHexColors.length)
      ] as keyof typeof usyColor;
    }

    const colorKey = camelCase(colorName).replace(
      "-",
      ""
    ) as keyof typeof usyColor;
    return usyColor[colorKey];
  }, [colorName]);

  return colorInHex;
};
