import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    isArticles: [],
  },
  reducers: {
    addArticles: (state, action) => {
      state.isArticles = action.payload;
    },
  },
});

export const { addArticles } = articleSlice.actions;

export default articleSlice.reducer;