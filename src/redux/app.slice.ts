import { AppConstant, PathConstant } from "@/constant";
import { IDomainInfo, ISchool, IUserInfo } from "@/models/app.model";
import { IMenuItemTree, MENU_TYPE } from "@/models/menu.model";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

/* ------------- Initial State ------------- */
export interface IInitialState {
  isFetching: boolean;
  error: object | string | null;

  isCollapse: boolean;
  schoolInfo: ISchool | null;

  menuSidebar: IMenuItemTree[];
  expandId: null | number;

  domainInfo: null | IDomainInfo;
  userInfo: null | IUserInfo;
}

const initialState: IInitialState = {
  isFetching: false,
  error: null,

  isCollapse: false,
  schoolInfo: null,

  menuSidebar: [],
  expandId: null,

  domainInfo: null,
  userInfo: null,
};

/* ------------- Selector ------------- */
export const selectAppState = (state: { appReducer: IInitialState }) =>
  state.appReducer;

export const selectSystemMenuItem = createSelector(
  [selectAppState],
  (appState) =>
    appState.menuSidebar.find((item) => item.href === PathConstant.SYSTEM)
);

/* ------------- Reducers ------------- */
const reducers = {
  getDomainInfo: (state: IInitialState) => {
    state.isFetching = true;
    state.error = null;
  },
  getDomainInfoSuccess(
    state: IInitialState,
    action: PayloadAction<IDomainInfo>
  ) {
    state.domainInfo = action.payload;
  },

  getUserInfo: (
    state: IInitialState,
    action: PayloadAction<{ onSuccess?: () => void }>
  ) => {},
  getUserInfoSuccess: (
    state: IInitialState,
    action: PayloadAction<IUserInfo>
  ) => {
    const newUserInfo = action.payload;
    state.userInfo = newUserInfo;
    if (newUserInfo?.schoolInfos.length > 0) {
      state.schoolInfo = newUserInfo.schoolInfos[0];
    }
  },

  getMenuSideBar: (state: IInitialState, action: PayloadAction<MENU_TYPE>) => {
    state.isFetching = true;
  },
  getMenuSideBarSuccess: (
    state: IInitialState,
    action: PayloadAction<IMenuItemTree[]>
  ) => {
    state.isFetching = false;
    state.menuSidebar = action.payload;
    state.error = null;
  },
  toggleSideBar: (state: IInitialState) => {
    state.isCollapse = !state.isCollapse;
    state.expandId = null;
  },
  changeExpandId: (
    state: IInitialState,
    action: PayloadAction<number | null>
  ) => {
    state.expandId = action.payload;
  },

  clearToken: (state: IInitialState) => {
    Cookies.remove(AppConstant.ACCESS_TOKEN);
    Cookies.remove(AppConstant.COOKIE_KEY.orgId);
  },
  logout: (state: IInitialState) => {
    Cookies.remove(AppConstant.ACCESS_TOKEN);
    Cookies.remove(AppConstant.COOKIE_KEY.orgId);
    state.domainInfo = null;
    state.userInfo = null;
  },

  // Common
  appFailure: (state: IInitialState, action: PayloadAction<any>) => {
    const error = action.payload ? action.payload : {};
    state.isFetching = false;
    state.error = error;
  },
  appReset: (state: IInitialState) => {
    state.isFetching = false;
    state.error = null;

    state.schoolInfo = null;
  },
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers,
});

const appReducer = appSlice.reducer;

export const appActions = appSlice.actions;

export default appReducer;
