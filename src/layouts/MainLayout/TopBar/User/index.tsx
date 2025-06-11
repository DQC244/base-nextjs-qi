"use client";
import { useAppSelector } from "@/redux/hook";
import { Avatar, Stack, Typography } from "@mui/material";
import React, { memo, useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
const MenuDropdown = dynamic(() => import("./MenuDropdown"), { ssr: false });

const User = () => {
  const userInfo = useAppSelector((state) => state.appReducer.userInfo);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const username = useMemo(() => {
    const name = userInfo?.fullName
      ? userInfo.fullName
      : (userInfo?.lastName || "") + " " + (userInfo?.firstName || "");
    return name;
  }, [userInfo]);

  const handlePopoverOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handlePopoverClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    userInfo && (
      <Stack direction="row" alignItems="center">
        <Typography className="text-ellipsis-2-row" mr={1.5} variant="h5">
          {username}
        </Typography>
        <Avatar
          aria-haspopup="true"
          sx={{
            border: `1px solid `,
            borderColor: "grey.400",
            cursor: "pointer",
            width: 32,
            height: 32,
          }}
          src={userInfo.avatar}
          onClick={handlePopoverOpen}
        />
        <MenuDropdown
          onClose={handlePopoverClose}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
        />
      </Stack>
    )
  );
};

export default memo(User);
