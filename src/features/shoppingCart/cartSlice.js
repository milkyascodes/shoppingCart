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
        console.log("existingItem.quantity", existingItem.quantity);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.tempItems = [...state.items];
      console.log("state.tempItems", state.tempItems);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
