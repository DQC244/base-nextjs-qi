import { TableCellProps } from "@mui/material";
import { memo } from "react";
import AppTableCell from "./AppTableCell";

const AppTableCellHeader = ({
  children,
  sx,
  ...otherProps
}: TableCellProps) => {
  return (
    <AppTableCell
      sx={{
        backgroundColor: "primary.main",
        color: "common.white",
        whiteSpace: "nowrap",
        height: 38,
        px: 1,
        ...sx,
        fontWeight: 500,
      }}
      {...otherProps}
    >
      {children}
    </AppTableCell>
  );
};

export default memo(AppTableCellHeader);
