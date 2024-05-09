import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice";

const appStore = configureStore({
    reducer:{
        articles: articleReducer,
    }
});

export default appStore;