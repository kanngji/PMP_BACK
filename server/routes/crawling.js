const express = require("express");

const getCrawlings = require("../controllers/crawlingController");
const router = express.Router();

// GET 크롤링 lists
router.get("/", getCrawlings);

module.exports = router;
