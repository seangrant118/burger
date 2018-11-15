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

router.post("api/burgers", (req, res) => {
  burger.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], (result) => {
    res.json({ id: result.insertId});
  })
})

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    eaten: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

router.delete("api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

module.exports = router;