import http from "@/api";
import { ApiConstant, DataConstant, EnvConstant } from "@/constant";
import { DataResponseModel } from "@/models/response.model";
import { IUploadImg } from "@/models/types";
import { CommonUtils } from "@/utils";
import { toast } from "sonner";

const useHandleUploadImage = (isShowLoading: boolean | undefined = true) => {
  const handleUploadImage = async (
    id: number,
    fileArr: Array<File>,
    isAvatar?: boolean
  ): Promise<IUploadImg[]> => {
    try {
      const formData: FormData = new FormData();
      formData.append("category_id", id.toString());
      if (isAvatar) {
        formData.append("service", "avatar");
      }
      for (const file of fileArr) {
        formData.append("images", file);
      }
      CommonUtils.toggleAppProgress(isShowLoading);
      const response: DataResponseModel<IUploadImg[]> = await http.post(
        ApiConstant.UPLOAD_IMG,
        formData,
        {
          baseUrl: EnvConstant.NEXT_PUBLIC_UPLOAD_URL,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.code !== ApiConstant.ERROR_CODE_OK) {
        toast.error("Thất bại", {
          description: response.message || "Đã có lỗi xảy ra!",
        });
        return [];
      } else {
        toast.success("Thành công", {
          description: "Tải ảnh thành công!",
        });

        return response.data;
      }
    } catch (error: any) {
      EnvConstant.IS_DEV && console.log(error);

      toast.error("Thất bại", {
        description: error?.message || "Đã có lỗi xảy ra!",
      });

      return [];
    } finally {
      CommonUtils.toggleAppProgress(false);
    }
  };

  return handleUploadImage;
};

export default useHandleUploadImage;
