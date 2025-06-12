import {
  PaletteColorOptions,
  PaletteOptions,
  ThemeOptions,
} from "@mui/material/styles";
import { grey, common, red, cyan, green, orange } from "@mui/material/colors";

// Mở rộng palette để thêm 'border'
declare module "@mui/material/styles" {
  interface PaletteColor {
    background?: string;
    table?: string;
  }

  interface SimplePaletteColorOptions {
    background?: string;
    table?: string;
  }
  interface Palette {
    border: PaletteColor;
    textInverse: string;
  }
  interface PaletteOptions {
    border?: PaletteColorOptions;
    textInverse?: string;
  }
}

interface ColorScheme {
  palette: ThemeOptions["palette"];
}

interface ColorSchemes {
  light: ColorScheme;
  dark: ColorScheme;
}

const palette: PaletteOptions = {
  mode: "light",
  common,
  primary: {
    main: "#1976d2",
    light: "#77abde6e",
    background: "#77abde",
    table: "#77abde",
    contrastText: "#000",
  },
  secondary: {
    main: "#9c27b0",
  },
  grey,
  error: {
    main: red[500],
  },
  warning: {
    main: orange[800],
  },
  info: {
    main: cyan[500],
  },
  success: {
    main: green[700],
  },
  background: {
    default: grey[100],
    paper: common.white,
  },
  text: {
    primary: "#333333",
    secondary: grey[500],
  },
  border: {
    main: grey[300],
  },
  textInverse: common.white,
  // dark: {
  //   palette: {
  //     mode: "dark",
  //     common,
  //     primary: {
  //       main: "#90caf9",
  //       light: "rgb(194, 217, 255)",
  //     },
  //     secondary: {
  //       main: "#ce93d8",
  //     },
  //     grey,
  //     error: {
  //       main: red[500],
  //     },
  //     warning: {
  //       main: yellow[500],
  //     },
  //     info: {
  //       main: cyan[500],
  //     },
  //     success: {
  //       main: green[700],
  //     },
  //     background: {
  //       default: "#121212",
  //       paper: "#1e1e1e",
  //     },
  //     text: {
  //       primary: "#ffffff",
  //       secondary: grey[500],
  //     },
  //     border: {
  //       main: grey[300],
  //     },
  //     textInverse: common.black,
  //   },
  // },
};

export default palette;
export type { ColorSchemes, ColorScheme };
