const config = require('../config/config').development;
const models = require('../models/index');
const serviceThis = {};
const Sequelize = require('sequelize');

serviceThis.fpInit = async () => {
  const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
  });

  return sequelize
    .authenticate()
    .then(async () => {
      serviceThis.City = models.City(sequelize, Sequelize);
      serviceThis.Property = models.Property(sequelize, Sequelize);
      serviceThis.Property.associate(serviceThis.City);
      await serviceThis.City.sync();
      await serviceThis.Property.sync();
      return Promise.resolve('Succesfully initialize');
    })
    .catch(err => {
      console.log('error, did not connect');
      console.log(err);
    });
};

serviceThis.addCity = city => {
  return serviceThis.City.findOrCreate({
    where: {
      city_name: city.city_name,
    },
    defaults: city,
  });
};

serviceThis.addProperty = property => {
  return serviceThis.Property.findOrCreate({
    where: {
      property_street: property.property_street,
      property_number: property.property_number,
    },
    defaults: property,
  });
};

module.exports = serviceThis;
