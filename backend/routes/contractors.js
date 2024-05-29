const express = require('express');
const router = express.Router();
const Contractor = require('../models/Contractor');

// Get all contractors
router.get('/', async (req, res) => {
  try {
    const contractors = await Contractor.find();
    res.json(contractors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new contractor
router.post('/', async (req, res) => {
  const { name, contact, service } = req.body;

  try {
    const newContractor = new Contractor({ name, contact, service });
    await newContractor.save();
    res.json(newContractor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
