import React, { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const SchoolIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 25 25"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"></path>
    </SvgIcon>
  );
};

export default memo(SchoolIcon);
