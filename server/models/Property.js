'use strict';

module.exports = (sequelize, DataTypes) => {
  let Property = sequelize.define(
    'Property',
    {
      monthly_gross_rent: DataTypes.INTEGER,
      other_monthly_income: DataTypes.INGER,
      elecriticty: DataTypes.INTEGER,

      // property infomration
      property_type: DataTypes.STRING,
      property_street: DataTypes.STRING,
      property_number: DataTypes.STRING,
      property_state: DataTypes.STRING,
      property_zip: DataTypes.STRING,
      mls_number: DataTypes.STRING,
      description: DataTypes.STRING,

      // property number info
      bedrooms: DataTypes.INTEGER,
      bathrooms: DataTypes.INTEGER,
      total_square_feet: DataTypes.INTEGER,
      lot_size_square_feet: DataTypes.INTEGER,
      year_built: DataTypes.INTEGER,
      units: DataTypes.INTEGER,
      heating_type: DataTypes.STRING,
      cooling_type: DataTypes.STRING,
      wiring_condition: DataTypes.STRING,
      plumbing_condition: DataTypes.STRING,
      parking_type: DataTypes.STRING,

      // property numbers
      purchase_price: DataTypes.INTEGER,
      after_repair_value: DataTypes.INTEGER,
      down_payment: DataTypes.INTEGER,
      interest_rate: DataTypes.INTEGER,
      loan_term: DataTypes.INTEGER,
      closing_costs: DataTypes.INTEGER,
      repair_costs: DataTypes.INTEGER,
      property_tax: DataTypes.INTEGER,
      total_insurance: DataTypes.INTEGER,
      hoa_fee: DataTypes.INTEGER,
      maintenace: DataTypes.INTEGER,
      //rental numbers
      monthly_gross_rent: DataTypes.INTEGER,
      other_monthly_income: DataTypes.INTEGER,
      electricity: DataTypes.INTEGER,
      water: DataTypes.INTEGER,
      garbage: DataTypes.INTEGER,
      lawn: DataTypes.INTEGER,
      hoa: DataTypes.INTEGER,
      pmi: DataTypes.INTEGER,
      vacancy: DataTypes.INTEGER,
      property_management_fee: DataTypes.INTEGER,
      property_management_placement_fee: DataTypes.INTEGER,
      cap_ex: DataTypes.INTEGER,
      maintenance_rule: DataTypes.STRING,
      custom_maintenance_rule: DataTypes.INTEGER,
    },
    {
      underscored: true,
    }
  );

  // ExcerptSource.hasMany(models.WorkerTask, {
  //   foreignKey: 'excerpt_source_id',
  // });

  Property.associate = City => {
    Property.belongsTo(City, {
      foreignKey: {
        name: 'property_city',
        allowNull: false,
      },

      targetKey: 'city_name',
    });
  };

  return Property;
};
