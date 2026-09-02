import { createSlice } from "@reduxjs/toolkit"; //  Importing the createSlice function from Redux Toolkit to create a slice of the Redux store for user management.
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: [],
    error: null,
  },
  reducers: {
    // Adds a newly registered user to the list
    registerUser: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
    },

    // Checks the entered username/password against the registered users.
    // If it matches, log them in. If not, set an error message instead.
    logIn: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user) => user.username === username && user.password === password,
      );
      if (user) {
        state.currentUser = user.username;
        state.error = null;
      } else {
        state.currentUser = null;
        state.error =
          "The username or password you entered is incorrect. Please try again.";
      }
    },

    // Logs the user out and clears any old error message
    logOut: (state) => {
      state.currentUser = null;
      state.error = null;
    },

    // Clears the error message (used when leaving the Login page)
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const { registerUser, logIn, logOut, resetError } = userSlice.actions;
export default userSlice.reducer;
