import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentPage: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload.items);
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const setCurrentPage = campersSlice.actions.setCurrentPage;
export default campersSlice.reducer;
