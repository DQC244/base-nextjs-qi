import { AppConstant, PathConstant } from "@/constant";
import { IDomainInfo, ISchool, IUserInfo } from "@/models/app.model";
import { IMenuItemTree, MENU_TYPE } from "@/models/menu.model";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const MENU: any[] = [
  {
    children: [],
    listGroupsUnitCode: ["02", "03", "04", "05"],
    name: "Tổng quan",
    icon: '<svg   xmlns="http://www.w3.org/2000/svg"   width="24"   height="24"   viewBox="0 0 24 24" >   <g clipPath="url(#clip0_1940_2885)">     <path       d="M22 14.5C22.28 14.5 22.5 14.72 22.5 15V22C22.5 22.28 22.28 22.5 22 22.5H15C14.72 22.5 14.5 22.28 14.5 22V15C14.5 14.72 14.72 14.5 15 14.5H22ZM22 13H15C13.9 13 13 13.9 13 15V22C13 23.1 13.9 24 15 24H22C23.1 24 24 23.1 24 22V15C24 13.9 23.1 13 22 13Z"       fill="currentColor"     />     <path       d="M22 1.5C22.28 1.5 22.5 1.72 22.5 2V9C22.5 9.28 22.28 9.5 22 9.5H15C14.72 9.5 14.5 9.28 14.5 9V2C14.5 1.72 14.72 1.5 15 1.5H22ZM22 0H15C13.9 0 13 0.9 13 2V9C13 10.1 13.9 11 15 11H22C23.1 11 24 10.1 24 9V2C24 0.9 23.1 0 22 0Z"       fill="currentColor"     />     <path       d="M9 14.5C9.28 14.5 9.5 14.72 9.5 15V22C9.5 22.28 9.28 22.5 9 22.5H2C1.72 22.5 1.5 22.28 1.5 22V15C1.5 14.72 1.72 14.5 2 14.5H9ZM9 13H2C0.9 13 0 13.9 0 15V22C0 23.1 0.9 24 2 24H9C10.1 24 11 23.1 11 22V15C11 13.9 10.1 13 9 13Z"       fill="currentColor"     />     <path       d="M9 1.5C9.28 1.5 9.5 1.72 9.5 2V9C9.5 9.28 9.28 9.5 9 9.5H2C1.72 9.5 1.5 9.28 1.5 9V2C1.5 1.72 1.72 1.5 2 1.5H9ZM9 0H2C0.9 0 0 0.9 0 2V9C0 10.1 0.9 11 2 11H9C10.1 11 11 10.1 11 9V2C11 0.9 10.1 0 9 0Z"       fill="currentColor"     />   </g>   <defs>     <clipPath id="clip0_1940_2885">       <rect width="24" height="24" fill="white" />     </clipPath>   </defs> </svg>',
    status: 1,
    parentId: 0,
    isSystem: 0,
    menuTypeId: 1,
    href: "/",
    order: 1,
    isRoot: 0,
    groupUnitCode: "02,03,04,05",
    isShowSubMenu: 1,
    isBetaMenu: 1,
    id: 30338,
    createdBy: 1,
    updatedBy: 1,
    createdAt: "2025-03-13T09:10:26.863",
    updatedAt: "2025-05-22T08:34:21.993",
  },
  {
    children: [],
    listGroupsUnitCode: ["02", "03", "04"],
    name: "Đợt giảm giá",
    icon: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1phnduy" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7m11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77"></path></svg>',
    status: 1,
    parentId: 0,
    isSystem: 0,
    menuTypeId: 1,
    href: "/dot-giam-gia",
    order: 2,
    isRoot: 0,
    groupUnitCode: "02,03,04",
    isShowSubMenu: 1,
    isBetaMenu: 1,
    id: 30378,
    createdBy: 1,
    updatedBy: 1,
    createdAt: "2025-05-30T15:59:11.843",
    updatedAt: "2025-06-11T16:44:28.493",
  },
];

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

  menuSidebar: MENU,
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
