import { Components, Theme } from "@mui/material";

const commonOutlinedStyle = (theme: Theme) => ({
  textTransform: "none" as const,
  boxShadow: "unset",
  whiteSpace: "nowrap" as const,
  fontWeight: 500,
  borderWidth: 1,
  borderStyle: "solid",
  ":hover": {
    backgroundColor: theme.palette.grey[100],
  },
});

const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      textTransform: "none",
      boxShadow: "unset",
      whiteSpace: "nowrap",
      fontWeight: 500,
    },
    sizeMedium: {
      fontSize: 14,
      lineHeight: "17px",
      paddingTop: "9.5px",
      paddingBottom: "9.5px",
      height: 36,
      minWidth: 90,
    },
    sizeSmall: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "15px",
      paddingTop: "4px",
      paddingBottom: "4px",
    },
    startIcon: {
      "& > *:nth-of-type(1)": {
        fontSize: 16,
      },
    },
  },
  variants: [
    {
      props: { variant: "outlined", color: "primary" },
      style: ({ theme }) => ({
        ...commonOutlinedStyle(theme),
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        ":hover": {
          backgroundColor: theme.palette.primary[50],
        },
      }),
    },
    {
      props: { variant: "outlined", color: "error" },
      style: ({ theme }) => ({
        ...commonOutlinedStyle(theme),
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
        ":hover": {
          backgroundColor: theme.palette.error[50],
        },
      }),
    },
    {
      props: { variant: "outlined", color: "warning" },
      style: ({ theme }) => ({
        ...commonOutlinedStyle(theme),
        borderColor: theme.palette.warning.main,
        color: theme.palette.warning.main,
        ":hover": {
          backgroundColor: theme.palette.warning[50],
        },
      }),
    },
    {
      props: { variant: "outlined", color: "success" },
      style: ({ theme }) => ({
        ...commonOutlinedStyle(theme),
        borderColor: theme.palette.success.main,
        color: theme.palette.success.main,
        ":hover": {
          backgroundColor: theme.palette.success[50],
        },
      }),
    },
    {
      props: { variant: "outlined", color: "secondary" },
      style: ({ theme }) => ({
        ...commonOutlinedStyle(theme),
        borderColor: theme.palette.grey[300],
        color: theme.palette.text.primary,
      }),
    },
  ],
};

export default MuiButton;
