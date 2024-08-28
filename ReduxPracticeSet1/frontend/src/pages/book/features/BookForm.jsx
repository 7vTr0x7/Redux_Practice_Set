import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addBookAsync, fetchBooks, updateBookAsync } from "../bookSlice";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isEdit, id, books } = location.state || {};

  useEffect(() => {
    if (isEdit && books.length > 0) {
      const selected = books.find((book) => book._id == id);

      if (selected) {
        setAuthor(selected.author || "");
        setTitle(selected.title || "");
        setSummary(selected.summary || "");
      }
    }
  }, [books, isEdit, id]);

  const submitHandler = (e) => {
    e.preventDefault();

    if ((title, author, summary)) {
      const newBook = {
        title,
        author,
        summary,
      };
      if (isEdit) {
        dispatch(updateBookAsync({ id, book: newBook })).then(() => {
          dispatch(fetchBooks()).then(() => {
            navigate("/");
          });
        });
      } else {
        dispatch(addBookAsync(newBook)).then(() => {
          dispatch(fetchBooks()).then(() => {
            navigate("/");
          });
        });
      }
    }
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container my-4">
      <p className="fs-2 fw-bold">Book Form</p>
      <div className="my-3 border p-3 col-md-5">
        <form>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            className="form-control mt-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <textarea
            className="form-control mt-2"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
            rows={4}></textarea>

          <button
            className="btn btn-primary mt-3"
            type="submit"
            onClick={submitHandler}>
            {isEdit ? "Edit" : "Add"}
          </button>
          <button className="btn btn-danger mt-3 mx-3" onClick={cancelHandler}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
