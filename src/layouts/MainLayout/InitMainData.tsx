"use client";

import { MENU_TYPE } from "@/models/menu.model";
import { appActions } from "@/redux/app.slice";
import { useAppDispatch } from "@/redux/hook";
import { memo, useEffect } from "react";
export const dynamic = "force-dynamic";

const InitMainData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appActions.getMenuSideBar(MENU_TYPE.SYSTEM_MANAGEMENT_CMS));
    dispatch(appActions.getUserInfo({}));
  }, []);
  return null;
};

export default memo(InitMainData);
