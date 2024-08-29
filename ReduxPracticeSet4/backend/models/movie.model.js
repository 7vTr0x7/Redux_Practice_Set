const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  director: {
    type: String,
  },
  genre: [
    {
      type: String,
    },
  ],
});

const Movies = mongoose.model("Movies", movieSchema);

module.exports = Movies;
