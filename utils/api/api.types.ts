import { ApiMethods } from "./api.constants";

export type ApiType = {
  endpoint: string;
  method: ApiMethods;
};

export type ApiDataType = Record<string, ApiType>;

export type HttpResponse<Out> = {
  success: boolean;
  message: string;
  data: Out;
};

export type ApiResponse<Out> = {
  status: boolean;
  statusCode: number;
  response?: Out;
};
