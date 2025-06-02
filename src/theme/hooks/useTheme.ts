import { ColorThemeContext, ColorThemeContextType } from "@theme/context/ColorThemeContext";
import { useContext } from "react";

export default function useTheme(): ColorThemeContextType {
  const colorThemeContext = useContext(ColorThemeContext);

  if (!colorThemeContext) {
    throw new Error("useTheme must be used within a ThemeContextProviders");
  }

  return colorThemeContext;
}
