const router = require('express').Router();
const serviceDb = require('../services/service-db');

router.post('', async (req, res) => {
  await serviceDb.addProperty(req.body);
  res.send('done');
});

router.get('', async (req, res) => {
  let properties = await serviceDb.getProperties(req.query);
  res.send(properties);
});

router.get('/:id', async (req, res) => {
  let property = await serviceDb.getPropertyById(req.params.id);
  res.send(property);
});

module.exports = router;
