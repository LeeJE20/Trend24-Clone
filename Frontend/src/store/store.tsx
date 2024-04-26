//store.tsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import customizeReducer from "./slices/customizeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // slice 생성후 추가 해줘야 함
    customize: customizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
