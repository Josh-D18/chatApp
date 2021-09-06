const express = require("express");
const router = express.Router();
const User = require("../models/user");

// define the home page route
router.get("/", function (req, res) {
  User.fetchAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => res.status(400).json({ message: "Error getting users" }));
});
// define the about route
router.get("/about", function (req, res) {
  res.send("About birds");
});

module.exports = router;
