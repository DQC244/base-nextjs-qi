"use client";

import { ImageConstant } from "@/constant";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppStore } from "@/redux/hook";
import { createInjectableSaga } from "@/saga/injectableSaga";
import { loginSaga } from "./login.saga";
import { appActions } from "@/redux/app.slice";

const Login = () => {
  const store = useAppStore();
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    createInjectableSaga("loginReducer", loginSaga).injectInto(store);
    setIsClient(true);
  }, []);

  useEffect(() => {
    dispatch(appActions.logout());
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Stack
        height="100vh"
        bgcolor="background.darkblue"
        paddingBottom="5px"
        sx={{
          position: "relative",
          background: `no-repeat top left / auto 100% url(${ImageConstant.BackgroundLoginImage})`,
        }}
      ></Stack>
    </>
  );
};

export default Login;
