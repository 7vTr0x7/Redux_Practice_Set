require("dotenv").config({ path: "D:/redux/ReduxPracticeSet2/backend/.env" });
const mongoose = require("mongoose");

const mongoUrl = process.env.MONGODB;

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoUrl);
    if (connection) {
      console.log(` connected to mongodb `);
    }
  } catch (error) {
    console.log(`Failed to connect to mongodb ${error}`);
  }
};

module.exports = { initializeDatabase };
