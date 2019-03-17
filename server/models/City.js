'use strict';

module.exports = (sequelize, DataTypes) => {
  let City = sequelize.define(
    'City',
    {
      city_name: {type: DataTypes.STRING, unique: true, required: true},
      population: DataTypes.INTEGER,
      mean_income: DataTypes.INTEGER,
      median_income: DataTypes.INTEGER,
    },
    {
      underscored: true,
    }
  );

  return City;
};