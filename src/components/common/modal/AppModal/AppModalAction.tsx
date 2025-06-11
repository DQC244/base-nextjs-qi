import { DialogActions, DialogActionsProps } from "@mui/material";
import { memo } from "react";

const AppModalActions = ({
  children,
  sx,
  ...otherProps
}: DialogActionsProps) => {
  return (
    <DialogActions
      id="footer-modal"
      sx={{
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        p: "8px 24px",
        justifyContent: "flex-end",
        gap: "8px",
        ...sx,
      }}
      disableSpacing
      {...otherProps}
    >
      {children}
    </DialogActions>
  );
};

export default memo(AppModalActions);
