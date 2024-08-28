const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: [
    {
      type: String,
    },
  ],
});

const Books = mongoose.model("Books", bookSchema);

module.exports = { Books };
