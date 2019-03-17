const app = require('express')();
const bodyParser = require('body-parser');

const serviceDb = require('./services/serviceDb');

const PORT = 3000;

serviceDb.fpInit();

app.use(bodyParser.json());

// City.sync({}).then(() => {
//   return City.create({
//     city_name: 'Hagerstown'
//   })
// });

app.get('/', (req, res) => {
  console.log('request received');
  res.send('ello mate');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
