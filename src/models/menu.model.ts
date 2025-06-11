import { IOption } from "@/components/common";
import { DataConstant } from "@/constant";

export interface IMenu {
  id: number;
  name: string;
  icon: string;
  parentId: number;
  href: string;
  order: number;
}

export interface IMenuTree {
  children: IMenuTree[];
  name: string;
  icon: string;
  status: DataConstant.STATUS_TYPE;
  isSystem: DataConstant.STATUS_TYPE;
  isRoot: DataConstant.STATUS_TYPE;
  parentId: number;
  menuTypeId: number;
  href: string;
  order: number;
  id: number;
  createdBy: string | null;
  updatedBy: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  groupUnitCode: string;
  listGroupsUnitCode: string[];
  isShowSubMenu: DataConstant.STATUS_TYPE;
  isBetaMenu: DataConstant.STATUS_TYPE;
}

export interface IMenuConfigFilter {
  menuTypeId: string | number | null;
  groupUnitCode: string;
}

export interface IAddMenuConfig {
  name: string;
  icon: string;
  status: DataConstant.BOOLEAN_TYPE | boolean;
  isSystem: DataConstant.BOOLEAN_TYPE | boolean;
  isRoot: DataConstant.BOOLEAN_TYPE | boolean;
  parentId?: number | null;
  menuTypeId: number | null;
  href: string;
  order: number;
  groupUnitCodes: string[] | IOption[];
  isShowSubMenu: DataConstant.BOOLEAN_TYPE | boolean;
  isBetaMenu: DataConstant.BOOLEAN_TYPE | boolean;
}

export interface IMenuItemTree {
  isEnable: boolean;
  schoolMenuConfigId: number | null;
  children: IMenuItemTree[];
  name: string;
  icon: string;
  status: DataConstant.STATUS_TYPE;
  parentId: number;
  menuTypeId: number;
  href: string;
  order: number;
  id: number;
  createdBy: number;
  updatedBy: number | null;
  createdAt: string;
  updatedAt: string | null;
  listGroupsUnitCode: string[];
  isSystem: DataConstant.BOOLEAN_TYPE;
  isRoot: DataConstant.BOOLEAN_TYPE;
  groupUnitCode: string;
  isShowSubMenu: DataConstant.BOOLEAN_TYPE;
  isBetaMenu: DataConstant.BOOLEAN_TYPE;
}

export enum MENU_TYPE {
  SYSTEM_MANAGEMENT_CMS = 1,
  HOME,
  LIST_OF_DOCUMENTS,
}

export interface IMenuType {
  id: number;
  name: string;
}

export interface IMenuGroup {
  id: number;
  name: string;
  order: number;
  items: IMenu[];
}
