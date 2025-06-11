import React, { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

interface IndeterminateCheckBoxIconProps extends SvgIconProps {
  lineColor?: string;
}

const IndeterminateCheckBoxIcon = ({
  sx,
  lineColor = "#ffffff",
  ...otherProps
}: IndeterminateCheckBoxIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 44 44"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <g transform="translate(4, 4)">
        <path
          fill="currentColor"
          d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"
        />

        <rect x="7" y="16.5" width="22" height="5" rx="1.5" fill={lineColor} />
      </g>
    </SvgIcon>
  );
};

export default memo(IndeterminateCheckBoxIcon);
