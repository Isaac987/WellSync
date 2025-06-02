import { ColorPalette } from "@theme/palettes";
import { createContext } from "react";
import { UserSettings } from "@settings/types";

export type ColorThemeSetting = UserSettings["theme"];

export interface ColorThemeContextType {
  colorTheme: ColorThemeSetting;
  colorPalette: ColorPalette;
}

export const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);
