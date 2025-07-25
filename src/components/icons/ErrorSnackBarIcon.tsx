import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const ErrorSnackBarIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="2 2 24 24"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"></path>
    </SvgIcon>
  );
};

export default memo(ErrorSnackBarIcon);
