import { memo } from "react";
import AppTableCell from "../AppTableCell";
import AppTableRow from "../AppTableRow";

const RowNoData = ({ colSpan }: RowNoDataProps) => {
  return (
    <AppTableRow>
      <AppTableCell
        colSpan={colSpan}
        sx={{
          textAlign: "center ",
        }}
      >
        {"Không có dữ liệu."}
      </AppTableCell>
    </AppTableRow>
  );
};

type RowNoDataProps = {
  colSpan: number;
};

export default memo(RowNoData);
