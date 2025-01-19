import { createSlice } from "@reduxjs/toolkit";
import { fetchById } from "./operations.js";

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const camperByIdSlice = createSlice({
  name: "camperById",
  initialState: {
    item: {},
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchById.pending, handlePending)
      .addCase(fetchById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchById.rejected, handleRejected);
  },
});

export default camperByIdSlice.reducer;
