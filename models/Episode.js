var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var EpisodeSchema = new Schema({
  title: String,
  date: Date,
  body: String,
  url: String,
});

// This creates our model from the above schema, using mongoose's model method
var Episode = mongoose.model("Episode", EpisodeSchema);

// Export the Book model
module.exports = Episode;
