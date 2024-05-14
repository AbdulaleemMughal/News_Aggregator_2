import { createSlice, current } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    isNews: JSON.parse(localStorage.getItem("news"))
    ? JSON.parse(localStorage.getItem("news")): [],
  },
    
  reducers: {
    addNews: (state, action) => {
      state.isNews = action.payload;
      const userNews = JSON.stringify(state.isNews);
      localStorage.setItem("news", userNews);
    },
    clearNews: (state) => {
      state.isNews.length = 0;
      localStorage.clear("news");
    },
  },
});

export const { addNews, clearNews } = newsSlice.actions;

export default newsSlice.reducer;
