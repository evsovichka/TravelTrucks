export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectFavoriteCampers = (state) => state.favorites.items;
export const selectLocation = (state) => state.filters.location;
export const selectEquipment = (state) => state.filters.equipment;
export const selectForm = (state) => state.filters.form;
