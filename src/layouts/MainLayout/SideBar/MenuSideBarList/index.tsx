"use client";

import { useAppSelector } from "@/redux/hook";
import React from "react";
import MenuContainer from "./MenuContainer";

const MenuSideBarList = () => {
  const menuSidebar = useAppSelector((state) => state.appReducer.menuSidebar);

  return (
    <>
      {menuSidebar.map((item) => (
        <MenuContainer key={item.id} menu={item} />
      ))}
    </>
  );
};

export default MenuSideBarList;
