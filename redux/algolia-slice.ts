import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const algoliaSlice = createSlice({
  name: "algolia",
  initialState: {
    searchData: [],
    viewSearch: false,
  },
  reducers: {
    updateSearchData(state, action: PayloadAction<any>) {
      state.searchData = action.payload;
    },
    updateViewSearch(state) {
      state.viewSearch = !state.viewSearch;
    },
  },
});

export const { updateSearchData, updateViewSearch } = algoliaSlice.actions;
export default algoliaSlice.reducer;
