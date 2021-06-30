const express = require("express");
const router = express.Router();
const RecipeSchema = require("../models/recipeSchema");


RecipeSchema.create();
router.get("/", (req, res, next) => {
  RecipeSchema.find({}, (err, data) => {
  console.log(data)
  res.send(data);
});
});
router.post("/", (req, res, next) => {
  RecipeSchema.create(
    req.body, (err, data) => {
  res.send(data);
});
});

module.exports = router;
