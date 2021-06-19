const express = require("express");
const router = express.Router();
const recipes = require("../data");
const { getElementById, getElementByCategory } = require("../utils");

router.get("/:category", (req, res, next) => {
  const foundCategory = getElementByCategory(req.params.category, recipes);
  res.send(foundCategory);
});
router.get("/:category/:id", (req, res, next) => {
  const foundRecipe = getElementById(req.params.id, recipes);
  res.send(foundRecipe);
});

module.exports = router;
