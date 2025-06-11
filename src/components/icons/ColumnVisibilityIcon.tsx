import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const ColumnVisibilityIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="1 0 24 24"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 18H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4z"></path>
    </SvgIcon>
  );
};

export default memo(ColumnVisibilityIcon);
