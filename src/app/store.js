import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/shoppingCart/productSlice";
import cartReducer from "../features/shoppingCart/cartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
