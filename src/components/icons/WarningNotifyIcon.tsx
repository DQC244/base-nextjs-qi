import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const WarningNotifyIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"></path>
    </SvgIcon>
  );
};

export default memo(WarningNotifyIcon);
