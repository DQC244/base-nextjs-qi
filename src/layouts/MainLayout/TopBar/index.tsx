import { Stack } from "@mui/material";
import React, { memo } from "react";
import ToggleMenu from "./ToggleMenu";
import TitlePage from "./TitlePage";
import User from "./User";
import SchoolName from "./SchoolName";

const TopBar = () => {
  return (
    <Stack
      pl={1.5}
      pr={3}
      height={HEIGHT_TOP_BAR}
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: "1px solid",
        borderColor: "border.main",
        boxShadow: "0px 1.5px 2px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack direction="row" alignItems="center">
        <ToggleMenu />
        <TitlePage />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <SchoolName />
        <User />
      </Stack>
    </Stack>
  );
};

export const HEIGHT_TOP_BAR = 48;

export default memo(TopBar);
