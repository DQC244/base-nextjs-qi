import { AppConstant } from "@/constant";
import dayjs from "dayjs";

/**
 * Format number
 *
 * @param {number} number - The number to format
 * @param {number} [maximumFractionDigits = 3] -The length of decimal
 * @param {string} [fallbackLabel = AppConstant.NOT_HAVE_VALUE_LABEL] - Default string will returned when number is the empty string
 * @param {object} [localeOption = {}] - To customized method toLocaleString
 * @param {number} [minimumFractionDigits = 0] - The min length of decimal
 *
 * @return {string} The value of format number
 *
 */
export const formatNumber = (
  number?: number | string | null,
  fallbackLabel: string | number = AppConstant.NOT_AVAILABLE_VALUE,
  maximumFractionDigits = 3,
  localeOption = {},
  minimumFractionDigits = 0
) => {
  try {
    if (!number && number !== 0) return fallbackLabel;
    const num = Number(number);
    return num.toLocaleString("vi-VN", {
      maximumFractionDigits,
      minimumFractionDigits,
      ...localeOption,
    });
  } catch (error) {
    return number;
  }
};

/**
 * Check format email
 *
 * @param {string} email  - email
 *
 * @returns {boolean}  Return true if email is correct format, false remaining case
 */
export const checkEmailFormat = (email: string): boolean => {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length && !regexEmail.test(email)) return false;
  else return true;
};

export const formatPublishDay = (day: string): string => {
  return `${dayjs(day).locale("vi").format("[Ngày] DD [Tháng] MM [Năm] YYYY")}`;
};

export const formatSlashDay = (day?: string) => {
  if (!day) return;

  return `${dayjs(day).locale("vi").format("DD[/]MM[/]YYYY")}`;
};

export const clearQueryParams = (params: {
  [key: string]: any;
}): URLSearchParams => {
  const searchParams = new URLSearchParams();

  Object.keys(params).forEach((queryValue) => {
    const keyValue = params[queryValue];

    // Xử lý khi keyValue là một mảng
    if (Array.isArray(keyValue)) {
      keyValue.forEach((item) => {
        if (item !== AppConstant.DEFAULT_ALL_VALUE) {
          searchParams.append(queryValue, item);
        }
      });
    }
    // Xử lý khi keyValue là một object (không phải mảng)
    else if (
      typeof keyValue === "object" &&
      keyValue !== null &&
      !Array.isArray(keyValue)
    ) {
      Object.keys(keyValue).forEach((keyItem) => {
        searchParams.append(`${queryValue}[${keyItem}]`, keyValue[keyItem]);
      });
    }
    // Xử lý khi keyValue là string hoặc number
    else if (
      (typeof keyValue === "string" || typeof keyValue === "number") &&
      keyValue !== "" &&
      keyValue !== undefined &&
      keyValue !== AppConstant.DEFAULT_ALL_VALUE
    ) {
      searchParams.append(queryValue, String(keyValue));
    }
  });

  return searchParams;
};

export const formatDayjsWithType = (
  date?: string | Date | null,
  format?: string
) => {
  if (date) {
    const timeDayjs = dayjs(date);

    const isValid = timeDayjs.isValid();
    return isValid ? timeDayjs.format(format || AppConstant.DATE_FORMAT) : "";
  }
  return "";
};

export const formatPrice = (
  number?: number | string,
  fallbackLabel?: string
) => {
  let newNumber = number;
  if (typeof number === "undefined" || typeof number === "object") {
    newNumber = 0;
    if (typeof fallbackLabel !== "undefined") {
      return fallbackLabel;
    }
  }

  return (Number(newNumber) as number).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export const convertDataToOptions = (arr: any[]) => {
  const newArray = [...(arr || [])];

  return newArray?.map((item) => {
    return {
      ...item,
      label:
        item?.fullName || item?.name || item?.title || item?.documentNumber,
      id: item?.id || item?._id,
      code: item?.code,
    };
  });
};

/** bỏ giấu tiếng việt */
export const removeVietnameseTones = (str?: string) => {
  let newStr = (str || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  newStr = newStr.replace(/đ/g, "d").replace(/Đ/g, "D");
  return newStr;
};

export const getGenderLabel = (gender?: number) => {
  return typeof gender === "number" ? (Boolean(gender) ? "Nam" : "Nữ") : "";
};
