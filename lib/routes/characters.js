const express = require('express')
const charactersController = require('../controllers/characters')
const router = express();

router.get("/", charactersController.index)
router.get("/planet/:planet", charactersController.showPlanet)
router.get("/name/:name", charactersController.showName)
router.post("/", charactersController.create)
router.put("/age/:age", charactersController.edit)
router.delete("/:status", charactersController.delete)


module.exports = router