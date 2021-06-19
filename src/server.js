const express = require('express');
const app = express();
const recipes = require("./recipesRoute");


const port = process.env.PORT || 8080;
app.listen(port);

app.use('/', recipes);


console.log('Server started at http://localhost:' + port);
console.log(recipes);