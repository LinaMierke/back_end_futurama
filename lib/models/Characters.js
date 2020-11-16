const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const Characters = new Schema({
    species: String,
    age: String,
    planet: String,
    profession: String,
    status: String,
    firstAppearance: String,
    picUrl: String,
    relatives: String,
    voicedBy: String,
    name: String,
    quote: String
})

module.exports = mongoose.model('Characters', Characters)
