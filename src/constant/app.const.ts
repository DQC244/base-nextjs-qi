export const ACCESS_TOKEN = "access_token";
export const EXPIRED_TIME = "expired_time";
export const COOKIE_EXPIRED_DATE = 7;

export enum COOKIE_KEY {
  schoolInfo = "schoolInfo",
  orgId = "orgId",
  COLUMNS_CONFIG_VISIBLE = "config_columns",
  ud = "ud",
}

export const NOT_HAVE_VALUE_LABEL = "- -";
export const NOT_AVAILABLE_VALUE = "N/A";
export const DEFAULT_ALL_VALUE = -99;

export const DEBOUNCE_TIME_IN_MILLISECOND = 500;

export const PAGE_SIZE_OPTIONS = [50, 100, 150, 200];
export const DEFAULT_PAGINATION = {
  page: 1,
  size: PAGE_SIZE_OPTIONS[0],
};
export const DEFAULT_PAGINATION_SKIP_TAKE = {
  skip: 0,
  take: PAGE_SIZE_OPTIONS[0],
};

export const APP_PROGRESS_ID = "app-progress";

export const ROOT_NODE_TREE = "Đang là thư mục gốc";
export const DEFAULT_ORDER = 1;
export const DEFAULT_TREE = 0;
export const NONE_ID = 0;

// Date, Time Format
export const YEAR_FORMAT = "YYYY";
export const DATE_FORMAT = "DD/MM/YYYY";
export const DATE_TIME_FORMAT = "DD/MM/YYYY HH:mm";
export const TIME_FORMAT = "HH:mm";
export const DATE_TIME_YYYYescape = "YYYY-MM-DDTHH:mm:ss";

export const APP_TITLE = "Fashion Shop";
export const APP_DESCRIPTION = "";

export const PHONE_REGEX = /^(84|0[2|3|4|5|6|7|8|9])\d{8,}$/;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const ACCEPT_IMAGE = {
  "image/png": [".png"],
  "image/jpeg": [".jpeg", ".jpg"],
  "image/gif": [".gif"],
};

export const TABLE_FULL_HEIGHT = {
  boxProps: {
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column" as const,
  },
  sx: {
    height: "100%",
    flex: 1,
    minHeight: 0,
  },
  tableContainerProps: {
    sx: {
      height: "100%",
    },
  },
};
