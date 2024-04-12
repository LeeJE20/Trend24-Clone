import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
  },
});

export type RootState = ReturnType<typeof store.getState>; 
//Redux 스토어의 state를 나타내는 타입
export type AppDispatch = typeof store.dispatch;
// Redux 액션을 dispatch하는 함수의 타입

export default store;