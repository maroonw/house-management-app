const mongoose = require('mongoose');

const maintenanceTaskSchema = new mongoose.Schema({
  task: String,
  frequency: String,
  lastCompleted: Date,
  area: String
});

const MaintenanceTask = mongoose.model('MaintenanceTask', maintenanceTaskSchema);

module.exports = MaintenanceTask;
