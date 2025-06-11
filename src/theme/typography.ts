import { TypographyVariantsOptions } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const typography: TypographyVariantsOptions = {
  fontFamily: roboto.style.fontFamily,
  fontSize: 14,
  h1: {
    fontSize: 40,
    fontWeight: 700,
    lineHeight: "47.73px",
  },
  h2: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: "38.19px",
  },
  h3: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: "28.64px",
  },
  h4: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: "23.87px",
  },
  h5: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  },
  body1: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "16.71px",
  },
  body2: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "28px",
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "23.87px",
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "19.09px",
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "14.32px",
  },
  overline: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: "18.2px",
    textTransform: "none",
  },
};

export default typography;
