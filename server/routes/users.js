const express = require("express");
const router = express.Router();
const User = require("../models/user");
const authorize = require("../middleware/authorize");

// get all Users
router.get("/", authorize, function (req, res) {
  User.fetchAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => res.status(400).json({ message: "Error getting users" }));
});

// get single user
router.get("/:id", authorize, function (req, res) {
  User.where({ id: req.params.id })
    .fetch()
    .then((user) => {
      console.log(req.userLoggedInToken, req.decoded);
      res.status(200).json(user);
    })
    .catch(() => res.status(400).json({ message: "Error getting user" }));
});

// getLoggedInUser

// router.get("/profile", authorize, (req, res) => {
//   const username = req.body.username;
//   User.where({ username: username })
//     .fetch()
//     .then((user) => {
//       console.log(req);
//       res.status(200).json(user);
//     })
//     .catch(() => res.status(400).json({ message: "Error getting user" }));
// });

// edit bio of user
router.put("/:id", authorize, (req, res) => {
  User.where({ id: req.params.id })
    .fetch()
    .then((user) => {
      user
        .save({
          biography: req.body.biography,
        })
        .then((updatedUser) => {
          res.status(200).json(updatedUser);
        });
    })
    .catch(() => {
      res.status(400).json({ message: "Error editting User Bio" });
    });
});

// delete single user
router.delete("/:id", authorize, (req, res, next) => {
  User.where({ id: req.params.id })
    .fetch()
    .then((user) => {
      user.destroy();
      res.status(204).json({ message: "User Deleted" });
    })
    .catch(() => {
      res.status(400).json({ message: "Failed to delete User" });
    });
});

module.exports = router;
