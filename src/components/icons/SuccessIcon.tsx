import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const SuccessIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
    </SvgIcon>
  );
};

export default memo(SuccessIcon);
