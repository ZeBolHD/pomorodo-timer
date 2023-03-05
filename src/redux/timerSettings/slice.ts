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
    setTimerSettings(state, action: PayloadAction<ITimerSettings>) {
      state.focusDuration = action.payload.focusDuration;
      state.breakDuration = action.payload.breakDuration;
      state.rounds = action.payload.rounds;
    },
  },
});

export const { setTimerSettings } = timerSettingsSlice.actions;

export default timerSettingsSlice.reducer;
