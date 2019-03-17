const app = require('express')();
const bodyParser = require('body-parser');
const controllers = require('./controllers/index');
const serviceDb = require('./services/service-db');

const PORT = 3000;

async function main() {
  // await serviceDb.fpInit();
  // await serviceDb.addCity({ city_name: 'Hagerstown' });
  // await serviceDb.addProperty({
  //   property_street: 'Northh Mulbadsferry Stadsfreet',
  //   property_number: '12aasdfsdf34',
  //   city_name: 'Hagerstown',
  // });
}

main();

app.use(bodyParser.json());
app.use('/api', controllers);

app.get('/', (req, res) => {
  console.log('request received');
  res.send('ello mate');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
