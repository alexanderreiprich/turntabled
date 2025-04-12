const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET-Endpunkt zum Abrufen aller Alben
router.get('/', async (req, res) => {
  try {
    const [albums] = await pool.query('SELECT * FROM albums LIMIT 100');
    res.json(albums);
  } catch (error) {
    console.error('Error fetching albums:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;