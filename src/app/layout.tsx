import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import StoreProvider from "./StoreProvider";
import "./globals.scss";
import { AppToaster } from "@/components/common";
import { Metadata } from "next";
import { AppConstant } from "@/constant";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: AppConstant.APP_TITLE,
    description: AppConstant.APP_DESCRIPTION,
  };
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning translate="no">
      <body>
        <StoreProvider>
          <AppToaster />
          <InitColorSchemeScript attribute="class" />
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
