import { appActions } from "@/redux/app.slice";
import { all, takeLatest } from "redux-saga/effects";

function* rootSaga() {
  yield all([]);
}

export default rootSaga;
