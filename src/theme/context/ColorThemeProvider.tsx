import { useColorScheme } from "react-native";
import { ColorThemeContextType, ColorThemeSetting, ColorThemeContext } from "./ColorThemeContext";
import { ColorPalette, darkPalette, lightPalette } from "@theme/palettes";
import { useEffect, useState } from "react";
import { userSettingsService } from "@settings/services";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export default function ColorThemeProvider({ children }: ThemeContextProviderProps) {
  const systemColorTheme = useColorScheme();
  const [colorThemeSetting, setColorThemeSetting] = useState<ColorThemeSetting>("system");
  const [colorPalette, setColorPalette] = useState<ColorPalette>(darkPalette);

  // Load the users prefered color theme
  useEffect(() => {
    const fetchThemeSetting = async () => {
      const themeSetting = await userSettingsService.getSetting("theme");
      setColorThemeSetting(themeSetting);
    };

    fetchThemeSetting();
  }, []);

  // Update if the user's prefered color theme changes or the system color theme changes
  useEffect(() => {
    switch (colorThemeSetting) {
      case "light":
        setColorPalette(lightPalette);
        break;
      case "dark":
        setColorPalette(darkPalette);
        break;
      default:
        setColorPalette(systemColorTheme === "light" ? lightPalette : darkPalette);
        break;
    }
  }, [colorThemeSetting, systemColorTheme]);

  const contextValue: ColorThemeContextType = {
    colorTheme: colorThemeSetting,
    colorPalette: colorPalette,
  };

  return <ColorThemeContext.Provider value={contextValue}>{children}</ColorThemeContext.Provider>;
}
