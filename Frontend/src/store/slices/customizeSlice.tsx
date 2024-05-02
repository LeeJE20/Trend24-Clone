import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CustomizedComponentList {
  componentName: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface CustomizeState {
  completeList: CustomizedComponentList[];
}

const customizeSlice = createSlice({
  name: "customize",
  initialState: {
    completeList: [],
  } as CustomizeState, // 초기 상태를 CustomizeState로 명시
  reducers: {
    setCompleteList: (
      state,
      action: PayloadAction<CustomizedComponentList[]>
    ) => {
      state.completeList = action.payload;
    },
  },
});

export const { setCompleteList } = customizeSlice.actions;
export default customizeSlice.reducer;
