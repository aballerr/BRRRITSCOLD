const router = require('express').Router();
const controllerProperty = require('./controller-property');
const controllerCity = require('./controller-city');

router.use('/property', controllerProperty);
router.use('/city', controllerCity);

module.exports = router;
