import {
  Dialog,
  DialogActionsProps,
  DialogProps,
  IconButton,
  IconButtonProps,
  TypographyProps,
} from "@mui/material";
import { Fragment, ReactNode, memo } from "react";
import AppModalAction from "./AppModalAction";
import AppModalContent, { AppModalContentProps } from "./AppModalContent";
import AppModalTitle from "./AppModalTitle";
import { CloseIcon } from "@/components/icons";

const AppModal = ({
  isOpen,
  sx,
  hasCloseIcon = true,
  modalTitle,
  modalContent,
  modalActions,
  fullScreen,
  modalTitleProps = {},
  modalContentProps = {},
  modalActionsProps = {},
  closeIconProps = {},
  onClose,
  ...otherProps
}: AppModalProps) => {
  const { content, ...otherModalContentProps } = modalContentProps;
  const { title, ...otherModalTitleProps } = modalTitleProps;
  const { children: dialogActionsChildren, ...otherDialogActionsProps } =
    modalActionsProps;
  const {
    sx: closeIconSx,
    customIcon,
    ...otherCloseIconProps
  } = closeIconProps;

  return (
    <Dialog
      open={isOpen}
      fullScreen={fullScreen}
      scroll="paper"
      disableEnforceFocus
      sx={{
        "& .MuiDialog-paper": {
          minWidth: 460,
          borderRadius: fullScreen ? 0 : "4px",
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
        },
        "& #pagination": {
          boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.1)",
        },
        ...sx,
      }}
      slotProps={{
        paper: {
          className: "custom-scrollbar",
        },
      }}
      {...otherProps}
    >
      {hasCloseIcon && (
        <IconButton
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
            fontSize: 22,
            color: "text.primary",
            ...closeIconSx,
          }}
          onClick={() => onClose()}
          {...otherCloseIconProps}
        >
          {customIcon || <CloseIcon />}
        </IconButton>
      )}

      {modalTitle ?? (
        <AppModalTitle {...otherModalTitleProps}>{title}</AppModalTitle>
      )}

      {modalContent ?? (
        <AppModalContent {...otherModalContentProps}>{content}</AppModalContent>
      )}

      {modalActions ??
        (dialogActionsChildren ? (
          <AppModalAction {...otherDialogActionsProps}>
            {dialogActionsChildren}
          </AppModalAction>
        ) : (
          <Fragment />
        ))}
    </Dialog>
  );
};

export type AppModalProps = Omit<DialogProps, "open"> & {
  isOpen: boolean;
  hasCloseIcon?: boolean;
  modalTitle?: ReactNode;
  modalContent?: ReactNode;
  modalActions?: ReactNode;
  modalTitleProps?: TypographyProps & {
    title?: string;
  };
  modalContentProps?: Omit<AppModalContentProps, "content"> & {
    content?: ReactNode;
  };
  modalActionsProps?: DialogActionsProps;
  closeIconProps?: IconButtonProps & {
    customIcon?: ReactNode;
  };
  onClose: () => void;
  component?: string;
};

export default memo(AppModal);
