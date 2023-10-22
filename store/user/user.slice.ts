import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";
import { sendAuthenticateUser } from "./user.fetching";

const initialState: UserState = {
  isLogin: false,
  token: "",
  refreshToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendAuthenticateUser.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
        isLogin: true,
    }));
    builder.addCase(sendAuthenticateUser.rejected, (state, action) => ({
        ...state,
        ...action.payload
    }));
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
