import { AppImage, AppLink } from "@/components/common";
import { ImageConstant, PathConstant } from "@/constant";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Notfound = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Box width={747} height={500} position="relative">
        <Typography
          variant="h1"
          sx={{
            fontSize: 128,
            lineHeight: "154px",
            position: "absolute",
            top: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          404
        </Typography>
        <AppImage
          src={ImageConstant.NotFoundImage}
          width={747}
          height={500}
          alt="not found"
        />
      </Box>
      <Typography variant="h5" mb={1}>
        Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm
      </Typography>
      <AppLink
        href={PathConstant.ROOT}
        style={{
          background: "var(--mui-palette-primary-main)",
          color: "var(--mui-palette-common-white)",
          padding: "8px 12px",
          borderRadius: 4,
        }}
      >
        Quay lại trang chủ
      </AppLink>
    </Stack>
  );
};

export default Notfound;
