const router = require('express').Router();
const frontpageController = require('../controllers/frontpage');

router.use('/profiles', require('./profiles'));

//Routing HTML pages to display
router.get('/', frontpageController.createFrontPage);
router.get('/login', frontpageController.createLoginPage);
router.get('/create', frontpageController.createAccountPage);

router.use('/', require('./swagger'));

module.exports = router;
