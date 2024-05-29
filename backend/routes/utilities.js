const express = require('express');
const router = express.Router();
const Utility = require('../models/Utility');

// Get all utilities
router.get('/', async (req, res) => {
  try {
    const utilities = await Utility.find();
    res.json(utilities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new utility
router.post('/', async (req, res) => {
  const { name, provider, accountNumber, billingHistory, paymentDueDate } = req.body;

  try {
    const newUtility = new Utility({ name, provider, accountNumber, billingHistory, paymentDueDate });
    await newUtility.save();
    res.json(newUtility);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
