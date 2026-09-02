import { createSlice } from "@reduxjs/toolkit";

// This slice handles everything to do with the cart - the running total, and which shipping option is picked.
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    shippingMethod: "Standard Shipping",
    shippingCost: 30.0,
  },
  reducers: {
    // Adds an item to the cart. If the same product/type combo is already in the cart, it just bumps the quantity up by 1. Otherwise it adds a new row to the cart for that product/type. It also updates the total amount in the cart.
    addItem: (state, action) => {
      const { id, type, price } = action.payload;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.type === type,
      );

      if (existingItemIndex !== -1) {
        // Product/type combo already exists in the cart, just increase the quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // New product/type combo, add it as a fresh row
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount += price;
    },

    // Removes an item from the cart. If the quantity of that product/type combo is greater than 1, it just lowers the quantity by 1. If the quantity is 1, it removes that row from the cart completely. It also updates the total amount in the cart.
    removeItem: (state, action) => {
      const { id, type, quantity } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id === id && item.type === type,
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];

        if (item.quantity > quantity) {
          // Still some left, just lower the count
          item.quantity -= quantity;
          state.totalAmount -= item.price * quantity;
        } else {
          // None left, remove the row completely
          state.totalAmount -= item.price * item.quantity;
          state.items.splice(itemIndex, 1);
        }
      }
    },

    // Clears out the whole cart (used by the "Reset Cart" button)
    resetCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },

    // Updates which shipping option is selected and its price
    setShippingMethod: (state, action) => {
      state.shippingMethod = action.payload.method;
      state.shippingCost = action.payload.cost;
    },
  },
});

export const { addItem, removeItem, resetCart, setShippingMethod } =
  cartSlice.actions;
export default cartSlice.reducer;
