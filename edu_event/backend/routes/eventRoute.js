const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const path = require('path');
const fs = require('fs');


router.get('/', eventController.getAllEvents);
router.post('/', eventController.addEvent);
router.post('/filter', eventController.filterEvents);


router.post('/apply', (req, res) => {
  const { userId, eventId } = req.body;
  const filePath = path.join(__dirname, '../data/applied.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read applied.json' });

    let applied = JSON.parse(data);
    const alreadyApplied = applied.some(a => a.userId === userId && a.eventId === eventId);
    if (alreadyApplied) return res.status(400).json({ message: 'Already applied' });

    applied.push({ userId, eventId });

    fs.writeFile(filePath, JSON.stringify(applied, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to write applied.json' });
      res.status(201).json({ message: 'Application successful' });
    });
  });
});


router.post('/connect', (req, res) => {
  const { fromUserId, toUserId } = req.body;
  const filePath = path.join(__dirname, '../data/connections.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read connections.json' });

    let connections = JSON.parse(data);
    const exists = connections.some(c =>
      (c.fromUserId === fromUserId && c.toUserId === toUserId) ||
      (c.fromUserId === toUserId && c.toUserId === fromUserId)
    );
    if (exists) return res.status(400).json({ message: 'Already connected' });

    connections.push({ fromUserId, toUserId });

    fs.writeFile(filePath, JSON.stringify(connections, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to write connections.json' });
      res.status(201).json({ message: 'Connection successful' });
    });
  });
});

module.exports = router;
