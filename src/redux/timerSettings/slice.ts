import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITimerSettings } from "./types";

const initialState: ITimerSettings = {
  rounds: 3,
  breakDuration: 10,
  focusDuration: 30,
};

const timerSettingsSlice = createSlice({
  name: "timerSettings",
  initialState,
  reducers: {
    setRounds(state, action: PayloadAction<string>) {
      state.rounds = +action.payload;
    },
    setBreakDuration(state, action: PayloadAction<string>) {
      state.breakDuration = +action.payload;
    },
    setFocusDuration(state, action: PayloadAction<string>) {
      state.focusDuration = +action.payload;
    },
  },
});

export const { setRounds, setBreakDuration, setFocusDuration } =
  timerSettingsSlice.actions;

export default timerSettingsSlice.reducer;
