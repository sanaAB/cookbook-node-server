const express = require("express");
const mongoose = require("mongoose");

const url = process.env.DATABASE_URL;
console.log(process.env.DATABASE_URL);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
