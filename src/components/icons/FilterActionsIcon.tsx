import React, { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const FilterActionsIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"></path>
    </SvgIcon>
  );
};

export default memo(FilterActionsIcon);
