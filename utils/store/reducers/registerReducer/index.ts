import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthData, IPersonalInformationData, IRegisterDataState } from "utils/store/types";

const initialState: IRegisterDataState = {
  auth: {
    nickname: "",
    email: "",
    password: "",
  },
  personalInformationData: {
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
  },
};

export const registerDataSlice = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IAuthData>) => {
      state.auth = action.payload;
    },
    setPersonalInformationData: (state, action: PayloadAction<IPersonalInformationData>) => {
      state.personalInformationData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthData, setPersonalInformationData } = registerDataSlice.actions;

export default registerDataSlice.reducer;
