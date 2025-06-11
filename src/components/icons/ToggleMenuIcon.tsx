import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const ToggleMenuIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0  16 12"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path
        d="M1.33334 1H14.6667M1.33334 6H14.6667M1.33334 11H7.16668"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </SvgIcon>
  );
};

export default memo(ToggleMenuIcon);
