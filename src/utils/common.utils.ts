import { IOption } from "@/components/common";
import { AppConstant, DataConstant } from "@/constant";
import { IDonVi } from "@/models/app.model";

export const getElementById = (id: string) => {
  if (typeof window !== "undefined") {
    return document.getElementById(id);
  }
};

export const takeLastSlug = (str: string) => {
  if (str) {
    const parts = str.split("-");
    return parts[parts.length - 1];
  }
};

export const getElementByClass = (className: string) => {
  if (typeof window !== "undefined") {
    return document.getElementsByClassName(className);
  }
};

export const getElementByQuerySelector = (className: string) => {
  if (typeof window !== "undefined") {
    return document.querySelector(className);
  }
};

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const toggleAppProgress = (isShow: boolean) => {
  const progressEl = getElementById(AppConstant.APP_PROGRESS_ID);
  if (progressEl instanceof HTMLElement) {
    progressEl.style.display = isShow ? "block" : "none";
  }
};

export const getLabelCellFromList = (
  id: number | string | null,
  list: IOption[]
) => {
  return list?.find((item) => item.id === id)?.label ?? "";
};

/**
 * Extracts error message from API response error object
 * @param error - The error object from API response
 * @param defaultMessage - Optional default message if no error message is found
 * @returns Formatted error description string
 */
export const extractErrorMessage = (
  error: any,
  defaultMessage: string = "Đã xảy ra lỗi trong quá trình xử lý."
): string => {
  // Case 1: If error has an errors object with values that can be flattened
  if (error?.errors && typeof error.errors === "object") {
    const errorValues = Object.values(error.errors);
    // Handle both array of strings and array of arrays
    return errorValues.flat().join(", ");
  }

  if (error?.payload && typeof error.payload === "string") {
    return error.payload;
  }

  // Case 2: If error has a message property
  if (error?.message && typeof error.message === "string") {
    return error.message;
  }

  // Case 3: If error is a string itself
  if (typeof error === "string") {
    return error;
  }

  // Default case: Return the default message
  return defaultMessage;
};

export const convertDonViToOptions = (arr: any[]) => {
  if (Array.isArray(arr)) {
    return arr.map((item) => {
      const code = item.schoolCode || item.code;

      return {
        id: item.id,
        code,
        label: `${item.name}${code ? ` (${code})` : ""}`,
      };
    });
  } else {
    return [];
  }
};
