const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("email", "invalid email").isEmail(),
    body("password", "password length should be atleast 5 characters").isLength(
      { min: 5 }
    ),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.send({ success: true });
    } catch (err) {
      console.log(err);
      res.send({ success: false });
    }
  }
);

module.exports = router;
