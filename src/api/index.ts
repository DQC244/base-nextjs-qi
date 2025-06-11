import { ApiConstant, AppConstant, EnvConstant } from "@/constant";
import { CANCEL_MSG } from "@/constant/api.const";
import Cookies from "js-cookie";

type CustomOptions = RequestInit & {
  baseUrl?: string;
  isBreakOrgId?: boolean;
  controller?: AbortController;
  timeout?: number;
};

class HttpError extends Error {
  status: number;
  payload: any;

  constructor({ status, payload }: { status: number; payload?: any }) {
    super("http error");
    this.status = status;
    this.payload = payload;
  }
}

const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  url: string,
  options?: CustomOptions
) => {
  const controller = options?.controller ?? new AbortController();
  const timeout = options?.timeout ?? ApiConstant.TIMEOUT;

  let didTimeout = false;
  const timeoutId = setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, timeout);

  try {
    const body = options?.body
      ? options.body instanceof FormData
        ? options.body
        : JSON.stringify(options.body)
      : undefined;

    const baseUrl = options?.baseUrl ?? EnvConstant.NEXT_PUBLIC_MAIN_URL;

    let headers: HeadersInit | undefined = {
      ...ApiConstant.HEADER_DEFAULT,
      ...options?.headers,
    };

    if (!options?.isBreakOrgId) {
      let orgId = await waitForOrgId();
      if (orgId) {
        orgId = JSON.parse(orgId);
        headers = {
          ...headers,
          orgId,
        };
      }
    }

    const token = Cookies.get(AppConstant.ACCESS_TOKEN);
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
    if (options?.body instanceof FormData) {
      if (headers && "Content-Type" in headers) {
        delete headers["Content-Type"];
      }
    }

    const res = await fetch(`${baseUrl}${url}`, {
      ...options,
      headers,
      body,
      method,
      cache: "no-cache",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.status === ApiConstant.STT_UNAUTHORIZED) {
      if (typeof window !== "undefined") {
        Cookies.remove(AppConstant.COOKIE_KEY.orgId);
        Cookies.remove(AppConstant.ACCESS_TOKEN);
        window.location.href = "/login";
      }
      throw new HttpError({
        status: ApiConstant.STT_UNAUTHORIZED,
        payload: "Unauthorized",
      });
    }

    const payload: Response = await res.json();

    if (res.status >= ApiConstant.STT_INTERNAL_SERVER) {
      throw new HttpError({ status: res.status, payload });
    }

    return payload;
  } catch (err: any) {
    clearTimeout(timeoutId); // Clear timeout nếu có lỗi
    if (err.name === "AbortError") {
      if (didTimeout) {
        throw new HttpError({
          status: ApiConstant.STT_TIMEOUT,
          payload: "Request timeout",
        });
      } else {
        console.warn("🛑 Request bị hủy (aborted):", url);
        throw new Error(CANCEL_MSG);
      }
    }

    throw err;
  }
};

const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> & { params?: { [x: string]: any } }
  ) {
    let newUrl = url;
    const newParams = new URLSearchParams();

    const params = options?.params ?? {};

    Object.entries(params).forEach(([key, value]) => {
      if (
        value === undefined ||
        value === null ||
        Number.isNaN(value) ||
        (Array.isArray(value) && value.length === 0)
      ) {
        return;
      }

      if (Array.isArray(value)) {
        value.forEach((item) => newParams.append(key, item));
      } else {
        newParams.append(key, value);
      }
    });

    if (Array.from(newParams).length > 0) {
      newUrl += `?${newParams.toString()}`;
    }

    return request<Response>("GET", newUrl, options);
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body">
  ) {
    return request<Response>("POST", url, { ...options, body });
  },
  put<Response>(url: string, body: any, options?: Omit<CustomOptions, "body">) {
    return request<Response>("PUT", url, { ...options, body });
  },
  patch<Response>(
    url: string,
    body?: any,
    options?: Omit<CustomOptions, "body">
  ) {
    return request<Response>("PATCH", url, { ...options, body });
  },
  delete<Response>(
    url: string,
    body?: any,
    options?: Omit<CustomOptions, "body">
  ) {
    return request<Response>("DELETE", url, { ...options, body });
  },
};

export default http;

const waitForOrgId = async (timeout = ApiConstant.TIMEOUT, interval = 100) => {
  const startTime = Date.now();

  let orgId = Cookies.get(AppConstant.COOKIE_KEY.orgId);
  if (orgId) {
    try {
      return JSON.parse(orgId);
    } catch (error) {
      console.error("Invalid JSON in orgId cookie:", error);
      return null;
    }
  }

  console.log("Waiting for orgId");

  while (Date.now() - startTime < timeout) {
    await new Promise((resolve) => setTimeout(resolve, interval));

    orgId = Cookies.get(AppConstant.COOKIE_KEY.orgId);

    if (orgId) {
      try {
        return JSON.parse(orgId);
      } catch (error) {
        console.error("Invalid JSON in orgId cookie:", error);
        return null;
      }
    }
  }

  console.warn("Timeout waiting for orgId");
  return null;
};
