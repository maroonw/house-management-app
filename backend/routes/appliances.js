const express = require('express');
const router = express.Router();
const Appliance = require('../models/Appliance');

// Get all appliances
router.get('/', async (req, res) => {
  try {
    const appliances = await Appliance.find();
    res.json(appliances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new appliance
router.post('/', async (req, res) => {
  const { name, model, purchaseDate, warranty, area } = req.body;

  try {
    const newAppliance = new Appliance({ name, model, purchaseDate, warranty, area });
    await newAppliance.save();
    res.json(newAppliance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
