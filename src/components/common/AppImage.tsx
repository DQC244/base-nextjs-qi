"use client";

import React, { memo, useEffect, useMemo, useState } from "react";
import { Box, BoxProps } from "@mui/material";

const AppImage = ({
  width,
  height,
  classes,
  src,
  boxProps,
  children,
  fallBackUrl,
  alt,
  objectPosition,
  objectFit,
  ...imgProps
}: AppImageType) => {
  const [isError, setIsError] = useState(false);

  const widthValue = useMemo(() => width || "unset", [width]);
  const heightValue = useMemo(() => height || "unset", [height]);

  useEffect(() => {
    setIsError(false);
  }, [src]);

  return (
    <Box
      position="relative"
      width={widthValue}
      height={heightValue}
      className={classes?.root || ""}
      {...boxProps}
    >
      <span
        style={{
          boxSizing: "border-box",
          display: "block",
          overflow: "hidden",
          width: "initial",
          height: "initial",
          background: "none",
          opacity: 1,
          border: "0px",
          margin: "0px",
          padding: "0px",
          position: "absolute",
          inset: "0px",
        }}
      >
        <img
          src={isError ? fallBackUrl : getUrlImage(src)}
          alt={alt || "image"}
          onError={() => setIsError(true)}
          {...imgProps}
          style={{
            borderRadius: "8px",
            position: "absolute",
            inset: "0px",
            boxSizing: "border-box",
            padding: "0px",
            border: "none",
            margin: "auto",
            display: "block",
            width: "0px",
            height: "0px",
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: objectFit || "cover",
            objectPosition,
            ...imgProps?.style,
          }}
          draggable={false}
          loading="lazy"
        />
      </span>
      {children}
    </Box>
  );
};

type ObjectFitType = "fill" | "contain" | "cover" | "none" | "scale-down";

export type AppImageType = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src"
> & {
  width?: number | string;
  height?: number | string;
  src?: string;
  alt?: string;
  classes?: {
    root?: string;
  };
  objectFit?: ObjectFitType;
  boxProps?: BoxProps;
  fallBackUrl?: string;
  priority?: any;
  objectPosition?: any;
  quality?: number;
  unoptimized?: boolean;
};

export const getUrlImage = (value?: any): string => {
  const regex = /^(\/|https?:\/\/).*/;
  if (regex.test(value)) return value;
  return "";
};

export default memo(AppImage);
