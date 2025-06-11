import { Box, BoxProps } from "@mui/material";
import React, { memo } from "react";

const Container = ({ sx, children, ...otherProps }: BoxProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        ...sx,
        minHeight: 0,
        minWidth: 0,
        overflow: "auto",
        maxWidth: "100%",
      }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default memo(Container);
