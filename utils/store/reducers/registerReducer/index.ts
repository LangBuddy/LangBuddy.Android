import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRegisterDataState } from "utils/store/types";

const initialState: IRegisterDataState = {
  name: "",
};

export const registerDataSlice = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    setRegisterData: (state, action: PayloadAction<IRegisterDataState>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRegisterData } = registerDataSlice.actions;

export default registerDataSlice.reducer;
