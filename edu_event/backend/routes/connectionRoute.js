const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post('/', (req, res) => {
  const { fromUserId, toUserId } = req.body;
  const filePath = path.join(__dirname, '../data/connections.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read connections' });

    let connections = JSON.parse(data || '[]');
    const exists = connections.some(
      c =>
        (c.fromUserId === fromUserId && c.toUserId === toUserId) ||
        (c.fromUserId === toUserId && c.toUserId === fromUserId)
    );
    if (exists) return res.status(400).json({ message: 'Already connected' });

    connections.push({ fromUserId, toUserId });

    fs.writeFile(filePath, JSON.stringify(connections, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to write connection' });
      res.status(201).json({ message: 'Connection created' });
    });
  });
});

module.exports = router;
