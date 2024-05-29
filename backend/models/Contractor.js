const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
  name: String,
  contact: String,
  service: String
});

const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;
