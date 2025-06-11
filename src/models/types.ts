import { DataConstant } from "@/constant";
import { SxProps, Theme } from "@mui/material";

export interface IStyleProps {
  [x: string]: SxProps<Theme>;
}

export interface ObjectMultiLanguageProps {
  [x: string]: string;
}

export interface KeyAbleProps {
  [key: string]: unknown;
}

export interface IUploadImg {
  categoryTypeId: number;
  createdAt?: string;
  fileType: string;
  groupUnitCode: string;
  id: number;
  isUsing: number;
  keyUpload: string;
  originName: string;
  schoolCode: string;
  size: number;
  updatedAt?: string;
  updatedBy?: number;
  url: string;
  documentUrl?: string;
}

export interface IUploadFile {
  doetCode: number;
  divisionCode: number;
  schoolCode: number;
  groupUnitCode: number;
  fileName: string;
  originName: string;
  fileType: string;
  keyUpload: string;
  size: number;
  url: string;
  categoryTypeId: number;
  isUsing: DataConstant.BOOLEAN_TYPE;
  documentId?: null | number;
  id: number;
  createdBy: number;
  updatedBy: number;
  createdAt: string;
  updatedAt: string;
}

export interface ITree {
  parentId: number;
  id: number;
  children?: ITree[];
  order?: number;
  [x: string]: any;
}

export type DateRangeValue = Array<Date | null>;

export interface ITreeData {
  id: number | string;
  name: string;
  status?: DataConstant.STATUS_TYPE;
  children?: ITreeData[];

  [x: string]: any;
}
