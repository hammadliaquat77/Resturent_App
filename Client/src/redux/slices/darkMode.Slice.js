// src/redux/slices/darkModeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false, // default light
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      // save to localStorage
      localStorage.setItem("darkMode", state.darkMode);
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem("darkMode", state.darkMode);
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
