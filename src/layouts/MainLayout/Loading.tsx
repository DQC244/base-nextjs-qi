import { AppConstant, ImageConstant } from "@/constant";
import { Box } from "@mui/material";
import React, { memo } from "react";

const Loading = () => {
  return (
    <Box
      id={AppConstant.APP_PROGRESS_ID}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        display: "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "60px 60px",
        backgroundImage: `url(${ImageConstant.LoadingGif})`,
      }}
    />
  );
};

export default memo(Loading);
