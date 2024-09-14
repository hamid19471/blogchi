import {
  BadRequestError,
  ApiError,
  UnhandledException,
  ValidationError,
  NotFoundError,
  UnuthorizedError,
} from "@/types/http-error.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};

export const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as UnhandledException;
};

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as ValidationError;
};

export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "سرویس مورد نظر یافت نشد",
  } as NotFoundError;
};

export const unuthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "شما به این سرویس دسترسی ندارید",
  } as UnuthorizedError;
};

export const networkErrorStrategy = () => {
  throw {
    detail:
      "خطای اتصال به اینترنت رخ داده است. لطفا اتصال اینترنت خود را بررسی کنید.",
  };
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    errorData.error ? validationErrorStrategy : badRequestStrategy,
  404: notFoundErrorStrategy,
  403: unuthorizedErrorStrategy,
  500: unhandledExceptionStrategy,
};
