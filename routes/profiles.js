const express = require('express');
const router = express.Router();
const profilesController = require('../controllers/profiles');

router.get('/', profilesController.getAll);
router.post('/', profilesController.create);
router.put('/update/:id', profilesController.updateContact);
router.delete('/delete/:email', profilesController.deleteUser);
module.exports = router;