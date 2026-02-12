import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const initialState = {
  loading: false,
  error: null,
};

export const addAndSaveWelcome = createAsyncThunk(
  "welcome/addAndSaveWelcome",
  async ({ welcomeid }, { rejectWithValue }) => {
    if (!navigator.onLine) {
      return rejectWithValue(
        "You’re offline. Please check your internet connection and try again.",
      );
    }

    try {
      const docRef = doc(db, "welcome", welcomeid?.cityName);

      const snaps = await getDoc(docRef);

      if (snaps.exists()) {
        await updateDoc(docRef, {
          timeStamp: new Date().toISOString(),
          quantity: 1,
        });
      } else {
        await setDoc(docRef, {
          city: welcomeid?.cityName,
          region: welcomeid?.regionName,
          country: welcomeid?.countryName,
          timeStamp: new Date().toISOString(),
          quantity: 1,
        });
      }

      return { welcomeid };
    } catch (error) {
      return rejectWithValue("Network Issue Try again...");
    }
  },
);

const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addAndSaveWelcome.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAndSaveWelcome.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addAndSaveWelcome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectedWelcomeLoading = (state) => state.welcome.loading;
export const selectedWelcomeError = (state) => state.welcome.error;
export default welcomeSlice.reducer;
