import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./../pages/movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
