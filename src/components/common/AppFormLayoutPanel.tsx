import { InputLabel, Stack, StackProps } from "@mui/material";
import { DocumentIcon, WarningNotifyIcon } from "@/components/icons";
import { ReactNode, memo } from "react";

const AppFormLayoutPanel = ({
  children,
  title,
  sx,
  titleProps,
  actions,
  isDoc,
  required = false,
  customIcon,
  childrenProps,
  ...otherProps
}: AppFormLayoutPanelProps) => {
  return (
    <Stack
      width="100%"
      sx={{
        borderRadius: "2px",
        backgroundColor: "common.white",
        ...sx,
      }}
      {...otherProps}
    >
      {title && (
        <Stack
          alignSelf="flex-start"
          direction="row"
          alignItems="flex-end"
          borderBottom="1px solid"
          borderColor="border.main"
          width="100%"
          px={2.5}
          py={1}
          {...titleProps}
        >
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            fontSize={18}
          >
            {customIcon ? (
              customIcon
            ) : isDoc ? (
              <DocumentIcon sx={{ fontSize: 20 }} color="primary" />
            ) : (
              <WarningNotifyIcon color="primary" />
            )}
            <InputLabel
              sx={{
                color: "common.black",
                fontSize: 16,
              }}
              required={required}
            >
              {title}
            </InputLabel>
          </Stack>
          {actions}
        </Stack>
      )}

      <Stack p={2.5} alignItems="center" {...childrenProps}>
        {children}
      </Stack>
    </Stack>
  );
};

export type AppFormLayoutPanelProps = Omit<StackProps, "title"> & {
  title?: ReactNode;
  isDoc?: boolean;
  titleProps?: StackProps;
  actions?: ReactNode;
  required?: boolean;
  customIcon?: ReactNode;
  childrenProps?: StackProps;
};

export default memo(AppFormLayoutPanel);
