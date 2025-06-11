import { DeleteIcon } from "@/components/icons";
import { IconButton, IconButtonProps } from "@mui/material";
import { memo } from "react";

const DeleteCell = ({ sx, ...otherProps }: DeleteCellProps) => {
  return (
    <IconButton
      id="delete"
      sx={{
        width: 24,
        height: 24,
        fontSize: 20,
        ...sx,
      }}
      {...otherProps}
    >
      <DeleteIcon />
    </IconButton>
  );
};

type DeleteCellProps = IconButtonProps;

export default memo(DeleteCell);
