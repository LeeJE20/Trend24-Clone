import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeUsers: 0,
  totalUsers: 0,
  city: "",
  deviceCategory: "",
  userAgeBracket: "",
  userGender: "",
  dauPerMau: 0,
  wauPerMau: 0,
  mauPerMau: 0,
  newUsers: 0,
};

const gaSlice = createSlice({
  name: "ga",
  initialState,
  reducers: {
    setGa: (
      state,
      action: PayloadAction<{
        activeUsers: number;
        totalUsers: number;
        city: string;
        deviceCategory: string;
        userAgeBracket: string;
        userGender: string;
        dauPerMau: number;
        wauPerMau: number;
        mauPerMau: number;
        newUsers: number;
      }>
    ) => {
      state.activeUsers = action.payload.activeUsers;
      state.totalUsers = action.payload.totalUsers;
      state.city = action.payload.city;
      state.deviceCategory = action.payload.deviceCategory;
      state.userAgeBracket = action.payload.userAgeBracket;
      state.userGender = action.payload.userGender;
      state.dauPerMau = action.payload.dauPerMau;
      state.wauPerMau = action.payload.wauPerMau;
      state.mauPerMau = action.payload.mauPerMau;
      state.newUsers = action.payload.newUsers;
    },
  },
});

export const { setGa } = gaSlice.actions;
export default gaSlice.reducer;
