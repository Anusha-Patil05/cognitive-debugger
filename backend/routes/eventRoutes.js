const express = require("express");
const router = express.Router();
<<<<<<< HEAD

require.post("/event", (req, res) => {
    console.log("Received event:", req.body);
    res.send("ok");
})

module.exports = router;
=======
const { handleEvent } = require("../controllers/eventController");

router.post("/event", handleEvent);

module.exports = router;
>>>>>>> feature/backend-receiver
