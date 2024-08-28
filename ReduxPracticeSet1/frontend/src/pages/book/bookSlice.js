import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  try {
    const res = await fetch("http://localhost:4000/books");

    if (!res.ok) {
      console.log("Failed to get books");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  reducers: {
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book._id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "Success";
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "Failed";
      state.error = "Failed to get books";
    });
  },
});

export const { deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
