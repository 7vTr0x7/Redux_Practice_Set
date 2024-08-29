const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db/db.connection");
const Movies = require("./models/movie.model");

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

initializeDatabase();

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movies.find();
    if (movies.length > 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "Movies not found" });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get movies ${error}` });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
