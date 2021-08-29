const mongoose = require("mongoose");
const recipes = require("../models/recipes");

const recipesSchema = new mongoose.Schema({
  meal: String,
  time: String,
  diet: String
});

const Recipes = mongoose.model("Recipes", recipesSchema);

module.exports = {
  model: Recipes,
  schema: recipesSchema
};
