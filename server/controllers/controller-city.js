const router = require('express').Router();
const serviceDb = require('../services/service-db');

router.get('', async (req, res) => {
  let cities = await serviceDb.getCities();
  res.send(cities);
});

router.post('', async (req, res) => {
  let city = await serviceDb.addCity(req.body);

  res.send(city);
});

router.put('', async (req, res) => {});

module.exports = router;
