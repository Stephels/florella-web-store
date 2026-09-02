import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

// This file sets up the Redux store for the application. It imports the reducers for user, cart, and product slices and combines them into a single store using configureStore from Redux Toolkit. The store is then exported for use in the application.
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
