const mongoose = require("mongoose");
const { constants } = require("./constants");

const connectToMongoDB = (db) => {
  console.log("connecting to MongoDB...");
  mongoose.set("strictQuery", true);
  mongoose.connect(constants.DATABASE_URI).then(() => {
      console.log("Successfully Connected to MongoDB!");
      db();
    })
    .catch((err) => {
      console.log(err)
      console.log("An error occurred while connecting to MongoDB");
    });
};

module.exports = connectToMongoDB;
