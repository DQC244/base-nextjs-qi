import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const PlusSquare = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{
        fontSize: "inherit",
        ...sx,
      }}
      {...otherProps}
    >
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"></path>
    </SvgIcon>
  );
};

export default memo(PlusSquare);
