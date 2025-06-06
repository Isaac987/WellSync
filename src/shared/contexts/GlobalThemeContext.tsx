import { useColorScheme, Appearance } from "react-native";
import { createContext, useEffect, useState } from "react";
import { usePreferenceStore } from "@shared/store/usePreferencesStore";
import { ColorPalette } from "@shared/types";
import { darkPalette, lightPalette } from "@shared/constants/palettes";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const GlobalThemeContext = createContext<ColorPalette | undefined>(undefined);

export function GlobalThemeProvider({ children }: ThemeContextProviderProps) {
  const systemColorTheme = useColorScheme();
  const colorTheme = usePreferenceStore((state) => state.colorTheme);
  const [colorPalette, setColorPalette] = useState<ColorPalette>(lightPalette);

  // Update if the user's prefered color theme changes or the system color theme changes
  useEffect(() => {
    switch (colorTheme) {
      case "light":
        setColorPalette(lightPalette);
        break;
      case "dark":
        setColorPalette(darkPalette);
        break;
      case "system":
        setColorPalette(systemColorTheme === "light" ? lightPalette : darkPalette);
        break;
    }
  }, [useColorScheme(), colorTheme]);

  return <GlobalThemeContext.Provider value={colorPalette}>{children}</GlobalThemeContext.Provider>;
}
