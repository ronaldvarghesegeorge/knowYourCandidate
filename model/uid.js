const mongoose = require('mongoose')

const uidSchema = new mongoose.Schema({
  key: String,
  description: String
})

module.exports = mongoose.model('uid', uidSchema)
