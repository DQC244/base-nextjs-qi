"use client";

import { useAppSelector } from "@/redux/hook";
import { Stack } from "@mui/material";
import React, { memo } from "react";
import Logo from "./Logo";
import MenuSideBarList from "./MenuSideBarList";

const SideBar = () => {
  const isCollapse = useAppSelector((state) => state.appReducer.isCollapse);

  return (
    <Stack
      sx={{
        minWidth: isCollapse ? COLLAPSE_WIDTH : SIDEBAR_WIDTH,
        maxWidth: isCollapse ? COLLAPSE_WIDTH : SIDEBAR_WIDTH,
        height: "100%",
        overflowX: "hidden",
        transition: "all 0.25s linear",
        boxShadow: "1.5px 0px 2px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Logo />
      <Stack
        pb={3}
        className="custom-scrollbar"
        sx={{
          minHeight: 0,
          flex: 1,
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.3) !important",
          },
        }}
      >
        <MenuSideBarList />
      </Stack>
    </Stack>
  );
};

export const SIDEBAR_WIDTH = 270;
export const COLLAPSE_WIDTH = 70;

export default memo(SideBar);
