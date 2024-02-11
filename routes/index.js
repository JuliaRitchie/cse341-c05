const router = require('express').Router();
const frontpageController = require('../controllers/frontpage');

router.get('/', (req, res) =>{
    res.send(frontpageController.createFrontPage());
});


module.exports = router;