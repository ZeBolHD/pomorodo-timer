import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rounds: 3,
  breakDuration: 10,
  focusDuration: 30,
};

const timerSettingsSlice = createSlice({
  name: "timerSettings",
  initialState,
  reducers: {
    setRounds(state, action) {
      state.rounds = action.payload;
    },
    setBreakDuration(state, action) {
      state.breakDuration = action.payload;
    },
    setFocusDuration(state, action) {
      state.focusDuration = action.payload;
    },
  },
});

export const { setRounds, setBreakDuration, setFocusDuration } =
  timerSettingsSlice.actions;

export default timerSettingsSlice.reducer;
