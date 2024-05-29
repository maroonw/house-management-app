const mongoose = require('mongoose');

const flooringSchema = new mongoose.Schema({
  room: String,
  type: String
});

const Flooring = mongoose.model('Flooring', flooringSchema);

module.exports = Flooring;
