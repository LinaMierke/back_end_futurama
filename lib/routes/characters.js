const express = require('express')
const charactersController = require('../controllers/characters')
const router = express();

router.get("/", charactersController.index)
router.get("/planet/:planet", charactersController.showPlanet)
router.get("/name/:name", charactersController.showName)
router.post("/", charactersController.create)
router.put("/planet/:name", charactersController.edit)
router.delete("/delete/:name", charactersController.delete)


module.exports = router
