import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MovieView = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  return <div></div>;
};

export default MovieView;
