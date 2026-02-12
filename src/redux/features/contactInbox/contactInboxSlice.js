import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const initialState = {
  loading: false,
  error: null,
};

export const addToContactBox = createAsyncThunk(
  "contactInbox/addToContactBox",
  async (newState, { rejectWithValue }) => {
    if (!navigator.onLine) {
      return rejectWithValue(
        "You’re offline. Please check your internet connection and try again.",
      );
    }

    try {
      const docRef = doc(db, "contactInbox", nanoid());

      const newValue = {
        ...newState,
        timeStamp: new Date().toISOString(),
      };

      await setDoc(docRef, newValue);
    } catch (error) {
      return rejectWithValue("Failed to send message.");
    }
  },
);

const contactInboxSlice = createSlice({
  name: "contactInbox",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addToContactBox.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToContactBox.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addToContactBox.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectContactLoading = (state) => state.contactInbox.loading;
export const selectContactError = (state) => state.contactInbox.error;
export default contactInboxSlice.reducer;
