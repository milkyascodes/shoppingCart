import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  tempItems: [],
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
        console.log("exitst");

        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      console.log("total", state.totalPrice);
    },
    removeFromCart(state, action) {
      console.log("one two");

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      console.log("total", state.totalPrice);
      state.items = state.items.filter((item) => item.id !== existingItem.id);
      console.log(state.items);

      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
