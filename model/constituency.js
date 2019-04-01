const mongoose = require('mongoose')

const constituencySchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model('Constituency', constituencySchema)
