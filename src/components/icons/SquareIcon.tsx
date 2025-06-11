import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const SquareIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 32 32"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        rx="4"
        ry="4"
      />
    </SvgIcon>
  );
};

export default memo(SquareIcon);
