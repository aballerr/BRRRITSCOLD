const router = require('express').Router();

router.get('', (req, res) => {
  res.send('you hit the property endpoint!');
});

module.exports = router;
