const fs = require('fs');
const path = require('path');
const matchPreferences = require('../utils/matchPreferences');

const eventsPath = path.join(__dirname, '../data/events.json');

function readEvents() {
  return JSON.parse(fs.readFileSync(eventsPath));
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
