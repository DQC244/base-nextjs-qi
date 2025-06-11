import { TableFooter } from "@mui/material";
import { flexRender, Table } from "@tanstack/react-table";
import { memo } from "react";
import AppTableRow from "../AppTableRow";
import AppTableCell from "../AppTableCell";

const FooterTable = ({ table, hasFooter }: FooterTableProps) => {
  const footers = table
    .getFooterGroups()
    .map((group) =>
      group.headers.map((header) => header.column.columnDef.footer)
    )
    .flat()
    .filter(Boolean);

  return (
    hasFooter &&
    footers.length > 0 && (
      <TableFooter>
        {table.getFooterGroups().map((footerGroup) => (
          <AppTableRow key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <AppTableCell key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </AppTableCell>
            ))}
          </AppTableRow>
        ))}
      </TableFooter>
    )
  );
};

type FooterTableProps = {
  hasFooter?: boolean;
  table: Table<any>;
};

export default memo(FooterTable);
