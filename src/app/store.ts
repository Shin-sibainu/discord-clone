import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});

/* https://zenn.dev/engstt/articles/293e7420c93a18 */
export type AppDispatch = typeof store.dispatch;
//storeの現在の状態の型を取得
export type RootState = ReturnType<typeof store.getState>; //getState...現在のstateを取得できる
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
