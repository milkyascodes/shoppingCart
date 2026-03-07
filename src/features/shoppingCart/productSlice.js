import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log("data", response.data);

    return response.data;
  },
);
const productSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        console.log("loadin");
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
        console.log("failed");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeed";
        state.items = action.payload;
        console.log("success");
      });
  },
});

export default productSlice.reducer;
