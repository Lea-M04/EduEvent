const express = require('express');
const router = express.Router();
const { getAllUsers, getUsersByField } = require('../controllers/usersControllers');

router.get('/', getAllUsers);
router.get('/:field', getUsersByField); // p.sh. /users/Computer%20Science

module.exports = router;
