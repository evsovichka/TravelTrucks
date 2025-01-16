import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite(state, action) {
      const camperId = action.payload;
      if (!state.items.includes(camperId)) {
        state.items.push(camperId);
      }
    },
    deleteFavorite(state, action) {
      const camperId = action.payload;
      state.items = state.items.filter((id) => id !== camperId);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
