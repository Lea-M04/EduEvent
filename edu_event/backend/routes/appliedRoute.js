const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const appliedFilePath = path.join(__dirname, '../data/applied.json');


router.get('/', (req, res) => {
  fs.readFile(appliedFilePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read applied.json' });
    res.json(JSON.parse(data || '[]'));
  });
});


router.post('/', (req, res) => {
  const { userId, eventId } = req.body;

  fs.readFile(appliedFilePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read applied.json' });

    let applied = JSON.parse(data || '[]');
    const exists = applied.some(a => a.userId === userId && a.eventId === eventId);
    if (exists) return res.status(400).json({ message: 'Already applied' });

    applied.push({ userId, eventId });

    fs.writeFile(appliedFilePath, JSON.stringify(applied, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to write' });
      res.status(201).json({ message: 'Application saved' });
    });
  });
});

module.exports = router;
