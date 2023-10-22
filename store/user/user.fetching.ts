import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthenticateBody,
  AuthenticateFailResponse,
  AuthenticateResponse,
} from "./user.types";
import { ApiList, api } from "utils/api";

export const sendAuthenticateUser = createAsyncThunk<
  AuthenticateResponse,
  AuthenticateBody,
  {
    rejectValue: AuthenticateFailResponse;
  }
>("user/authenticate", async (arg, thunkApi) => {
  const response = await api<AuthenticateBody, AuthenticateResponse>(
    ApiList.Login,
    arg
  );

  console.log(response)

  if (!response.status || !response.response) {
    return thunkApi.rejectWithValue({
      isLogin: false,
    });
  }

  return response.response;
});
