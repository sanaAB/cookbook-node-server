const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  slug: String,
  description: String,
  ingredients: Array,
  category: String,
  image: String,
  // date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("recipe", recipeSchema);
