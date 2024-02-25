const router = require('express').Router();
const frontpageController = require('../controllers/frontpage');

//Sending route to profiles.js
router.use('/profiles', require('./profiles'));

//Routing HTML pages to display. (May move to own route page later)
router.get('/', frontpageController.createFrontPage);
router.get('/login', frontpageController.createLoginPage);
router.get('/create', frontpageController.createAccountPage);

//Sending route to swagger.js
router.use('/', require('./swagger'));

//Sending route to formSubmit.js
// *** Will add when form submit is complete ***
// router.use('/', require('./formSubmit'));

module.exports = router;
