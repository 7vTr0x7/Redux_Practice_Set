import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./bookSlice";

const Books = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);
  console.log(books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <div>{status === "Loading" && <p>Loading</p>}</div>
      <div>{error && <p>Error : {error}</p>}</div>
      <div>{books && books.length > 0}</div>
    </>
  );
};

export default Books;
