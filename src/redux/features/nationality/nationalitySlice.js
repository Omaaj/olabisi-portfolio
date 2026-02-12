import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  nationality: {},
  error: null,
};

export const getNationality = createAsyncThunk(
  "welcome/getNationality",
  async () => {
    try {
      const response = await axios("https://free.freeipapi.com/api/json");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const nationalitySlice = createSlice({
  name: "nationality",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNationality.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNationality.fulfilled, (state, action) => {
        state.loading = false;
        state.nationality = action.payload;
        state.error = null;
      })
      .addCase(getNationality.rejected, (state, action) => {
        state.loading = false;
        state.nationality = [];
        state.error = action.payload;
      });
  },
});

export const selectedLoading = (state) => state.nationality.loading;
export const selectedNationality = (state) => state.nationality.nationality;
export const selectedError = (state) => state.nationality.error;
export default nationalitySlice.reducer;
