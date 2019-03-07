import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CustomTextField from './CustomTextField';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// @observable purchasePrice = 100000;
// @observable afterRepairValue = 120000;
// @observable downPayment = 20;
// @observable interestRate = 4.5;
// @observable loanTerm = 30;
// @observable closingCosts = 3000;
// @observable repairCosts = 1000;
// @observable propertyTax = 1500;
// @observable totalInsurace = 800;
// @observable hoaFee = 0;
// @observable maitenance = 0;

@inject('PropertyStore')
@observer
class PropertyValue extends Component {
  render() {
    const { PropertyStore } = this.props;
    const {
      purchasePrice,
      afterRepairValue,
      downPayment,
      interestRate,
      loanTerm,
      closingCosts,
      repairCosts,
      totalInsurance,
      setState,
    } = PropertyStore;
    console.log(totalInsurance);

    return (
      <Container>
        <h4>Purchase</h4>
        <CustomTextField
          value={purchasePrice}
          label="Purchase Price"
          adornmentType="$"
          onChange={e => setState('purchasePrice', e.target.value)}
        />
        <CustomTextField
          value={afterRepairValue}
          label="After Repair Value"
          adornmentType="$"
          onChange={e => setState('afterRepairValue', e.target.value)}
        />
        <CustomTextField
          value={downPayment}
          label="Down Payment"
          adornmentType="%"
          onChange={e => setState('downPayment', e.target.value)}
        />
        <CustomTextField
          value={interestRate}
          label="Interest Rate"
          adornmentType="%"
          onChange={e => setState('interestRate', e.target.value)}
        />
        {/* closingCosts,
      repairCosts,
      propertyTax,
      totalInsurance,
      hoaFee, */}

        <CustomTextField value={loanTerm} label="Loan Term" onChange={e => setState('loanTerm', e.target.value)} />
        <CustomTextField
          adornmentType="$"
          value={closingCosts}
          label="Closing Costs"
          onChange={e => setState('closingCosts', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={repairCosts}
          label="Repair Costs"
          onChange={e => setState('repairCosts', e.target.value)}
        />
      </Container>
    );
  }
}

export default PropertyValue;
