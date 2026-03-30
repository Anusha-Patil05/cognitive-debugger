const express = require("express");
const router = express.Router();
const { handleEvent } = require("../controllers/eventController");

router.post("/event", handleEvent);

module.exports = router;
