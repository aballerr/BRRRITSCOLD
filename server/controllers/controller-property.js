const router = require('express').Router();
const serviceDb = require('../services/service-db');

router.post('', async (req, res) => {
  console.log(req.body);
  let property = await serviceDb.addProperty(req.body);

  res.send(property);
});

router.put('', async (req, res) => {
  let update = await serviceDb.updateProperty(req.body);
  res.send('success');
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
