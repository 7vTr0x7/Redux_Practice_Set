import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./bookSlice";
import BookList from "./features/BookList";

const Books = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="container my-5">
      <div>{status === "Loading" && <p>Loading</p>}</div>
      <div>{error && <p>Error : {error}</p>}</div>
      <div>{books && books.length > 0 && <BookList books={books} />}</div>
    </div>
  );
};

export default Books;
