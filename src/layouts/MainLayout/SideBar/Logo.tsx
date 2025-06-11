import { AppImage, AppLink } from "@/components/common";
import { AppLinkProps } from "@/components/common/AppLink";
import { ImageConstant, PathConstant } from "@/constant";
import { Box } from "@mui/material";
import React, { memo } from "react";

const Logo = ({ ...otherProps }: LogoProps) => {
  return (
    <Box
      sx={{
        py: "11px",
        px: "11px",
        width: "100%",
      }}
    >
      <AppLink href={PathConstant.ROOT} {...otherProps}>
        <AppImage
          priority="true"
          src={ImageConstant.Logo}
          alt="logo"
          width={194}
          height={48}
          boxProps={{
            margin: "auto",
          }}
        />
      </AppLink>
    </Box>
  );
};

type LogoProps = Omit<AppLinkProps, "href" | "children">;

export default memo(Logo);
