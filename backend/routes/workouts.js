const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

router.post("/", (req, res) => {
  res.json({ msg: "POST a single workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a single workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a single workout" });
});



module.exports = router;