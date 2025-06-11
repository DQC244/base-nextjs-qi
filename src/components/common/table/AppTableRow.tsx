import { TableRow, TableRowProps } from "@mui/material";
import { forwardRef, memo } from "react";

const AppTableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, sx, ...otherProps }, ref) => {
    return (
      <TableRow
        ref={ref}
        hover
        sx={{
          "&&:hover td": {
            backgroundColor: "primary.table",
          },
          ...sx,
        }}
        {...otherProps}
      >
        {children}
      </TableRow>
    );
  }
);

AppTableRow.displayName = "AppTableRow";

export default memo(AppTableRow);
