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
      await serviceThis.City.sync({ force: true });
      await serviceThis.Property.sync({ force: true });
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

/**
 * Queries all properties with either the specific address or street
 * @param { Object } params
 */
serviceThis.getProperties = params => {
  const { property_street, property_number } = params;

  if (property_street !== undefined && property_number !== undefined)
    return serviceThis.Property.findAll({ raw: true, where: { property_street, property_number } });
  return serviceThis.Property.findAll({ raw: true, where: { property_street } });
};

/**
 * Queries by the property id
 * @param { Number } id
 */
serviceThis.getPropertyById = id => serviceThis.Property.findOne({ raw: true, where: { id: id } });

/**
 * Finds or creates a property based on street and number
 * @param { Object } property
 */
serviceThis.addProperty = property => {
  const { property_street, property_number } = property;

  return serviceThis.Property.findOrCreate({
    where: {
      property_street,
      property_number,
    },
    defaults: property,
  });
};

module.exports = serviceThis;
