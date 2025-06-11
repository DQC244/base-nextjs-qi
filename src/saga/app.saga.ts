import { ApiConstant, EnvConstant } from "@/constant";
import { IDomainInfo, IUserInfo } from "@/models/app.model";
import { IMenuItemTree, MENU_TYPE } from "@/models/menu.model";
import {
  DataListResponseModel,
  DataResponseModel,
} from "@/models/response.model";
import { appActions } from "@/redux/app.slice";
import { AppServices } from "@/services";
import { CommonUtils } from "@/utils";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { toast } from "sonner";

export function* getSchoolMenuConfigTree(action: PayloadAction<MENU_TYPE>) {
  try {
    const response: DataListResponseModel<IMenuItemTree> = yield call(
      AppServices.getMenuSideBar,
      action.payload
    );
    if (response.code === ApiConstant.ERROR_CODE_OK) {
      yield put(appActions.getMenuSideBarSuccess(response.data.data));
    }
  } catch (error: any) {
    EnvConstant.IS_DEV && console.log(error);
    toast.error("Thất bại!", {
      description: CommonUtils.extractErrorMessage(error),
    });
  }
}

export function* getDomainInfoSaga() {
  try {
    const response: DataResponseModel<IDomainInfo> = yield call(
      AppServices.getDomainInfo
    );

    if (response.code === ApiConstant.ERROR_CODE_OK) {
      yield put(appActions.getDomainInfoSuccess(response.data));
    } else {
      throw new Error(response.message as any);
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    toast.error("Thất bại!", {
      description: CommonUtils.extractErrorMessage(error),
    });
    yield put(appActions.appFailure(error));
  }
}

export function* getUserInfoSaga(
  action: PayloadAction<{ onSuccess?: () => void }>
) {
  try {
    const response: DataResponseModel<IUserInfo> = yield call(
      AppServices.getUserInfoService
    );
    if (response.code === ApiConstant.ERROR_CODE_OK) {
      yield put(appActions.getUserInfoSuccess(response.data));
      if (action?.payload?.onSuccess) {
        yield call(action.payload.onSuccess);
      }
    } else {
      yield put(appActions.appFailure({}));
      yield put(appActions.clearToken());
    }
  } catch (error: any) {
    EnvConstant.IS_DEV && console.log(error);
    toast.error("Thất bại!", {
      description: CommonUtils.extractErrorMessage(error),
    });
  }
}
