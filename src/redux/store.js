import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice.js";
import filterReducer from "./filtersSlice.js";
import favoriteReducer from "./favoriteSlice.js";
import camperByIdReducer from "./camperByIdSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedCampersReducer = persistReducer(
  { key: "campers", storage },
  campersReducer
);

const persistedFiltersReducer = persistReducer(
  {
    key: "filters",
    storage,
  },
  filterReducer
);

const persistedCamperByIdReducer = persistReducer(
  {
    key: "camperById",
    storage,
  },
  camperByIdReducer
);
const persistedFavoritesReducer = persistReducer(
  { key: "Favorites", storage },
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    filters: persistedFiltersReducer,
    favorites: persistedFavoritesReducer,
    camperById: persistedCamperByIdReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
