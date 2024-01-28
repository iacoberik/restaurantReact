import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    i: [],
  },
  reducers: {
    addI: (state, action) => {
      state.i.push(action.payload);
    },
    removeI: (state, action) => {
      state.i.pop();
    },
    clearI: (state) => (state.i.length = 0),
  },
});

export const { addI, removeI, clearI } = cartsSlice.actions;
export default cartsSlice.reducer;
