import { DataConstant } from "@/constant";
import { Dayjs } from "dayjs";

export interface ISchool {
  id: number;
  doetCode: string;
  divisionCode: string | null;
  provinceCode: string | null;
  districtCode: string | null;
  wardCode: string | null;
  doetName: string;
  divisionName: string;
  schoolCode: string;
  groupUnitCode: string;
  name: string;
  shortName: string;
  schoolLevel?: number;
  address: string;
  website: string;
  logo: string;
  phone: string;
  email: string;
  principal: string;
  principalPhone: string;
  principalEmail: string;
  schoolType: string;
  status: number;
  isInitedData: number;
  initedTime?: Date | null | Dayjs;
  activedTime?: Date | null | Dayjs;
  establishmentDate?: Date | null | Dayjs;
  numberOfClassrooms?: number | string;
  centerArea: string;
  businessLicenseNumber: string;
  issueDate?: Date | null | Dayjs;
  businessRegistrationAuthority: string;
  totalVisitor: number;
  fax: string;
  location: string;
  lat: string;
  lng: string;
  createdBy?: number;
  createdAt?: Date;
  updatedBy?: number;
  updatedAt?: Date;
  numberOfLocations?: number | string; // Số lượng địa điểm dạy học
  provinceName: string | null;
  districtName: string | null;
  wardName: string | null;
  taxCode: string;
  totalLocations: number;
  totalStudents: number;
  totalTeachers: number;
}

// chung cho so, phong, truong
export interface IDonVi {
  id: number;
  doetCode: string;
  divisionCode: string;
  schoolCode: string;
  groupUnitCode: string;
  schoolLevel: string;
  name: string;
  shortName: string;
  website: string;
  logo: string;
  phone: string;
  email: string;
  code: string;
}

export interface IDomainInfo {
  groupUnitCode: DataConstant.DON_VI_TYPE;
  schoolCode: string;
  doetCode: string;
  divisionCode: null;
  name: string;
  domainUrl: string;
  status: DataConstant.BOOLEAN_TYPE;
  isShareDomain: DataConstant.BOOLEAN_TYPE;
  isConfigMananger: DataConstant.BOOLEAN_TYPE;
  id: number;
  createdBy: null;
  updatedBy: null;
  createdAt: null;
  updatedAt: null;
  schoolName: null;
  doetName: string;
  divisionName: null;
  provinceName: string;
  districtName: string;
  wardName: string;
}

export interface IUserInfo {
  accountCode: string;
  divisionCode: string;
  avatar: string;
  doetCode: string;
  email: string;
  firstName: string;
  fullName: string;
  gender: 0 | 1;
  groupUnitCode: string;
  id: number;
  isTeacher: boolean;
  lastName: string;
  phone: string;
  schoolCode: string;
  schoolLevel: string;
  userName: string;
  schoolInfos: ISchool[];
  isPrimarySchool: boolean;
}

export interface ISchoolLevel {
  code: string;
  name: string;
  systemCode: number;
  order: number;
}
