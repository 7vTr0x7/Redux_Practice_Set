import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  try {
    const res = await fetch(
      "https://redux-practice-set-2-backend.vercel.app/movies"
    );

    if (!res.ok) {
      console.log("Failed to get movies");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteMovieAsync = createAsyncThunk(
  "deleteMovieAsync",
  async (id) => {
    try {
      const res = await fetch(
        `https://redux-practice-set-2-backend.vercel.app/movies/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        console.log("Failed to delete movie");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const editMovieAsync = createAsyncThunk(
  "editMovieAsync",
  async ({ id, movie }) => {
    try {
      const res = await fetch(
        `https://redux-practice-set-2-backend.vercel.app/movies/${id}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(movie),
        }
      );

      if (!res.ok) {
        console.log("Failed to edit movie");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "Success";
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "Failed";
      state.error = "Failed to get movies";
    });
  },
});

export default movieSlice.reducer;
