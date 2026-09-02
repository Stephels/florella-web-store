import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../Data/productsData";

// This slice manages the product data in the Redux store. It initializes the state with the productData imported from productsData.js and provides a reducer to set the products if needed.
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: productData,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
