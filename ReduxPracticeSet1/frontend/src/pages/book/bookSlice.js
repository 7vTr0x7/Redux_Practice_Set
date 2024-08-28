import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  try {
    const res = await fetch(
      "https://redux-practice-set-1-backend.vercel.app/books"
    );

    if (!res.ok) {
      console.log("Failed to get books");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addBookAsync = createAsyncThunk("deleteBook", async (book) => {
  try {
    const res = await fetch(
      `https://redux-practice-set-1-backend.vercel.app/books`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(book),
      }
    );

    if (!res.ok) {
      console.log("Failed to get books");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateBookAsync = createAsyncThunk(
  "deleteBook",
  async ({ id, book }) => {
    try {
      const res = await fetch(
        `https://redux-practice-set-1-backend.vercel.app/books/${id}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(book),
        }
      );

      if (!res.ok) {
        console.log("Failed to get books");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBookAsync = createAsyncThunk("deleteBook", async (id) => {
  try {
    const res = await fetch(
      `https://redux-practice-set-1-backend.vercel.app/books/${id}`,
      {
        method: "DELETE",
      }
    );

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
  reducers: {},
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

export default bookSlice.reducer;
