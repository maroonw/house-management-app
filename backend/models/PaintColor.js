const mongoose = require('mongoose');

const paintColorSchema = new mongoose.Schema({
  room: String,
  color: String
});

const PaintColor = mongoose.model('PaintColor', paintColorSchema);

module.exports = PaintColor;
