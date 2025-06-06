import { GlobalThemeContext } from "@shared/contexts/GlobalThemeContext";
import { useContext } from "react";
import { ColorPalette } from "@shared/types";

export default function useGlobalTheme(): ColorPalette {
  const globalThemeContext = useContext(GlobalThemeContext);

  if (!globalThemeContext) {
    throw new Error("useGlobalTheme must be used within a GlobalThemeProvider");
  }

  return globalThemeContext;
}
