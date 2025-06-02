export interface ColorPalette {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
}

export const lightPalette: ColorPalette = {
  text: "#03032b",
  background: "#e7e8fe",
  primary: "#080c82",
  secondary: "#cb60f6",
  accent: "#db0de3",
};

export const darkPalette: ColorPalette = {
  text: "#d2d3fc",
  background: "#010218",
  primary: "#7b7ff7",
  secondary: "#75099f",
  accent: "#ea1cf2",
};
