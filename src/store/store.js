import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/TodoSlice"; // Correct import

// Configure the store
const store = configureStore({
    reducer: {
        todo: todoReducer, // Set up the slice reducer
    },
});

// Export the configured store
export default store;
