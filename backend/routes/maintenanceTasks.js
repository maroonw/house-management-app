const express = require('express');
const router = express.Router();
const MaintenanceTask = require('../models/MaintenanceTask');

// Get all maintenance tasks
router.get('/', async (req, res) => {
  try {
    const maintenanceTasks = await MaintenanceTask.find();
    res.json(maintenanceTasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new maintenance task
router.post('/', async (req, res) => {
  const { task, frequency, lastCompleted, area } = req.body;

  try {
    const newTask = new MaintenanceTask({ task, frequency, lastCompleted, area });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
