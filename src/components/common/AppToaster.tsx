"use client";

import React, { memo } from "react";
import { Toaster } from "sonner";
import {
  CloseIcon,
  ErrorSnackBarIcon,
  InfoIcon,
  SuccessIcon,
  WarningNotifyIcon,
} from "../icons";

const AppToaster = () => {
  return (
    <Toaster
      visibleToasts={5}
      icons={{
        close: <CloseIcon />,
        success: (
          <SuccessIcon
            sx={{
              color: "#34a853",
              fontSize: 24,
            }}
          />
        ),
        warning: (
          <WarningNotifyIcon
            sx={{
              color: "#fbbc04",
              fontSize: 24,
            }}
          />
        ),
        error: (
          <ErrorSnackBarIcon
            sx={{
              color: "#ea4335",
              fontSize: 24,
            }}
          />
        ),
        info: (
          <InfoIcon
            sx={{
              fontSize: 24,
              color: "#4285f4",
            }}
          />
        ),
      }}
      toastOptions={{
        closeButton: true,
        classNames: {
          toast: "toast",
          title: "title-toast",
          success: "success-toast",
          warning: "warning-toast",
          error: "error-toast",
          description: "description-toast",
          info: "info-toast",
          closeButton: "close-button-toast",
          content: "content-toast",
        },
        duration: 5000,
      }}
      position="top-right"
    />
  );
};

export default memo(AppToaster);
