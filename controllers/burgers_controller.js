const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const burgerObject = {
      burgers: data
    }
    console.log(burgerObject);
    res.render("index", burgerObject);
  })
})