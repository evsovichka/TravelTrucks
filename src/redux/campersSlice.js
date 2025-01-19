import { createSlice } from "@reduxjs/toolkit";
import { fetchById, fetchCampers } from "./operations.js";
import storage from "redux-persist/lib/storage";

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    camper: {},
    isLoading: false,
    error: null,
    currentPage: 1,
    totalItems: 0,
    limit: 4,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setRemoveItems(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload.items);
        state.totalItems = action.payload.total;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchById.pending, handlePending)
      .addCase(fetchById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(fetchById.rejected, handleRejected);
  },
});

export const { setCurrentPage, setRemoveItems } = campersSlice.actions;

export default campersSlice.reducer;
