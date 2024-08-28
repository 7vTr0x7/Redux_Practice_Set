import React from "react";
import Books from "./pages/book/Books";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookForm from "./pages/book/features/BookForm";

const App = () => {
  return (
    <>
      <Books />

      <Router>
        <Routes>
          <Route path="/" to={<Books />} />
          <Route path="/bookFrom" to={<BookForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
