import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: true,
  isStarted: false,
  isFocus: false,
  isBreak: false,
};

const headerStatusSlice = createSlice({
  initialState,
  name: "header",
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setIsFocus(state, action) {
      state.isFocus = action.payload;
    },
    setIsBreak(state, action) {
      state.isBreak = action.payload;
    },
    setIsStarted(state, action) {
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
