import { Components, Theme } from "@mui/material";

const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
    sizeMedium: ({ theme }) => ({
      padding: "6px",
      width: 36,
      height: 36,
    }),
    sizeSmall: {},
  },
};

export default MuiIconButton;
