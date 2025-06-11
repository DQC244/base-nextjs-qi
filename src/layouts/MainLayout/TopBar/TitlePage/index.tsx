"use client";
import { useAppSelector } from "@/redux/hook";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { memo, useMemo } from "react";

const TitlePage = () => {
  const pathname = usePathname();
  const menuSidebar = useAppSelector((state) => state.appReducer.menuSidebar);

  const title = useMemo(
    () => getPageNameByHref(menuSidebar, pathname),
    [pathname, menuSidebar]
  );

  return (
    <Typography variant="h4" ml={1}>
      {title}
    </Typography>
  );
};

export default memo(TitlePage);

const getPageNameByHref = (
  menuList: any[],
  targetHref: string
): string | undefined => {
  for (const item of menuList) {
    if (item.href === targetHref) return item.name;

    if (item.children && Array.isArray(item.children)) {
      const childResult = getPageNameByHref(item.children, targetHref);
      if (childResult) return childResult;
    }
  }

  return undefined;
};
