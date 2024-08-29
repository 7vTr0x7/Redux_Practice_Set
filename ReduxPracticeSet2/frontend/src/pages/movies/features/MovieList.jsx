import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovieAsync, fetchMovies } from "../movieSlice";

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteMovieAsync(id)).then(() => {
      dispatch(fetchMovies());
    });
  };

  return (
    <>
      <div>
        <div className="d-flex col-md-6 justify-content-between">
          <p className="fs-2 fw-bold">Movie List</p>
          <button className="btn btn-primary h-50 mt-3">Add Movie</button>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            {movies.map((movie) => (
              <li className="list-group-item" key={movie._id}>
                <p>
                  <b>Title: </b>
                  {movie.title}
                </p>
                <p>
                  <b>Director: </b>
                  {movie.director}
                </p>
                <p>
                  <b>Genre: </b>
                  {movie.genre.join(", ")}
                </p>

                <button className="btn btn-primary ">Edit</button>
                <button
                  className="btn btn-danger mx-3"
                  onClick={() => deleteHandler(movie._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieList;
