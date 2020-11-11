const Characters = require('../models/Characters')
const Quotes = require('../models/Quotes')
const characterData = require('./characters.json')
const quotesData = require('./quotes.json')

Quotes.deleteMany({})
.then(()=>{  
Quotes.create(
  quotesData
  )
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
})


Characters.deleteMany({})
.then(()=>{
Characters.create(
  characterData
  ).then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
})

