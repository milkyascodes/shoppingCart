import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/shoppingCart/productSlice";
import cartReducer from "../features/shoppingCart/cartSlice";
import authReducer from "../features/authentication/authSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
