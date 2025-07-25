import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const CheckedIconCustom = ({ sx, ...otherProps }: SvgIconProps) => {
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
        <path
          fill="#FFF"
          d="M29.28 6.362c-1.156-.751-2.704-.422-3.458.736L14.936 23.877l-5.029-4.65c-1.014-.938-2.596-.875-3.533.138-.937 1.014-.875 2.596.139 3.533l7.209 6.666c.48.445 1.09.665 1.696.665.673 0 1.534-.282 2.099-1.139.332-.506 12.5-19.27 12.5-19.27.751-1.159.421-2.707-.737-3.458z"
        />
      </g>
    </SvgIcon>
  );
};

export default memo(CheckedIconCustom);
