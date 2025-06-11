// src/types/react-table.d.ts

import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: "text" | "range" | "select";
    [x: string]: any;
    containerStyle?: CSSProperties;
    align?: "center" | "inherit" | "left" | "right" | "justify";
    headerSx?: TableCellProps["sx"];
    listFilterSelect?: { id: any; name: any }[];
  }
}
