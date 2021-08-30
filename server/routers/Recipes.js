const { Router } = require("express");
const router = Router();

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
