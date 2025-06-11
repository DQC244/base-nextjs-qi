import { Button, Stack } from "@mui/material";
import { useCallback } from "react";
import { DateObject } from "react-multi-date-picker";

const ActionPlugin = ({
  DatePicker,
  onSelectRanger,
  onApply,
  position,
}: {
  DatePicker: any;
  onSelectRanger: (range: DateObject[]) => void;
  onApply: () => void;
  position: string;
}) => {
  const handleCancel = useCallback(() => {
    onSelectRanger([]);
  }, [onSelectRanger]);

  return (
    <Stack
      className="action-plugin"
      direction="row"
      justifyContent="flex-end"
      spacing={1}
      p={1}
    >
      <Button onClick={handleCancel}>Huỷ bỏ</Button>
      <Button
        onClick={() => {
          DatePicker.closeCalendar();
          onApply();
        }}
        variant="contained"
      >
        Áp dụng
      </Button>
    </Stack>
  );
};

export default ActionPlugin;
