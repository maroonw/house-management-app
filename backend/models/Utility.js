const mongoose = require('mongoose');

const utilitySchema = new mongoose.Schema({
  name: String,
  provider: String,
  accountNumber: String,
  billingHistory: [String],
  paymentDueDate: Date
});

const Utility = mongoose.model('Utility', utilitySchema);

module.exports = Utility;
