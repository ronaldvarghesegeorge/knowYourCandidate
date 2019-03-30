const mongoose = require('mongoose');

const constituencySchema = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Constituency', constituencySchema);