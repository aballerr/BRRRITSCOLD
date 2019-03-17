const config = require('../config/config').development;
const serviceThis = {}
const Sequelize = require('sequelize');



serviceThis.fpInit = async () =>  {
  const sequelize =  new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  })
  

  sequelize.authenticate().then(async () => {
    serviceThis.City = require('../models/City')(sequelize, Sequelize);
    await serviceThis.City.sync();
    console.log('Connection has been established, syncing tables...');

  })
  .catch(err => {
    console.log('error, did not connect');
  });
};


serviceThis.addCity = city => {
  return serviceThis.City.findOrCreate({
    where: {
      city_name: city.city_name
    },
    defaults: city
  })
};


module.exports =  serviceThis;



