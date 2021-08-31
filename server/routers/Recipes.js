const { Router } = require("express");
const recipe = require("../models/recipe");
const router = Router();

// Create a Record in MongoDB
router.post("/recipes", (request, response) => {
  const newRecipe = new recipe.model(request.body);
  newRecipe.save((err, recipe) => {
    return err ? response.sendStatus(500).json(err) : response.json(recipe);
  });
});

router
  .route("/recipes/:name")
  .get((req, res) => {
    const name = req.params.name;
    res.status(200).json({ message: `I would love ${name} to buy me coffee.` });
  })
  .post((req, res) => {
    res.send("I love coffee too");
  })
  .post((request, response) => {
    response.json(request.body);
  });

// don't forget to export the router Object
module.exports = router;
