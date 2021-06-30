const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
var cors = require("cors");
const app = express();
const recipes = require("./routes/recipes.js");

const port = process.env.PORT || 8080;
const db = require("./database");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/api", recipes);

app.listen(port);
console.log("Server started at http://localhost:" + port);
