import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice.js";
import filterReducer from "./filtersSlice.js";
import favoriteReducer from "./favoriteSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    favorites: favoriteReducer,
  },
});
