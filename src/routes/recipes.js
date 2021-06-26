const express = require("express");
const router = express.Router();
// const recipes = require("../database");
// const { getElementById, getElementByCategory } = require("../utils");
const RecipeSchema = require("../models/recipeSchema");

router.get("/", (req, res, next) => {
  RecipeSchema.find({}, (err, data) => {
    if (err) {
      console.log("ERR", err);
      return;
    }
    console.log(data);
    res.send(data);
  });
});
// router.get("/:category", (req, res, next) => {
//   const foundCategory = getElementByCategory(req.params.category, recipes);
//   res.send(foundCategory);
// });
// router.get("/:category/:id", (req, res, next) => {
//   const foundRecipe = getElementById(req.params.id, recipes);
//   res.send(foundRecipe);
// });

module.exports = router;
