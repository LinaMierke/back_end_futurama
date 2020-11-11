const express = require("express");
const router = express();


router.use("/quotes", require("./quotes"));
router.use("/characters", require("./characters"))

module.exports = router;