const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
  name: String,
  description: String,
  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Party'
  },
  constituency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Constituency'
  },
  image: String,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model('Candidate', candidateSchema)
