import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const rewardSlice = createSlice({
  name: "rewardWidget",
  initialState: {
    stage: "default",
  },
  reducers: {
    updateStage(state, action: PayloadAction<any>) {
      state.stage = action.payload;
    },
  },
});

export const { updateStage } = rewardSlice.actions;
export default rewardSlice.reducer;
