interface Problem {
  title: string;
  status: number;
  detail?: string;
  error?: Record<string, string[]>;
}

interface BadRequestError extends Problem {}
interface UnuthorizedError extends Problem {}
interface ValidationError extends Problem {}
interface NotFoundError extends Problem {}
interface UnhandledException extends Problem {}
interface NetworkError extends Problem {}

export type {
  Problem,
  BadRequestError,
  UnuthorizedError,
  ValidationError,
  NotFoundError,
  UnhandledException,
  NetworkError,
};
