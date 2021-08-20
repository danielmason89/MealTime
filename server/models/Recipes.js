const mongoose = require("mongoose");
const { mainModule } = require("process");

const RecipesSchema = mongoose.SChema({
  meal: { type: String },
  time: { type: Number },
  diet: { type: String }
});

mongoose.Schema({
  meal: String,
  time: Number,
  diet: String
});

module.exports = mongoose.model("Recipes", RecipesSchema);
