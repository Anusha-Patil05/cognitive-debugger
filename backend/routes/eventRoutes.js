const express = require("express");
const router = express.Router();

require.post("/event", (req, res) => {
    console.log("Received event:", req.body);
    res.send("ok");
})

module.exports = router;