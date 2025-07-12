const express = require('express');
const router = express.Router();
const { getAllEvents, filterEvents } = require('../controllers/eventController');

router.get('/', getAllEvents);
router.post('/filter', filterEvents);

module.exports = router;
