import { Components, Theme } from "@mui/material";

const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: {
      minHeight: "36px",
    },
    flexContainer: {
      height: "100%",
    },
  },
};

export default MuiTabs;
