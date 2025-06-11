import { IconButton, IconButtonProps, TableCellProps } from "@mui/material";
import { memo } from "react";
import { EditIcon } from "@/components/icons";

const EditCell = ({ ...otherProps }: IconButtonProps) => {
  return (
    <IconButton
      sx={{
        color: "text.primary",
        height: 24,
        width: 24,
        fontSize: 20,
      }}
      {...otherProps}
    >
      <EditIcon />
    </IconButton>
  );
};

export default memo(EditCell);
