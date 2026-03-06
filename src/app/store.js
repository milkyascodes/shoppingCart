import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/shoppingCart/productSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
