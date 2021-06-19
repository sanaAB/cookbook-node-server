const express = require('express');
const app = express();
const recipes = require("./data");


const port = process.env.PORT || 8080;
app.listen(port);


module.exports = app.get("/recipes",(req,res,next)=>{
    res.send(recipes);
});


console.log('Server started at http://localhost:' + port);
console.log("hello from cookbook server ..................................");