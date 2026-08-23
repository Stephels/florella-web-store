import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    shippingMethod: "Standard Shipping", // Default shipping method
    shippingCost: 30.0, // Default shipping cost
  },
  reducers: {
    addItem: (state, action) => {
      const { id, type, price } = action.payload;

      // Check if the same product with the same type is already in the cart
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.type === type,
      );

      if (existingItemIndex !== -1) {
        // If the item already exists with the same type, increase quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // Otherwise, add the item as a new entry to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Update the total amount
      state.totalAmount += price;
    },

    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        const quantityToRemove = action.payload.quantity;

        if (item.quantity > quantityToRemove) {
          // Decrease quantity only
          item.quantity -= quantityToRemove;
          state.totalAmount -= item.price * quantityToRemove;
        } else {
          // Remove the entire item if quantity reaches 0
          state.totalAmount -= item.price * item.quantity;
          state.items.splice(itemIndex, 1);
        }
      }
    },

    resetCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    setShippingMethod: (state, action) => {
      state.shippingMethod = action.payload.method;
      state.shippingCost = action.payload.cost;
    },
  },
});

export const { addItem, removeItem, resetCart, setShippingMethod } =
  cartSlice.actions;
export default cartSlice.reducer;
