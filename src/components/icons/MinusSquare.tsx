import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const MinusSquare = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{
        fontSize: "inherit",
        ...sx,
      }}
      {...otherProps}
    >
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"></path>
    </SvgIcon>
  );
};
export default memo(MinusSquare);
