import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import topNewsReducer from "./topNewsSlice"

const appStore = configureStore({
    reducer:{
        news: newsReducer,
        topNews: topNewsReducer,
    },
});

export default appStore;