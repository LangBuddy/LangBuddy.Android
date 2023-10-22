import { ApiList, headers } from "./api.constants";
import { ApiData } from "./api.data";
import { ApiResponse, HttpResponse } from "./api.types";

export const api = async <Init = void, Out = void>(
  apiConstants: ApiList,
  body?: Init
): Promise<ApiResponse<Out>> => {
  const { method, endpoint } = ApiData[apiConstants];
  try {
    const res = await fetch(endpoint, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return {
        status: res.ok,
        statusCode: res.status,
      };
    }

    return (res.json() as Promise<HttpResponse<Out>>).then((data) => ({
      status: res.ok,
      statusCode: res.status,
      response: data.data,
    }));
  } catch (e) {
    console.log(e);
    return {
      status: false,
      statusCode: 500,
    };
  }
};
