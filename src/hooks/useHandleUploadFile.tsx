import http from "@/api";
import { ApiConstant, DataConstant, EnvConstant } from "@/constant";
import { DataResponseModel } from "@/models/response.model";
import { IUploadFile } from "@/models/types";
import { CommonUtils } from "@/utils";
import { toast } from "sonner";

const useHandleUploadFile = (isShowLoading: boolean | undefined = true) => {
  const handleUploadFile = async (id: number, fileArr: Array<File>) => {
    try {
      CommonUtils.toggleAppProgress(isShowLoading);

      const formData: FormData = new FormData();
      formData.append("category_id", id.toString());
      for (const file of fileArr) {
        formData.append("files", file);
      }

      const response: DataResponseModel<IUploadFile[]> = await http.post(
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

  return handleUploadFile;
};

export default useHandleUploadFile;
