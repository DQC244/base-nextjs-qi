import { Components, Theme } from "@mui/material";

const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  styleOverrides: {
    root: {
      width: 30,
      height: 16,
      padding: 0,
    },
    switchBase: ({ theme }) => ({
      height: "100%",
      width: "16px",
      color: theme.palette.common.white,
      padding: "2px",
      "&.Mui-checked": {
        color: theme.palette.common.white,
        transform: "translateX(13.66px)",
        "& + .MuiSwitch-track": {
          opacity: 1,
        },
      },
    }),
    track: ({ theme }) => ({
      borderRadius: "13.3px",
      height: "100%",
      background: theme.palette.text.secondary,
      opacity: 1,
    }),
    thumb: {
      width: 12,
      height: 12,
    },
  },
};

export default MuiSwitch;
