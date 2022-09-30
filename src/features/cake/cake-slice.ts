import { ICakeState } from "./../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICakeState = {
  numOfCakes: 20,
};

export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<number>) => {
      state.numOfCakes -= action.payload;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});
