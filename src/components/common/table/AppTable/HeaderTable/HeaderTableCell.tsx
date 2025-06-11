import { flexRender } from "@tanstack/react-table";
import { memo } from "react";
import styles from "../table.module.scss";
import AppTableCellHeader from "../../AppTableCellHeader";
import Filter from "./Filter";
import { getCommonPinningStyles } from "../helper";

const HeaderTableCell = ({ header }: any) => {
  return (
    <AppTableCellHeader
      key={header.id}
      id={`header-${header.column.id}`}
      colSpan={header.colSpan}
      rowSpan={header.rowSpan}
      align="center" // Table Header sẽ luôn căn giữa
      sx={{
        fontSize: 14,
        ...(header.column.columnDef.meta as any)?.headerSx,
      }}
      style={{
        ...getCommonPinningStyles(header.column),
        position: "sticky",
      }}
    >
      <div>
        {flexRender(header.column.columnDef.header, header.getContext())}
      </div>
      <div
        {...{
          onDoubleClick: () => header.column.resetSize(),
          onMouseDown: header.getResizeHandler(),
          onTouchStart: header.getResizeHandler(),
          className: `${styles.resizer} ${
            header.column.getIsResizing() ? styles.isResizing : ""
          }`,
        }}
      />
      {header.column.getCanFilter() &&
      header.column.columnDef?.meta?.filterVariant ? (
        <div>
          <Filter column={header.column} />
        </div>
      ) : null}
    </AppTableCellHeader>
  );
};

export default memo(HeaderTableCell);
