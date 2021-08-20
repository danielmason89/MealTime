const express = require("express");
const router = express.Router();

router.get("/Recipes", (response, request) => {
  response.send("recipes");
});

module.exports = router;
