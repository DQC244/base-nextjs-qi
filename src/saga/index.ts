import { appActions } from "@/redux/app.slice";
import { all, takeLatest } from "redux-saga/effects";
import {
  getDomainInfoSaga,
  getSchoolMenuConfigTree,
  getUserInfoSaga,
} from "./app.saga";

function* rootSaga() {
  yield all([
    takeLatest(appActions.getMenuSideBar.type, getSchoolMenuConfigTree),
    takeLatest(appActions.getDomainInfo.type, getDomainInfoSaga),
    takeLatest(appActions.getUserInfo.type, getUserInfoSaga),
  ]);
}

export default rootSaga;
