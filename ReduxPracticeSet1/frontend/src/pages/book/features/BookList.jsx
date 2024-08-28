import React from "react";

const BookList = ({ books }) => {
  const deleteHandler = () => {};

  return (
    <>
      <p className="fs-2 fw-bold">Book List</p>
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
                <button
                  onClick={deleteHandler}
                  className="btn btn-danger float-end mx-2">
                  Delete
                </button>
                <p>
                  <b>Summary:</b> {book.summary}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default BookList;
