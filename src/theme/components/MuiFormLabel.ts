import { Components, Theme } from "@mui/material";

const MuiFormLabel: Components<Theme>["MuiFormLabel"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: "#757575",
      fontWeight: 400,
      fontSize: 14,
    }),
    asterisk: { color: "#CF202F" },
  },
};

export default MuiFormLabel;
