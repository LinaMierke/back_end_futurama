const Quotes = require ("../models/Quotes")

module.exports = {

  index: (req, res) => {
    Quotes.find({})
      .then(quotes => {
        res.json(quotes)
      })
  },

  showCharacter: (req, res) => {
    Quotes.find({year: req.params.year})
      .then(quotes => {
        res.json(quotes)
      })
  },
  
  showQuote: (req, res) => {
    Quotes.find({quote: req.params.quote})
      .then(quotes => {
        res.json(quotes)
      })
  },
  create: (req, res) => {
    Quotes.create(req.body)
      .then(quotes => {
        res.json(quotes)
      })
  },
  edit: (req, res) => {
    Quotes.findOneAndUpdate({quote: req.params.quote}, req.body)
      .then(quotes => {
        res.json(quotes);
      }
      )
  },
  delete: (req, res) => {
   Quotes.findOneAndDelete({quote: req.params.quote})
      .then(quotes => {
        res.json(quotes)
      })
  }
}
