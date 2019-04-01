const mongoose = require('mongoose')

const partySchema = new mongoose.Schema({
  title: String,
  description: String
})

module.exports = mongoose.model('Party', partySchema)
