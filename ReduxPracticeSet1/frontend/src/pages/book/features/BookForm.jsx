import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");

  const location = useLocation();
  const { isEdit, id, books } = location.state || {};

  useEffect(() => {
    if (isEdit) {
      const selected = books.find((book) => book._id == id);

      setAuthor(selected.author);
      setTitle(selected.title);
      setSummary(selected.summary);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      summary,
    };
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
        </form>
      </div>
    </div>
  );
};

export default BookForm;
