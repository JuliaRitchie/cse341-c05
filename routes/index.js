const router = require('express').Router();
const frontpageController = require('../controllers/frontpage');

router.use('/profiles', require('./profiles'));
router.get('/', (req, res) =>{
    res.send(frontpageController.createFrontPage());
});



router.use('/', require('./swagger'));

module.exports = router;