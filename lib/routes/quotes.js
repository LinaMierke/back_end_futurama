const express = require("express");
const quotesController = require("../controllers/quotes")
const router = express();

router.get("/", quotesController.index)
router.get("/character/:character", quotesController.showCharacter)
router.get("/quote/:quote", quotesController.showQuote)
router.post("/", quotesController.create)
router.put("/quote/:quote", quotesController.edit)
router.delete("/:quote", quotesController.delete)


module.exports = router;
