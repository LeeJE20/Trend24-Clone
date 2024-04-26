import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const customizeSlice = createSlice({
  name: "customize",
  initialState: {
    color: "black",
    fontSize: 16,
    coordinate: { L: 1, R: 2, T: 1, B: 2 },
  },
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    setCoordinate: (
      state,
      action: PayloadAction<{ L: number; R: number; T: number; B: number }>
    ) => {
      state.coordinate = action.payload;
    },
  },
});

export const { setColor, setFontSize, setCoordinate } = customizeSlice.actions;
export default customizeSlice.reducer;
