import { TableBody, TableBodyProps } from "@mui/material";
import { memo } from "react";

const AppTableBody = ({ children, sx, ...otherProps }: TableBodyProps) => {
  return (
    <TableBody
      sx={{
        "& tr:nth-of-type(even) td": {
          backgroundColor: "background.default",
        },
        "& tr:nth-of-type(odd) td": {
          backgroundColor: "background.paper",
        },
        "& tr td:first-of-type": {
          borderLeft: "1px solid",
          borderColor: "border.main",
        },
        "& tr td:last-of-type": {
          borderRight: "1px solid ",
          borderColor: "border.main",
        },
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </TableBody>
  );
};

export default memo(AppTableBody);
