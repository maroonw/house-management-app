const express = require('express');
const router = express.Router();
const MaintenanceTask = require('../models/MaintenanceTask');

// Dummy service professionals data
const serviceProfessionals = [
  { service: 'Lawn Care', name: 'GreenThumb', contact: '123-456-7890' },
  { service: 'HVAC Maintenance', name: 'CoolBreeze', contact: '987-654-3210' }
];

// Route to get service recommendations
router.get('/', async (req, res) => {
  try {
    const maintenanceTasks = await MaintenanceTask.find();
    const recommendations = [];

    // Check for overdue tasks or high maintenance times
    const now = new Date();
    maintenanceTasks.forEach(task => {
      const lastCompleted = new Date(task.lastCompleted);
      let isOverdue = false;

      if (task.frequency === 'Weekly') {
        isOverdue = (now - lastCompleted) > 7 * 24 * 60 * 60 * 1000;
      } else if (task.frequency === 'Monthly') {
        isOverdue = (now - lastCompleted) > 30 * 24 * 60 * 60 * 1000;
      } else if (task.frequency === 'Yearly') {
        isOverdue = (now - lastCompleted) > 365 * 24 * 60 * 60 * 1000;
      }

      if (isOverdue) {
        const professional = serviceProfessionals.find(pro => pro.service.toLowerCase().includes(task.task.toLowerCase()));
        if (professional) {
          recommendations.push(professional);
        }
      }
    });

    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
