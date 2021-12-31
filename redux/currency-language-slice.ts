import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currencyLanguageSlice = createSlice({
  name: "currency-Language",
  initialState: {
    language: "En",
    currency: "usd",
  },
  reducers: {
    updateState(
      state: any,
      action: PayloadAction<{
        stateType: string;
        stateValue: string;
      }>
    ) {
      state[action.payload.stateType] = action.payload.stateValue;
    },
  },
});

export const { updateState } = currencyLanguageSlice.actions;

export default currencyLanguageSlice.reducer;
