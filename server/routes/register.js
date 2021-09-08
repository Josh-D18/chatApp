require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Create New User
router.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let biography = req.body.biography;
  bcrypt
    .hash(password, 10)
    .then((hashPassword) => {
      new User({
        username: username,
        password: hashPassword,
        biography: biography,
      })
        .save()
        .then((user) => {
          let token = jwt.sign(
            { username: user.username, password: user.password },
            process.env.JWT_SECRET,
            { expiresIn: "3h" }
          );
          res.json({ token: token });
        })
        .catch((err) => {
          res.status(400).send({ error: err.message });
        });
    })
    .catch((err) => res.status(400).send({ error: err.message }));
});

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token === null) return res.sendStatus(401);
// }

module.exports = router;
