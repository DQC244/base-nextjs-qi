import React, { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const CheckIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
    </SvgIcon>
  );
};

export default memo(CheckIcon);
