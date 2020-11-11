const mongoose = require('../db/connections')

const Quotes = new mongoose.Schema({
  character: String,
  quote: String,
  image: String
})

module.exports = mongoose.model('Quotes', Quotes)