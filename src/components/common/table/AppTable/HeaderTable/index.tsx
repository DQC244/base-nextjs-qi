import { memo } from "react";
import HeaderTableCell from "./HeaderTableCell";
import AppTableRow from "../../AppTableRow";

const HeaderTable = ({ headerGroup }: HeaderTableProps) => {
  return (
    <AppTableRow
      sx={{
        backgroundColor: "white",
      }}
    >
      {headerGroup.map((header: any) => {
        return <HeaderTableCell key={header.id} header={header} />;
      })}
    </AppTableRow>
  );
};

type HeaderTableProps = {
  headerGroup: any;
};

export default memo(HeaderTable);
