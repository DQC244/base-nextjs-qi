"use client";
import { flexRender } from "@tanstack/react-table";
import { memo } from "react";
import AppTableCell from "../../AppTableCell";
import { getCommonPinningStyles } from "../helper";

const RowTableCell = ({ cell }: any) => {
  return (
    <AppTableCell
      id={cell.column.id}
      align={(cell.column.columnDef.meta as any)?.align}
      className={(cell.column.columnDef.meta as any)?.cellClassName}
      sx={{
        fontSize: 14,
        ...(cell.column.columnDef.meta as any)?.cellSx,
      }}
      rowSpan={cell.rowSpan}
      style={{ ...getCommonPinningStyles(cell.column) }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </AppTableCell>
  );
};

export default memo(RowTableCell);
