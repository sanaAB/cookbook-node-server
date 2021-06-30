const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true }, 
  slug: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: Array, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});
recipeSchema.index({ slug: 1, userid: 1 }, { unique: true });
const model = mongoose.model('recipe', recipeSchema);
module.exports = model;
