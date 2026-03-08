import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://api.realworld.show/api/users",
        { user: userData },
      );
      console.log("Server response:", response.data);
      return response.data.user;
    } catch (error) {
      // Safe fallback if response or data is undefined
      const errors = error.response?.data?.errors || { message: error.message };
      return thunkAPI.rejectWithValue(errors);
    }
  },
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://api.realworld.show/api/users/login",
        { user: userData },
      );
      console.log("Server response:", response.data);
      return response.data.user;
    } catch (error) {
      // Safe fallback if response or data is undefined
      const errors = error.response?.data?.errors || { message: error.message };
      return thunkAPI.rejectWithValue(errors);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: undefined,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // capture server or network errors
        console.log("Registration failed:", action.payload);
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // capture server or network errors
        console.log("Login failed:", action.payload);
      });
  },
});

export default authSlice.reducer;
