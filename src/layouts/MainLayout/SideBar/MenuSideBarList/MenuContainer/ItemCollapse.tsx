"use client";

import { AppLink } from "@/components/common";
import { IMenuItemTree } from "@/models/menu.model";
import { useAppSelector } from "@/redux/hook";
import { Collapse, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

const ItemCollapse = ({ menuList, parrentId }: ItemCollapseProps) => {
  const expandId = useAppSelector((state) => state.appReducer.expandId);
  const pathname = usePathname();

  return (
    <Collapse
      in={expandId === parrentId}
      sx={{
        pl: 7.5,
      }}
    >
      {menuList.map((item) => (
        <Typography
          component={AppLink}
          href={item.href}
          sx={{
            textDecoration: "none",
            display: "block",
            color: item.href === pathname ? "primary.main" : "textInverse",
            py: 1,
            "&:hover": {
              color: "primary.main",
            },
          }}
          whiteSpace="nowrap"
          color="textInverse"
          key={item.id}
        >
          {item.name}
        </Typography>
      ))}
    </Collapse>
  );
};

type ItemCollapseProps = {
  menuList: IMenuItemTree[];
  parrentId: number;
};

export default ItemCollapse;
