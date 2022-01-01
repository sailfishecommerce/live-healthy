import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currencyLanguageSlice = createSlice({
  name: "currency-Language",
  initialState: {
    language: "En",
    currency: "USD",
  },
  reducers: {    
    updateCurrency(state, action) {
      state.currency = action.payload;
    },
    updateLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { updateLanguage, updateCurrency } = currencyLanguageSlice.actions;

export default currencyLanguageSlice.reducer;
