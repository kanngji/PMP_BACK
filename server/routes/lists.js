const express = require("express");
const {
  createList,
  getList,
  getLists,
  deleteList,
  updateList,
} = require("../controllers/listController");

const router = express.Router();

// GET all lists
router.get("/", getLists);

// GET a single list
router.get("/:id", getList);

// POST a new list
router.post("/", createList);

// DELETE a list
router.delete("/:id", deleteList);

// UPDATE a list
router.patch("/:id", updateList);
module.exports = router;
