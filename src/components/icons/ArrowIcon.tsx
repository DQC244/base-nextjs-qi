import React, { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const ArrowIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"></path>
    </SvgIcon>
  );
};

export default memo(ArrowIcon);
