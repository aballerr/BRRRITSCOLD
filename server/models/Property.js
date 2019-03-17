// // Property Info

//  bedrooms : DataTypes.INTEGER,,
//  bathrooms : DataTypes.INTEGER,,
//  totalSquareFeet : 1DataTypes.INTEGER,DataTypes.INTEGER,DataTypes.INTEGER,,
//  lotSizeSquareFeet : 2DataTypes.INTEGER,DataTypes.INTEGER,DataTypes.INTEGER,,
//  yearBuilt : 19DataTypes.INTEGER,DataTypes.INTEGER,,
//  units : 2,
//  heatingType : DataTypes.STRING,
//  coolingType : DataTypes.STRING,
//  wiringCondition : DataTypes.STRING,
//  plumbingCondition : DataTypes.STRING,
//  parkingType : DataTypes.STRING,

// // Rental Numbers
//  monthlyGrossRent : 1DataTypes.INTEGER,DataTypes.INTEGER,DataTypes.INTEGER,,
//  otherMontlyIncome : DataTypes.INTEGER,,
//  electriProperty : DataTypes.INTEGER,,
//  water : DataTypes.INTEGER,,
//  garbage : DataTypes.INTEGER,,
//  lawn : DataTypes.INTEGER,,
//  hoa : DataTypes.INTEGER,,
//  pmi : DataTypes.INTEGER,,
//  vacancy : 5,
//  propertyManagementFee : 1DataTypes.INTEGER,,
//  propertyManagementPlacementFee : DataTypes.INTEGER,,
//  capEX : DataTypes.INTEGER,,
//  maitenanceRule : DataTypes.STRING,
//  customMaitenanceValue : DataTypes.INTEGER,,

'use strict',
  (module.exports = (sequelize, DataTypes) => {
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
        bedrooms: DataTypes.Integer,
        bathrooms: DataTypes.Integer,
        total_square_feet: DataTypes.Integer,
        lot_size_square_feet: DataTypes.Integer,
        year_built: DataTypes.Integer,
        units: 2,
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
        maitenance: DataTypes.INGER,
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

    return Property;
  });
