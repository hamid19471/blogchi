import { API_URL } from "@/configs/global";
import { ApiError } from "@/types/http-error.interface";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { errorHandler, networkErrorStrategy } from "./http-error-strategies";

const httpService = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error?.response?.data;
        errorHandler[statusCode](errorData);
      }
    } else {
      networkErrorStrategy();
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
