import { Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

const AppModalTitle = ({ children, sx, ...otherProps }: TypographyProps) => {
  return (
    <Typography
      id="modal-title"
      py={1}
      pl={2.5}
      pr={5}
      borderBottom={"1px solid rgba(0, 0, 0, 0.12)"}
      sx={{
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: "36px",
        minHeight: 53,

        ":before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: "14px",
          left: "12px",
          height: "24px",
          borderLeft: "3px solid",
          borderColor: "primary.main",
          borderRadius: "2px",
        },
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default memo(AppModalTitle);
