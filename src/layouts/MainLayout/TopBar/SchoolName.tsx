import { SchoolIcon } from "@/components/icons";
import { useAppSelector } from "@/redux/hook";
import { Box, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

const SchoolName = () => {
  const name = useAppSelector((state) => state.appReducer.schoolInfo?.name);

  return (
    name && (
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          color: "primary.main",
          fontSize: 20,
          borderRadius: "4px",
        }}
      >
        <Box
          sx={{
            p: "2px",
            bgcolor: "primary.main",
          }}
        >
          <SchoolIcon
            sx={{
              color: "common.white",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "13px",
            lineHeight: "15px",
            fontWeight: 500,
            px: 2,
            py: "2px",
          }}
        >
          {name}
        </Typography>
      </Stack>
    )
  );
};

export default memo(SchoolName);
