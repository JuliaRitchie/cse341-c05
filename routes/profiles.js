const express = require('express');
const router = express.Router();
const profilesController = require('../controllers/profiles');

router.get('/', profilesController.getAll);

router.get('/update/:id', profilesController.updateContact);

module.exports = router;