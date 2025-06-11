"use client";
import { Controller, Control } from "react-hook-form";
import AppUploadFile from "@/components/common/AppUploadFile";
import { DropzoneOptions } from "react-dropzone";
import { ReactNode } from "react";
import { SxProps, Theme, StackProps } from "@mui/material";
import { AppConstant } from "@/constant";

type AppUploadFileControlProps = {
  control: Control<any>;
  name: string;
  url?: string;
  title?: ReactNode;
  description?: ReactNode;
  dropzoneOptions?: Partial<DropzoneOptions>;
  sx?: SxProps<Theme>;
} & StackProps;

export default function AppUploadFileControl({
  control,
  name,
  url,
  title,
  description,
  dropzoneOptions: overrideDropzoneOptions = {},
  sx,
  ...stackProps
}: AppUploadFileControlProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        const mergedDropzoneOptions: DropzoneOptions = {
          accept: AppConstant.ACCEPT_IMAGE,
          multiple: false,
          onDrop: (acceptedFiles) => {
            if (acceptedFiles?.length) {
              onChange(acceptedFiles[0]);
            }
          },
          ...overrideDropzoneOptions,
        };

        return (
          <AppUploadFile
            file={value}
            url={url}
            dropzoneOptions={mergedDropzoneOptions}
            onClearFile={() => onChange(undefined)}
            title={title}
            description={description}
            sx={sx}
            {...stackProps}
          />
        );
      }}
    />
  );
}
