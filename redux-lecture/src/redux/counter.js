import { createSlice } from "@reduxjs/toolkit";

export const handleCounter = createSlice({
  name: "calculator",
  initialState: { count: 0 },
  reducers: {
    plus: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
    plusAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { plus, minus, plusAmount } = handleCounter.actions;
export default handleCounter.reducer;
