import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addMovieAsync, editMovieAsync, fetchMovies } from "../movieSlice";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { movie, isEdit } = location.state || {};

  const cancelHandler = () => {
    navigate("/");
  };

  const submitHandler = () => {
    if (title && director && genre) {
      const newMovie = {
        title,
        director,
        genre,
      };
      if (isEdit) {
        dispatch(editMovieAsync({ id: movie._id, movie: newMovie })).then(
          () => {
            dispatch(fetchMovies()).then(() => {
              navigate("/");
            });
          }
        );
      } else {
        dispatch(addMovieAsync(newMovie)).then(() => {
          dispatch(fetchMovies()).then(() => {
            navigate("/");
          });
        });
      }
    }
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(movie.title || "");
      setDirector(movie.director || "");
      setGenre(movie.genre || "");
    }
  }, [movie, isEdit]);

  return (
    <div className="container my-4">
      <p className="fs-2 fw-bold">Movie Form</p>
      <div className="border col-md-6 p-3 ">
        <form>
          <input
            placeholder="Title"
            className="form-control mt-2"
            value={title}
            required={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Director"
            className="form-control mt-2"
            value={director}
            required={true}
            onChange={(e) => setDirector(e.target.value)}
          />
          <input
            placeholder="Genre"
            className="form-control mt-2"
            value={genre}
            required={true}
            onChange={(e) => setGenre(e.target.value)}
          />
        </form>
        <div className="mt-3">
          <button className="btn btn-primary " onClick={submitHandler}>
            {isEdit ? "Edit" : "Add"}
          </button>
          <button className="btn btn-danger mx-3" onClick={cancelHandler}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
