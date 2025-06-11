import { LogoutIcon } from "@/components/icons";
import { PathConstant } from "@/constant";
import { appActions } from "@/redux/app.slice";
import { useAppDispatch } from "@/redux/hook";
import { Popover, PopoverProps, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { memo } from "react";
type MenuDropdownProps = PopoverProps & {};

const MenuDropdown = ({ ...otherProps }: MenuDropdownProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(appActions.logout());
    router.push(PathConstant.LOGIN);
  };

  return (
    <Popover
      id="mouse-over-popover"
      disableRestoreFocus
      sx={{
        marginTop: "8px",
        borderRadius: "4px",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      slotProps={{
        paper: {
          sx: {
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",
            py: 1,
          },
        },
      }}
      {...otherProps}
    >
      <Stack
        onClick={handleLogout}
        alignItems="center"
        direction="row"
        spacing={1}
        sx={{
          color: "error.main",
          cursor: "pointer",
          width: "186px",
          px: 2.5,
          lineHeight: 24,
          height: "40px",
          "&&:hover": {
            backgroundColor: "grey.100",
          },
        }}
      >
        <LogoutIcon />
        <Typography>Đăng xuất</Typography>
      </Stack>
    </Popover>
  );
};

export default memo(MenuDropdown);
