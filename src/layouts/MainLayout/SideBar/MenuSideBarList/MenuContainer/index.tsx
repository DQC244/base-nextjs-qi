"use client";

import { IMenuItemTree } from "@/models/menu.model";
import { Box, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import DOMPurify from "dompurify";
import styles from "./menu.module.scss";
import { usePathname, useRouter } from "next/navigation";
import ItemCollapse from "./ItemCollapse";
import { ArrowIcon } from "@/components/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { appActions } from "@/redux/app.slice";
import MenuToolTip from "./MenuToolTip";
import { AppLink } from "@/components/common";

const MenuContainer = ({ menu }: MenuContainerProps) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { expandId, isCollapse } = useAppSelector((state) => state.appReducer);

  const hasChild = Boolean(menu.children.length) && Boolean(menu.isShowSubMenu);

  const isActive = useMemo(
    () => isCurrentPathInMenuTree(pathname, menu),
    [pathname, menu]
  );

  const handleClick = () => {
    if (hasChild) {
      if (expandId === menu.id) {
        dispatch(appActions.changeExpandId(null));
        return;
      }
      dispatch(appActions.changeExpandId(menu.id));
    }
  };

  return (
    <div>
      <MenuToolTip list={menu.children} isCollapse={isCollapse}>
        <Stack
          onClick={handleClick}
          component={hasChild ? "div" : AppLink}
          href={hasChild ? undefined : menu.href}
          direction="row"
          px={isCollapse ? 2.4 : 1.35}
          py={1.5}
          className={isActive ? styles.menuActive : ""}
          sx={{
            cursor: "pointer",
            color: "textInverse",
            borderLeft: "4px solid transparent",
            "&:hover": {
              backgroundColor: "primary.light",
              borderLeft: "4px solid",
              borderColor: "primary.main",
              color: "primary.main",
            },
          }}
        >
          <Stack direction="row" alignItems="center" width="100%">
            {menu?.icon && (
              <Box
                sx={{
                  height: 24,
                  "& svg": {
                    width: 24,
                    height: 24,
                    "& path": {
                      fill: "currentColor",
                    },
                    "& rect": {
                      stroke: "currentColor",
                    },
                    "& rect:last-of-type": {
                      fill: "currentColor",
                    },
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(menu.icon),
                }}
              />
            )}
            <Typography
              sx={{
                ml: 2.25,
                minWidth: 0,
                flex: 1,
                whiteSpace: "nowrap",
              }}
              className="ellipsis"
            >
              {menu.name}
            </Typography>
            {hasChild && (
              <ArrowIcon
                sx={{
                  fontSize: 20,
                  transition: `all 0.25s linear`,
                  transform:
                    expandId === menu.id ? "rotate(90deg)" : "rotate(-90deg)",
                }}
              />
            )}
          </Stack>
        </Stack>
      </MenuToolTip>
      {hasChild && !isCollapse && (
        <ItemCollapse menuList={menu.children} parrentId={menu.id} />
      )}
    </div>
  );
};

export default MenuContainer;

type MenuContainerProps = {
  menu: IMenuItemTree;
};

const isCurrentPathInMenuTree = (
  currentPathname: string,
  menu: IMenuItemTree
): boolean => {
  if (menu.href === currentPathname) {
    return true;
  }

  for (const child of menu.children || []) {
    if (isCurrentPathInMenuTree(currentPathname, child)) {
      return true;
    }
  }

  return false;
};
