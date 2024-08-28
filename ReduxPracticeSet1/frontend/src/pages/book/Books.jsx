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
      <div></div>
    </>
  );
};

export default Books;
