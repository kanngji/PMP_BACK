const express = require("express");

const router = express.Router();

// GET all lists
router.get("/", (req, res) => {
  res.json({ mssg: "GET all lists" });
});

// GET a single list
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single list" });
});

// POST a new list
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new list" });
});

// DELETE a list
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new list" });
});

// UPDATE a list
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new list" });
});
module.exports = router;
