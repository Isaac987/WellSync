import { create } from "zustand";

type ColorTheme = "dark" | "light" | "system";

interface PreferencesState {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

export const usePreferenceStore = create<PreferencesState>((set) => ({
  colorTheme: "system",
  setColorTheme: (theme: ColorTheme) => set((state) => ({ colorTheme: theme })),
}));
