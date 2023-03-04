import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHeaderStatus } from "./types";

const initialState: IHeaderStatus = {
  activeTab: true,
  isStarted: false,
  isFocus: false,
  isBreak: false,
};

const headerStatusSlice = createSlice({
  initialState,
  name: "header",
  reducers: {
    setActiveTab(state, action: PayloadAction<boolean>) {
      state.activeTab = action.payload;
    },
    setIsFocus(state, action: PayloadAction<boolean>) {
      state.isFocus = action.payload;
    },
    setIsBreak(state, action: PayloadAction<boolean>) {
      state.isBreak = action.payload;
    },
    setIsStarted(state, action: PayloadAction<boolean>) {
      state.isStarted = action.payload;
    },
    setOnComplete(state) {
      state.isStarted = false;
      state.isFocus = false;
      state.isBreak = false;
    },
  },
});

export const {
  setActiveTab,
  setIsFocus,
  setIsBreak,
  setIsStarted,
  setOnComplete,
} = headerStatusSlice.actions;

export default headerStatusSlice.reducer;
