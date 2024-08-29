import React from "react";
import Books from "./pages/book/Books";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookForm from "./pages/book/features/BookForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/bookForm" element={<BookForm />} />
      </Routes>
    </Router>
  );
};

export default App;
