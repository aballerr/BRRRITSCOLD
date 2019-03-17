const router = require('express').Router();
const controllerProperty = require('./controller-property');

router.use('/property', controllerProperty);

module.exports = router;
