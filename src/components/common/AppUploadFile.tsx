"use client";
import { Box, Button, Stack, StackProps, Typography } from "@mui/material";
import { ReactNode, memo, useEffect, useMemo, useState } from "react";
import { DropzoneOptions, FileWithPath, useDropzone } from "react-dropzone";
import { UploadIcon } from "../icons";

const AppUploadFile = ({
  title = "Tải lên ảnh bìa tài liệu",
  description = "Hỗ trợ các định dạng đuôi JPG, PNG, JPEG",
  dropzoneOptions,
  onClearFile,
  file,
  url,
  hasAction = true,
  ...otherProps
}: AppUpLoadFileProps) => {
  const { getRootProps, getInputProps, open, acceptedFiles } =
    useDropzone(dropzoneOptions);

  const [previewUrl, setPreviewUrl] = useState("");

  const handleClearFile = (event?: React.MouseEvent) => {
    event?.stopPropagation?.();
    (acceptedFiles as FileWithPath[])?.splice(0, acceptedFiles.length);
    onClearFile?.();
    setPreviewUrl("");
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    } else {
      setPreviewUrl("");
    }
  }, [file]);

  const imageSrc = useMemo(() => {
    return previewUrl || url || "";
  }, [previewUrl, url]);

  return (
    <Stack {...otherProps}>
      <Stack
        sx={{
          flex: 1,
          position: "relative",
          border: "1.5px dashed #0A61A2FF",
          borderBottom: "unset",
          minHeight: "120px",
          maxHeight: "300px",
          borderRadius: "4px",
          backgroundColor: "#F0F8FE99",
          opacity: "0.8",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          overflow: "hidden",
          ":hover": { cursor: "pointer" },
        }}
        {...getRootProps()}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flex: 1,
            minHeight: 0,
            minWidth: 0,
          }}
        >
          <input {...getInputProps()} />
          {imageSrc ? (
            <Box
              component="img"
              src={imageSrc}
              alt="Uploaded preview"
              sx={{
                maxWidth: "100%",
                maxHeight: "280px",
                objectFit: "contain",
                borderRadius: "4px",
              }}
            />
          ) : (
            <Stack spacing={1} alignItems="center">
              <UploadIcon
                sx={{
                  width: "40px",
                  height: "38px",
                  cursor: "pointer",
                  color: "primary.main",
                }}
              />
              <Typography textAlign="center" fontWeight={500}>
                {title}
              </Typography>
              <Typography
                variant="caption"
                color="#999"
                textAlign="center"
                sx={{ px: 1 }}
              >
                {description}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>

      {hasAction && (
        <Stack direction="row" width="100%">
          <Button
            size="small"
            variant="outlined"
            color="error"
            sx={{
              flex: 1,
              borderRadius: 0,
              borderBottomLeftRadius: "4px",
            }}
            onClick={handleClearFile}
          >
            Xóa
          </Button>
          <Button
            size="small"
            onClick={open}
            color="primary"
            variant="contained"
            sx={{
              flex: 1,
              borderRadius: 0,
              borderBottomRightRadius: "4px",
            }}
          >
            Chọn ảnh
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default memo(AppUploadFile);

export type AppUpLoadFileProps = StackProps & {
  title?: ReactNode;
  description?: ReactNode;
  file?: File;
  url?: string;
  dropzoneOptions: DropzoneOptions;
  onClearFile?: () => void;
  hasAction?: boolean;
};
