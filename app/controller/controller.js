var express = require("express");

var router = express.Router();

var munch = require("../models/munch.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  munch.selectAll(function(data) {
    var results = {
      food: data
    };
    console.log(results);
    res.render("index", results);
  });
});

router.post("/api/munch", function(req, res) {
  munch.create([
    "name", "munched"
  ], [
    req.body.name, req.body.munched
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/munch/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(condition);

  munch.update({munched: req.body.munched}, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
