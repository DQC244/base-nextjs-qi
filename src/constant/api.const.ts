// Common
export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const TIMEOUT = 30000;

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_TIMEOUT = 408;
export const STT_INTERNAL_SERVER = 500;
export const STT_NOT_MODIFIED = 304;

export const CANCEL_MSG = "Request was cancelled";

// Error code
export const ERROR_CODE_OK = "1";

export const UPLOAD_IMG = "/api/v1/media/vlib/images";
export const UPLOAD_FILE = "/api/v1/media/vlib/files";

// app
export const GET_DOMAIN_INFO = "/get-domain-info";
export const GET_USER_INFO = "/v1/user/get-current-user-info";

// menu side bar
export const GET_MENU_SIDE_BAR = "/v1/school-menu-config/tree/{id}";
