import { configureStore } from "@reduxjs/toolkit";
import timerSettings from "./slices/timerSettingsSlice";
import headerStatus from "./slices/headerStatusSlice";

export const store = configureStore({
  reducer: {
    timerSettings,
    headerStatus,
  },
});
