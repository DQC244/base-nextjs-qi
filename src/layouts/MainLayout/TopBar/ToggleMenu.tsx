"use client";

import { ToggleMenuIcon } from "@/components/icons";
import { appActions } from "@/redux/app.slice";
import { useAppDispatch } from "@/redux/hook";
import { IconButton } from "@mui/material";
import React from "react";

const ToggleMenu = () => {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      onClick={() => dispatch(appActions.toggleSideBar())}
      sx={{
        borderRadius: "4px",
        fontSize: 16,
        color: "text.primary",
        width: 40,
        height: 40,
        "&:hover": {
          backgroundColor: "grey.300",
        },
      }}
    >
      <ToggleMenuIcon />
    </IconButton>
  );
};

export default ToggleMenu;
