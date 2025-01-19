import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperById } from "../api/api.js";
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
  "camperById/fetchById",
  async (id, thunkAPI) => {
    try {
      const data = await fetchCamperById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
