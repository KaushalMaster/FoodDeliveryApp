const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://kaushalpdpusem6:OuFYND1KsvKqUkjd@cluster0.ltixltj.mongodb.net/?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   await mongoose.connect(mongoURI, () => {
//     console.log("Database connected");
//   });
// };

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
