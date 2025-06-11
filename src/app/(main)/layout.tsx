"use client";

import React, { ReactNode } from "react";
import MainLayout from "@/layouts/MainLayout";
import InitMainData from "@/layouts/MainLayout/InitMainData";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
      <InitMainData />
    </>
  );
};

export default layout;
