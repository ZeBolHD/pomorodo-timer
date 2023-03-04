import { configureStore } from "@reduxjs/toolkit";
import timerSettings from "./timerSettings/slice";
import headerStatus from "./headerStatus/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    timerSettings,
    headerStatus,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
