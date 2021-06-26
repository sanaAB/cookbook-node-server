const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const recipes = require("./routes/recipes.js");
require("./database");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;
app.use(express.json());
app.use("/api", recipes);

app.listen(port);

console.log("Server started at http://localhost:" + port);
