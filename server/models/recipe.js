const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  meal: String,
  time: String,
  diet: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = {
  model: Recipe,
  schema: recipeSchema
};
