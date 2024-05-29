const express = require('express');
const router = express.Router();
const Flooring = require('../models/Flooring');

// Get all floorings
router.get('/', async (req, res) => {
  try {
    const floorings = await Flooring.find();
    res.json(floorings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new flooring
router.post('/', async (req, res) => {
  const { room, type } = req.body;

  try {
    const newFlooring = new Flooring({ room, type });
    await newFlooring.save();
    res.json(newFlooring);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
