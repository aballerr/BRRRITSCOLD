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

  /**
   * params get set to string through set state, this deals with all issues
   * from having no param or the param being set as a string.. etc
   * @param { Key }
   */
  getNumber = key => {
    let val = this[key];

    if (typeof val === 'string') {
      if (val.length === 0) {
        this.setState(key, 0);
        return 0;
      } else return parseFloat(val);
    }
    return val;
  };

  toPercent = number => this.getNumber(number) / 100;

  monthlyManagementFee = () =>
    this.getNumber('monthly_gross_rent') * (1 - this.toPercent('vacancy')) * this.toPercent('property_management_fee');

  monthlyExpenses = () =>
    this.getNumber('electricity') +
    this.getNumber('water') +
    this.getNumber('garbage') +
    this.getNumber('lawn') +
    this.getNumber('hoa') +
    this.getNumber('cap_ex') +
    this.getNumber('custom_maintenance_rule') +
    this.monthlyManagementFee() +
    this.monthlyMortgagePayments();

  annualExpenses = () =>
    this.getNumber('property_tax') +
    this.getNumber('total_insurance') +
    this.getNumber('property_management_placement_fee') +
    this.toPercent('vacancy') * this.getNumber('monthly_gross_rent') * 12 +
    this.monthlyExpenses() * 12;

  calculateReturns = () => {
    const annualIncome = this.getNumber('monthly_gross_rent') * 12 + this.getNumber('other_monthly_income') * 12;
    const annualExpenses = this.annualExpenses();
    const annualCashFlow = annualIncome - annualExpenses;

    return {
      annualCashFlow: annualCashFlow.toFixed(2),
      monthlyCashFlow: (annualCashFlow / 12).toFixed(2),
    };
  };

  // https://www.mtgprofessor.com/formulas.htm
  monthlyMortgagePayments = () => {
    let principal = this.getNumber('purchase_price') - this.getNumber('purchase_price') * this.toPercent('down_payment');
    let r = this.toPercent('interest_rate') / 12;
    let numPayments = this.getNumber('loan_term') * 12;
    let numer = r * Math.pow(1 + r, numPayments);
    let denom = Math.pow(1 + r, numPayments) - 1;

    return denom === 0 ? 0 : principal * (numer / denom);
  };

  @action initialize = property => {
    let keys = Object.keys(property);

    for (let key of keys) {
      let value = property[key] === null ? this[key] : property[key];
      this[key] = value;
    }
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
