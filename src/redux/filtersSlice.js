import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: {
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
    },
    form: null,
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.type = action.payload;
    },
    toggleFeature(state, action) {
      const { equipment } = action.payload;
      state.equipment[equipment] = !state.equipment[equipment];
    },
    resetFilters(state) {
      state.location = "";
      state.equipment = {
        AC: false,
        automatic: false,
        kitchen: false,
        TV: false,
        bathroom: false,
      };
      state.form = null;
    },
  },
});

export default filtersSlice.reducer;

export const { setLocation, setForm, toggleFeature, resetFilters } =
  filtersSlice.actions;
