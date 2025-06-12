"use client";

import { useAppSelector } from "@/redux/hook";
import React from "react";
import dynamic from "next/dynamic";
const MenuContainer = dynamic(() => import("./MenuContainer"), {
  ssr: false,
});

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
