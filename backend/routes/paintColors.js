const express = require('express');
const router = express.Router();
const PaintColor = require('../models/PaintColor');

// Get all paint colors
router.get('/', async (req, res) => {
  try {
    const paintColors = await PaintColor.find();
    res.json(paintColors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new paint color
router.post('/', async (req, res) => {
  const { room, color } = req.body;

  try {
    const newPaintColor = new PaintColor({ room, color });
    await newPaintColor.save();
    res.json(newPaintColor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
