import { DarkPalette } from "./_dark/dark";
import { LightPalette } from "./_light/light";
import { MainPalette } from "./_palette/palette";
import { PrimaryColor } from "./_primary/primary";
import { AmberPalette } from "./amber/amber";
import { BluePalette } from "./blue/blue";
import { GreenPalette } from "./green/green";
import { RedPalette } from "./red/red";

export const usyColor = {
  ...PrimaryColor,
  ...MainPalette,
  ...LightPalette,
  ...DarkPalette,
  ...RedPalette,
  ...GreenPalette,
  ...BluePalette,
  ...AmberPalette,
};

export const usyHexColors = Object.values({ ...PrimaryColor, ...MainPalette });
