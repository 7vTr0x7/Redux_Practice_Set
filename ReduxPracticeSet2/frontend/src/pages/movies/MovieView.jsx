import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MovieView = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  return (
    <div className="container my-4">
      <div>
        {status === "Loading" && (
          <p className="fs-3 fw-semibold">Loading ... </p>
        )}
      </div>
      <div>{error && <p className="fs-3 fw-semibold">Error : {error} </p>}</div>
    </div>
  );
};

export default MovieView;
