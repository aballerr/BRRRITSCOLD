const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const controllers = require('./controllers/index');
const serviceDb = require('./services/service-db');

const PORT = 3000;

async function main() {
  await serviceDb.fpInit();
  await serviceDb.addCity({ city_name: 'Hagerstown' });
  await serviceDb.addProperty({
    property_street: 'north',
    property_number: '123',
    property_city: 'Hagerstown',
  });
}

main();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', controllers);

app.get('/', (req, res) => {
  console.log('request received');
  res.send('ello mate');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
