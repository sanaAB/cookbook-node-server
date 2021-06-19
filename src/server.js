const express = require("express");
const app = express();
const recipes = require("./routes/recipes.js");

const port = process.env.PORT || 8080;

app.use("/api", recipes);

app.listen(port);

console.log("Server started at http://localhost:" + port);
console.log(recipes);
