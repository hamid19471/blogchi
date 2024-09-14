import { API_URL } from "@/configs/global";
import {
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnhandledException,
  UnuthorizedError,
  ValidationError,
} from "@/types/http-error.interface";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

type ApiError =
  | BadRequestError
  | ValidationError
  | NetworkError
  | UnhandledException
  | UnuthorizedError
  | NotFoundError;

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error?.response?.data;
        if (statusCode === 400 && !errorData.error) {
          throw {
            ...errorData,
          } as BadRequestError;
        }
        if (statusCode === 400 && errorData.error) {
          throw {
            ...errorData,
          } as ValidationError;
        }
        if (statusCode === 404) {
          throw {
            ...errorData,
            detail: "سرویس مورد نظر یافت نشد",
          } as NotFoundError;
        }
        if (statusCode === 403) {
          throw {
            ...errorData,
            detail: "شما به این سرویس دسترسی ندارید",
          } as UnuthorizedError;
        }
        if (statusCode >= 500) {
          throw {
            ...errorData,
            detail: "خطایی رخ داده است. لطفا مجددا تلاش کنید",
          } as UnhandledException;
        }
      }
    } else {
      throw {
        detail: "سرویس مورد نظر در دسترس نیست",
      };
    }
  }
);

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  const response = await httpService(url, options);
  return response.data;
}

async function readData<T>(
  url: string,
  headers: AxiosRequestHeaders
): Promise<T> {
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: headers,
  };
  return await apiBase<T>(url, options);
}

async function postData<TModel, TResult>(
  url: string,
  data: TModel,
  headers: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "POST",
    data: JSON.stringify(data),
    headers: headers,
  };

  return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "PUT",
    data: JSON.stringify(data),
    headers: headers,
  };

  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers: AxiosRequestHeaders
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers: headers,
  };
  return await apiBase(url, options);
}

export { readData, postData, updateData, deleteData };
