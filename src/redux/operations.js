import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperByid } from "../api/api.js";
import toast from "react-hot-toast";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ currentPage, limit, filters }, thunkAPI) => {
    try {
      const data = await fetchAllCampers({ currentPage, limit, filters });
      return data;
    } catch (error) {
      toast.error("No search results.");
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
