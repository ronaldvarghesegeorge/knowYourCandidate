const mongoose = require('mongoose')

const partySchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Party'
  }
})

const constituencySchema = new mongoose.Schema({
  title: String,
  description: String,
  party: [partySchema],
  image: String,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model('Constituency', constituencySchema)
