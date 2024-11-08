import { createSlice } from "@reduxjs/toolkit";

const initialRootState = {
  isLoading: false, // indicates loading state
  error: null, // error state
};

const rootSlice = createSlice({
  name: "root",
  initialState: initialRootState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.isLoading = true; // setting loading to true
          state.error = null; // resetting error
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false; // setting loading to false
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, action) => {
          state.error = action?.payload?.data || action?.error?.message; // setting error message if it exists
          state.isLoading = false; // setting loading to false
        }
      );
  },
});

export const rootReducer = rootSlice.reducer;
