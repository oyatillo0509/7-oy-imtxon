import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
  name: "data",
  initialState: {
    allData: null,
  },
  reducers: {
    setAllData: (state, { payload }) => {
      state.allData = payload;
    },
  },
});

export const { setAllData } = data.actions;

export default data.reducer;
