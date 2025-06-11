import http from "@/api";
import { ApiConstant, DataConstant } from "@/constant";
import {
  IDomainInfo,
  IDonVi,
  ISchoolLevel,
  IUserInfo,
} from "@/models/app.model";
import { IMenuItemTree } from "@/models/menu.model";
import {
  DataListResponseModel,
  DataResponseModel,
} from "@/models/response.model";
import { CommonUtils } from "@/utils";
import { extractErrorMessage } from "@/utils/common.utils";
import { toast } from "sonner";
import stringFormat from "string-format";

export const getMenuSideBar = (id: number) => {
  return http.get<DataResponseModel<IMenuItemTree[]>>(
    stringFormat(ApiConstant.GET_MENU_SIDE_BAR, { id })
  );
};

export const getDomainInfo = () => {
  return http.get<DataResponseModel<IDomainInfo>>(ApiConstant.GET_DOMAIN_INFO, {
    isBreakOrgId: true,
  });
};

export const getUserInfoService = () => {
  return http.get<DataResponseModel<IUserInfo>>(ApiConstant.GET_USER_INFO, {});
};

/**
 * Update status
 * @param id -
 * @param status - STATUS_TYPE
 * @param url - url of api
 * @param onSuccess - func callback when success
 * @returns Formatted error description string
 */
export const updateStatusService = async ({
  id,
  status,
  url,
  onSuccess,
}: {
  id: string | number;
  status: DataConstant.STATUS_TYPE;
  url: string;
  onSuccess?: () => void;
}) => {
  try {
    CommonUtils.toggleAppProgress(true);

    const response: DataResponseModel<any> = await http.patch(
      stringFormat(url, { status, id }),
      { status, id }
    );

    if (response.code === ApiConstant.ERROR_CODE_OK) {
      toast.success("Thành công!", {
        description: "Dữ liệu đã cập nhật thành công.",
      });
      onSuccess?.();
    } else {
      throw new Error(response?.message || "Đã có lỗi xảy ra");
    }
  } catch (error: any) {
    const description = extractErrorMessage(error);
    toast.error("Thất bại!", {
      description,
    });
  } finally {
    CommonUtils.toggleAppProgress(false);
  }
};
