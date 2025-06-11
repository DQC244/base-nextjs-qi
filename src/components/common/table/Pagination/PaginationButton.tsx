import React, { memo } from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import { ArrowIcon } from "@/components/icons";

const PaginationButton = ({ sx, ...otherProps }: IconButtonProps) => {
  return (
    <IconButton
      sx={{
        fontSize: 12,
        width: 24,
        height: 24,
        color: "text.primary",
        border: "1px solid #DBDBDB",
        borderRadius: "2px",
        "&.Mui-disabled": {
          backgroundColor: "grey.50",
        },
        ...sx,
      }}
      {...otherProps}
    >
      <ArrowIcon />
    </IconButton>
  );
};

export default memo(PaginationButton);
