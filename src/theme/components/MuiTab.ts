import { Components, Theme } from "@mui/material";

const MuiTab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.common.black,
      textTransform: "unset",
      padding: "6px 16px",
      minHeight: "unset",
      "&.MuiTab-root": {
        WebkitTapHighlightColor: "transparent",
      },
    }),
  },
};

export default MuiTab;
