import React, { memo } from "react";
import AppTableRow from "../../AppTableRow";
import RowTableCell from "./RowTableCell";

type RowTableProps = {
  row: any;
  isSelected: boolean;
  isExpanded: boolean;
  canSelect: boolean;
  isSomeSelected: boolean;
  isGrouped: boolean;
  canExpand: boolean;
};

// const RowTable = memo(
//   ({ row, isSelected }: RowTableProps) => {
//     return (
//       <AppTableRow data-state={isSelected ? "selected" : undefined}>
//         {row.map((cell: any) => {
//           if (cell.isRowSpanned) return null;
//           return <RowTableCell key={cell.id} cell={cell} />;
//         })}
//       </AppTableRow>
//     );
//   },
//   (prev, next) => {
//     return (
//       prev.isSelected === next.isSelected &&
//       prev.isExpanded === next.isExpanded &&
//       prev.canSelect === next.canSelect &&
//       prev.isSomeSelected === next.isSomeSelected &&
//       prev.isGrouped === next.isGrouped &&
//       prev.canExpand === next.canExpand &&
//       prev.row.length === next.row.length &&
//       prev.row.every((cell: any, i: number) => {
//         const nextCell = next.row[i];
//         return cell.id === nextCell.id && cell.column.id === nextCell.column.id;
//       })
//     );
//   }
// );
// RowTable.displayName = "RowTable";

const RowTable = ({ row, isSelected }: RowTableProps) => {
  return (
    <AppTableRow data-state={isSelected ? "selected" : undefined}>
      {row.map((cell: any) => {
        if (cell.isRowSpanned) return null;
        return <RowTableCell key={cell.id} cell={cell} />;
      })}
    </AppTableRow>
  );
};

RowTable.displayName = "RowTable";

export default RowTable;
