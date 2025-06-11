import typography from "@/theme/typography";
import { TableCell, TableCellProps } from "@mui/material";
import { memo } from "react";

const AppTableCell = ({ children, sx, ...otherProps }: TableCellProps) => {
  const baseSx = {
    borderBottom: "1px solid",
    borderRight: "1px solid",
    borderColor: "border.main",
    padding: "7px 16px",
    height: 38,
    maxHeight: 38,
    px: 1,
    ...typography.body1,

    "&#view, &#edit, &#delete, &#copy,  &#header-copy, &#select, &#header-select, &#reset, &#actions":
      {
        py: 0,
        px: 1,
      },
  };

  return (
    <TableCell sx={{ ...baseSx, ...sx }} {...otherProps}>
      {children}
    </TableCell>
  );
};

export default memo(AppTableCell);
