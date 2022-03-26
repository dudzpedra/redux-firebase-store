import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  quantity: 0,
  items: [],
  showCart: false,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const alreadyOnCart = state.items.find((item) => item.id === newItem.id);
      if (alreadyOnCart) {
        alreadyOnCart.quantity++;
        alreadyOnCart.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.quantity++;
      }
      state.total += newItem.price;
    },
    remove(state, action) {
      state.changed = true;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.quantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.total -= existingItem.price;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    replaceData(state, action) {
      state.items = action.payload.items;
      state.total = action.payload.total;
      state.quantity = action.payload.quantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
