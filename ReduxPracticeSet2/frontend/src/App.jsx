import React from "react";
import MovieView from "./pages/movies/MovieView";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieForm from "./pages/movies/features/MovieForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieView />} />
        <Route path="/movieForm" element={<MovieForm />} />
      </Routes>
    </Router>
  );
};

export default App;
