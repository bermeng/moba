const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
})

module.exports = new mongoose.model('Hero', schema)