import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: 0,
};

export const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setNavbarHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const {} = navbarSlice.actions;
