import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: [], // store registered users
    error: null,
  },
  reducers: {
    registerUser: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
    },
    logIn: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user) => user.username === username && user.password === password,
      );
      if (user) {
        state.currentUser = user.username;
        state.error = null; // Clear any existing error
      } else {
        state.currentUser = null;
        state.error =
          "The username or password you entered is incorrect. Please try again.";
      }
    },
    logOut: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    resetError: (state) => {
      state.error = null; // Clear the error
    },
  },
});

export const { registerUser, logIn, logOut, resetError } = userSlice.actions;
export default userSlice.reducer;
