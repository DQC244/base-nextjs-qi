import { DataConstant } from "@/constant";
import { Switch, SwitchProps } from "@mui/material";
import { ChangeEvent, memo, useMemo } from "react";

const StatusCell = ({
  status,
  onStatusChange,
  ...otherProps
}: StatusCellProps) => {
  const isActive = useMemo(
    () => status === DataConstant.STATUS_TYPE.active,
    [status]
  );

  return (
    <Switch onChange={onStatusChange} checked={isActive} {...otherProps} />
  );
};

type StatusCellProps = Omit<SwitchProps, "onChange" | "checked"> & {
  status: DataConstant.STATUS_TYPE;

  onStatusChange?: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
};

export default memo(StatusCell);
