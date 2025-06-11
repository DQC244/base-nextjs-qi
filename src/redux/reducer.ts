import { combineSlices } from "@reduxjs/toolkit";
import { appSlice } from "./app.slice";

export interface LazyLoadedSlices {}

export const rootReducer =
  combineSlices(appSlice).withLazyLoadedSlices<LazyLoadedSlices>();
