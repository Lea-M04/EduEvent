const fs = require('fs');
const path = require('path');
const matchPreferences = require('../utils/matchPreferences');

const eventsPath = path.join(__dirname, '../data/events.json');

function readEvents() {
  return JSON.parse(fs.readFileSync(eventsPath, 'utf8'));
}

function writeEvents(events) {
  fs.writeFileSync(eventsPath, JSON.stringify(events, null, 2), 'utf8');
}

exports.getAllEvents = (req, res) => {
  const events = readEvents();
  res.json(events);
};

exports.filterEvents = (req, res) => {
  const { field, interests } = req.body;
  const events = readEvents();
  const filtered = matchPreferences(events, field, interests);
  res.json(filtered);
};

exports.addEvent = (req, res) => {
  try {
    const newEvent = req.body;
    const events = readEvents();

    newEvent.id = events.length ? events[events.length - 1].id + 1 : 1;
    newEvent.tags = Array.isArray(newEvent.tags)
      ? newEvent.tags
      : typeof newEvent.tags === 'string'
        ? newEvent.tags.split(',').map(tag => tag.trim())
        : [];

    events.push(newEvent);
    writeEvents(events);

    res.json({ message: 'Eventi u shtua me sukses!' });
  } catch (err) {
    console.error('Gabim gjatë shtimit të eventit:', err);
    res.status(500).json({ message: 'Gabim gjatë shtimit të eventit' });
  }
};
