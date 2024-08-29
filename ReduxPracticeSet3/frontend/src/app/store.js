import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../pages/book/bookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
