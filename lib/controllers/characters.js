const Characters = require("../models/Characters")

module.exports = {

  index: (req, res) => {
    Characters.find({})
      .then((characters) => {
        res.json(characters)
      })
  },

  showPlanet: (req, res) => {
    Characters.find({ planet: req.params.planet })
      .then((characters) => {
        res.json(characters)
      })
  },

  showName: (req, res) => {
    Characters.find({ name: req.params.name })
      .then((characters) => {
        res.json(characters)
      })
  },

  create: (req, res) => {
    Characters.create(req.body)
      .then((characters) => {
        res.json(characters)
      })
  },

  edit: (req, res) => {
    Characters.findOneAndUpdate({ name: req.params.name }, req.body, {new: true})
    .then((characters) => {
        res.json(characters)
      })

  },
  delete: (req, res) => {
    Characters.findOneAndDelete({ name: req.params.name })
      .then((characters) => {
        res.json(characters)
      })
    }
  }

  