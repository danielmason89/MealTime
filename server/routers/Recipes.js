const { Router } = require("express");
const recipe = require("../models/recipe");

const router = Router();

// Create Record in MongoDB
router.post("/recipes", (request, response) => {
  // const newRecipe = new recipe.model(request.body);
  recipe.model.create(request.body, (err, recipe) => {
    return err ? response.status(500).json(err) : response.json(recipe);
  });
});

// Get all recipe records
router.get("/recipes", (request, response) => {
  recipe.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a recipe by ID
router.get("/recipes/:id", (request, response) => {
  recipe.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Delete a recipe by ID
router.delete("/recipes/:id", (request, response) => {
  recipe.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Update a recipe by ID
router.put("/recipes/:id", (request, response) => {
  const body = request.body;
  recipe.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        meal: body.meal,
        time: body.time,
        diet: body.diet
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});
// don't forget to export the router Object
module.exports = router;
