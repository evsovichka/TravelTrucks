import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperByid } from "../api/api.js";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ currentPage, limit }, thunkAPI) => {
    try {
      const data = await fetchAllCampers({ currentPage, limit });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchById = createAsyncThunk(
  "campers/fetchById",
  async ({ id }, thunkAPI) => {
    try {
      const data = await fetchCamperByid({ id });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
