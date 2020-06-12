const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  icon: { type: String },
})

module.exports = new mongoose.model('Item', schema)