export interface IPaginationModel {
  skip: number;
  take: number;
}

interface BaseResponse {
  code: string;
  message: string;
}

export interface DataResponseModel<T> extends BaseResponse {
  data: T;
}

export interface DataListResponseModel<T> extends BaseResponse {
  data: {
    data: T[];
    totalCount: number;
  };
}
