const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
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
});

module.exports = router;
