"use client";
import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import components from "./components";

const theme = createTheme({
  palette: palette,
  // Thiết lập chế độ sáng/tối nếu dùng mui@7 experimental `colorSchemes`
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography,
  components,
});

export default theme;
