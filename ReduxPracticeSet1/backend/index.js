const express = require("express");
const cors = require("cors");
const app = express();

const { initializeDatabase } = require("./db/db.connection");
const { Books } = require("./models/books.model");

app.use(cors());
app.use(express.json());

initializeDatabase();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/books", async (req, res) => {
  try {
    const allbooks = await Books.find();
    res.json(allbooks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/books", async (req, res) => {
  const { title, author, genre, summary } = req.body;

  try {
    const bookData = new Books({ title, author, summary });
    await bookData.save();
    res.status(201).json(bookData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/books/:id", async (req, res) => {
  const { title, author, genre, summary } = req.body;

  try {
    const bookData = await Books.findByIdAndUpdate(
      req.params.id,
      { title, author, summary },
      { new: true }
    );
    res.status(201).json(bookData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/books/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const deletedBook = await Books.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
