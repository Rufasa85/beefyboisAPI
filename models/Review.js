var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var ReviewSchema = new Schema({
  author: String,
  title: String,
  date: Date,
  body: String,
  score: Number
});

// This creates our model from the above schema, using mongoose's model method
var Review = mongoose.model("Review", ReviewSchema);

// Export the Book model
module.exports = Review;
