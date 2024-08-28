import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../bookSlice";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div className="d-flex col-md-6 justify-content-between">
        <p className="fs-2 fw-bold">Book List</p>
        <button className="btn btn-primary h-50 mt-3">
          <Link to="/bookForm" className="nav-link">
            Add Book
          </Link>
        </button>
      </div>
      <div className="col-md-6">
        <ul className="list-group">
          {books &&
            books.map((book) => (
              <li key={book._id} className="list-group-item px-3 py-2">
                <p>
                  <b>Name:</b> {book.title}
                </p>
                <p>
                  <b>Author:</b> {book.author}
                </p>

                <p>
                  <b>Summary:</b> {book.summary}
                </p>
                <div>
                  <button className="btn btn-primary">
                    <Link
                      to="/bookForm"
                      className="nav-link"
                      state={{ isEdit: true, id: book._id, books }}>
                      Edit
                    </Link>
                  </button>
                  <button
                    onClick={() => deleteHandler(book._id)}
                    className="btn btn-danger mx-3">
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default BookList;
