const router = require('express').Router();
const serviceDb = require('../services/service-db');

router.get('', async (req, res) => {
  let cities = await serviceDb.getCities();
  res.send(cities);
});

module.exports = router;
