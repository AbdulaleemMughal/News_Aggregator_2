import { createSlice, current } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    isNews: JSON.parse(localStorage.getItem("news"))
      ? JSON.parse(localStorage.getItem("news"))
      : [],
  },
  reducers: {
    addNews: (state, action) => {
      state.isNews = action.payload;
      let newsData = JSON.stringify(state.isNews);
      localStorage.setItem("news", newsData);
    },
    clearNews: (state, action) => {
        state.isNews.length = 0;
      localStorage.clear();
    },
  },
});

export const { addNews, clearNews } = newsSlice.actions;

export default newsSlice.reducer;
