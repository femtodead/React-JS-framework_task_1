import { configureStore } from "@reduxjs/toolkit";
import listReducers from "./reducers/ListReducers";







const store = configureStore({
    reducer: {
        list: listReducers,
    }
});

export default store;