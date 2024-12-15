import { createSlice } from "@reduxjs/toolkit";

// Safely get initial state from localStorage
let storedUserData = null;
try {
  const rawData = localStorage.getItem("userData");
  if (rawData && rawData !== "undefined") {
    storedUserData = JSON.parse(rawData); // Parse only if valid
  }
} catch (error) {
  console.error("Error parsing userData from localStorage:", error);
}

const storedStatus = storedUserData ? true : false;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: storedUserData,
    status: storedStatus, // true means logged in, false means not logged in
    error: null, // Add error field for storing error messages
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload; // Set user data
      state.status = true; // Set status to true when logged in
      state.error = null; // Clear any previous errors
      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: state => {
      state.userData = null;
      state.status = false; // Set status to false when logged out
      state.error = null; // Clear any previous errors
      // Clear user data from localStorage
      localStorage.removeItem("userData");
    },
    setError: (state, action) => {
      state.error = action.payload; // Set error message
    },
    clearError: state => {
      state.error = null; // Clear error message
    },
  },
});

export const { login, logout, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
