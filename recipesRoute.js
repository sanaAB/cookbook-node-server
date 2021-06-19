const express = require('express');
const router = express.Router();
const recipes = require("./data");

    router.get("/",(req,res,next)=>{
        res.send(recipes);
    });

    module.exports = router;


