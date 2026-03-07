import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
    removeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      state.items = state.items.filter((item) => item.id !== existingItem.id);

      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
    decreaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        if (existingItem.quantity === 1) return;
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
    increaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
