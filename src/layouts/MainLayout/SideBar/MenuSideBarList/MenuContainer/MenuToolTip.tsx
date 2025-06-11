import { AppLink } from "@/components/common";
import { IMenuItemTree } from "@/models/menu.model";
import { Tooltip, TooltipProps, Typography } from "@mui/material";
import React from "react";

const MenuToolTip = ({
  list,
  children,
  isCollapse,
  ...otherProps
}: MenuToolTipProps) => {
  return isCollapse && Boolean(list.length) ? (
    <Tooltip
      placement="right"
      slotProps={{
        popper: {
          sx: {
            "& .MuiTooltip-tooltip": {
              pt: 2,
              px: 1.5,
              backgroundColor: "primary.background",
            },
          },
        },
      }}
      title={
        <>
          {list.map((item) => (
            <Typography
              component={AppLink}
              href={item.href}
              mb={2}
              key={item.id}
              display="block"
              color="text.primary"
            >
              {item.name}
            </Typography>
          ))}
        </>
      }
      {...otherProps}
    >
      {children}
    </Tooltip>
  ) : (
    <>{children}</>
  );
};

type MenuToolTipProps = Omit<TooltipProps, "title"> & {
  list: IMenuItemTree[];
  isCollapse?: boolean;
};

export default MenuToolTip;
