require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Login
router.post("/", async (req, res) => {
  let username = await req.body.username;
  let password = await req.body.password;

  User.where({ username: username })
    .fetch()
    .then((user) => {
      const isMatch = bcrypt.compareSync(password, user.attributes.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign(
        { username: user.attributes.user_name },
        process.env.JWT_SECRET,
        { expiresIn: "4h" }
      );
      const userLoggedIn = { ...user, userLoggedInName: username };
      req.userLoggedInToken = user;
      res.status(200).json({ userLoggedIn, token });
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

module.exports = router;
