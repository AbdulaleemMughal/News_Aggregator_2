import { createSlice } from "@reduxjs/toolkit";

const topNewsSlice = createSlice({
    name: 'topNews',
    initialState: {
        isTopNews: [],
    },
    reducers: {
        addTopNews: (state, action) => {
            state.isTopNews = action.payload;
        },
        addAuthor: (state, action) => {
            state.isTopNews = action.payload;
        },
    },
});

export const {addTopNews, addAuthor} = topNewsSlice.actions;

export default topNewsSlice.reducer;