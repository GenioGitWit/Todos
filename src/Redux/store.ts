import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";

const store = configureStore({
    reducer : {
        Todo : TodoSlice
    }
});

export default store;