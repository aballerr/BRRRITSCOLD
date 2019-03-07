import { observable, action } from 'mobx';

class PropertyStore {
  id = Math.random();

  // Property Info
  @observable propertyStreet = '';
  @observable propertyNumber = '';
  @observable propertyCity = '';
  @observable propertyState = '';
  @observable propertyZip = '';
  @observable mlsNumber = '';
  @observable description = '';

  @observable bedrooms = 0;
  @observable bathrooms = 0;
  @observable totalSquareFeet = 1000;
  @observable lotSizeSquareFeet = 2000;
  @observable yearBuilt = 1900;
  @observable units = 2;
  @observable heatingType = '';
  @observable coolingType = '';
  @observable wiringCondition = '';
  @observable plumbingCondition = '';
  @observable parkingType = '';

  // Property Numbers
  @observable purchasePrice = 100000;
  @observable afterRepairValue = 120000;
  @observable downPayment = 20;
  @observable interestRate = 4.5;
  @observable loanTerm = 30;
  @observable closingCosts = 3000;
  @observable repairCosts = 1000;
  @observable propertyTax = 1500;
  @observable totalInsurance = 800;
  @observable hoaFee = 0;
  @observable maitenance = 0;

  // Rental Numbers
  @observable monthlyGrossRent = 1000;
  @observable otherMontlyIncome = 0;
  @observable electricity = 0;
  @observable water = 0;
  @observable garbage = 0;
  @observable lawn = 0;
  @observable hoa = 0;
  @observable pmi = 0;
  @observable vacancy = 5;
  @observable propertyManagementFee = 10;
  @observable propertyManagementPlacementFee = 0;
  @observable capEX = 0;
  @observable maitenanceRule = '';
  @observable customMaitenanceValue = 0;

  @action setState = (key, value) => {
    this[key] = value;
  };

  monthlyExpenses = () =>
    parseInt(this['electricity']) +
    parseInt(this['water']) +
    parseInt(this['garbage']) +
    parseInt(this['lawn']) +
    parseInt(this['hoa']) +
    parseInt(this['capEX']) +
    parseInt(this['customMaitenanceValue']) +
    this.monthlyMortgagePayments();
  // (this['propertyManagementFee'] / 100) * this['monthlyGrossRent'];

  annualExpenses = () =>
    this['propertyTax'] + this['totalInsurance'] + (this['vacancy'] / 100) * this['monthlyGrossRent'] * 12 + this.monthlyExpenses() * 12;

  calculateReturns = () => {
    const annualIncome = this['monthlyGrossRent'] * 12 + this['otherMontlyIncome'] * 12;
    const annualExpenses = this.annualExpenses();
    const annualCashFlow = annualIncome - annualExpenses;

    return {
      annualCashFlow: annualCashFlow.toFixed(2),
      monthlyCashFlow: (annualCashFlow / 12).toFixed(2),
    };
  };

  // https://www.mtgprofessor.com/formulas.htm
  monthlyMortgagePayments = () => {
    let principal = this['purchasePrice'] - this['purchasePrice'] * (this['downPayment'] / 100);
    let r = this['interestRate'] / 100 / 12;
    let numPayments = this['loanTerm'] * 12;
    let numer = r * Math.pow(1 + r, numPayments);
    let denom = Math.pow(1 + r, numPayments) - 1;

    return principal * (numer / denom);
  };
}

export default PropertyStore;
