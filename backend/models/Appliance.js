const mongoose = require('mongoose');

const applianceSchema = new mongoose.Schema({
  name: String,
  model: String,
  purchaseDate: Date,
  warranty: String,
  area: String
});

const Appliance = mongoose.model('Appliance', applianceSchema);

module.exports = Appliance;
