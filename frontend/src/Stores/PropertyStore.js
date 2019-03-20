import { observable, action, toJS } from 'mobx';

class PropertyStore {
  // Property Information
  id = 0;
  @observable property_type = '';
  @observable property_street = '';
  @observable property_number = '';
  @observable property_city = '';
  @observable property_state = '';
  @observable property_zip = '';
  @observable mls_number = '';
  @observable description = '';

  @observable bedrooms = 0;
  @observable bathrooms = 0;
  @observable total_square_feet = 1000;
  @observable lot_size_square_feet = 2000;
  @observable year_built = 1900;
  @observable units = 2;
  @observable heating_type = '';
  @observable cooling_type = '';
  @observable wiring_condition = '';
  @observable plumbing_condition = '';
  @observable parking_type = '';

  // Property Numbers
  @observable purchase_price = 100000;
  @observable after_repair_value = 120000;
  @observable down_payment = 20;
  @observable interest_rate = 4.5;
  @observable loan_term = 30;
  @observable closing_costs = 3000;
  @observable repair_costs = 1000;
  @observable property_tax = 1500;
  @observable total_insurance = 800;
  @observable hoa_fee = 0;
  @observable maitenance = 0;

  // Rental Numbers
  @observable monthly_gross_rent = 1000;
  @observable other_monthly_income = 0;
  @observable electricity = 0;
  @observable water = 0;
  @observable garbage = 0;
  @observable lawn = 0;
  @observable hoa = 0;
  @observable pmi = 0;
  @observable vacancy = 5;
  @observable property_management_fee = 10;
  @observable property_management_placement_fee = 0;
  @observable cap_ex = 0;
  @observable maintenance_rule = '';
  @observable custom_maintenance_rule = 0;

  @action setState = (key, value) => {
    this[key] = value;
  };

  monthlyExpenses = () =>
    parseInt(this['electricity']) +
    parseInt(this['water']) +
    parseInt(this['garbage']) +
    parseInt(this['lawn']) +
    parseInt(this['hoa']) +
    parseInt(this['cap_ex']) +
    parseInt(this['custom_maintenance_rule']) +
    this.monthlyMortgagePayments();
  // (this['property_management_fee'] / 100) * this['monthly_gross_rent'];

  annualExpenses = () =>
    this['property_tax'] +
    this['total_insurance'] +
    (this['vacancy'] / 100) * this['monthly_gross_rent'] * 12 +
    this.monthlyExpenses() * 12;

  calculateReturns = () => {
    const annualIncome = this['monthly_gross_rent'] * 12 + this['other_monthly_income'] * 12;
    const annualExpenses = this.annualExpenses();
    const annualCashFlow = annualIncome - annualExpenses;

    return {
      annualCashFlow: annualCashFlow.toFixed(2),
      monthlyCashFlow: (annualCashFlow / 12).toFixed(2),
    };
  };

  // https://www.mtgprofessor.com/formulas.htm
  monthlyMortgagePayments = () => {
    let principal = this['purchase_price'] - this['purchase_price'] * (this['down_payment'] / 100);
    let r = this['interest_rate'] / 100 / 12;
    let numPayments = this['loan_term'] * 12;
    let numer = r * Math.pow(1 + r, numPayments);
    let denom = Math.pow(1 + r, numPayments) - 1;

    if (denom === 0) return 0;

    return principal * (numer / denom);
  };

  initialize = property => {
    let keys = Object.keys(property);
    for (let key of keys) {
      let value = property[key] === null ? this[key] : property[key];
      this[key] = value;
    }
    console.log(this.getProperty());
  };

  getProperty = () => {
    let property = toJS(this);
    delete property.annualExpenses;
    delete property.monthlyExpenses;
    delete property.monthlyMortgagePayments;
    delete property.calculateReturns;
    delete property.getProperty;
    return property;
  };
}

export default PropertyStore;
