import React, { memo } from "react";
import { Button } from "@mui/material";
import AppModal, { AppModalProps } from "./AppModal";

const AppConfirmModal = ({
  onClose,
  onConfirm,
  labelCancel = "Hủy",
  labelConfirm = "Xác nhận",
  ...otherProps
}: AppConfirmModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AppModal
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: 460,
        },
      }}
      modalContentProps={{
        sx: {
          py: 0,
        },
      }}
      modalActionsProps={{
        children: (
          <>
            <Button
              sx={{ minWidth: 90 }}
              variant="outlined"
              color="primary"
              onClick={onClose}
            >
              {labelCancel}
            </Button>
            <Button
              sx={{ minWidth: 90 }}
              onClick={handleConfirm}
              variant="contained"
            >
              {labelConfirm}
            </Button>
          </>
        ),
      }}
      {...otherProps}
    />
  );
};

export type AppConfirmModalProps = AppModalProps & {
  labelCancel?: string;
  labelConfirm?: string;
  onConfirm: () => void;
};

export default memo(AppConfirmModal);
