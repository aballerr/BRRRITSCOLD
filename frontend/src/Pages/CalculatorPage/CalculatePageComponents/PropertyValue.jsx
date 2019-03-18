import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CustomTextField from './CustomTextField';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// @observable purchase_price = 100000;
// @observable after_repair_value = 120000;
// @observable down_payment = 20;
// @observable interest_rate = 4.5;
// @observable loan_term = 30;
// @observable closing_costs = 3000;
// @observable repair_costs = 1000;
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
      purchase_price,
      after_repair_value,
      down_payment,
      interest_rate,
      loan_term,
      closing_costs,
      repair_costs,
      setState,
    } = PropertyStore;

    return (
      <Container>
        <h4>Purchase</h4>
        <CustomTextField
          value={purchase_price}
          label="Purchase Price"
          adornmentType="$"
          onChange={e => setState('purchase_price', e.target.value)}
        />
        <CustomTextField
          value={after_repair_value}
          label="After Repair Value"
          adornmentType="$"
          onChange={e => setState('after_repair_value', e.target.value)}
        />
        <CustomTextField
          value={down_payment}
          label="Down Payment"
          adornmentType="%"
          onChange={e => setState('down_payment', e.target.value)}
        />
        <CustomTextField
          value={interest_rate}
          label="Interest Rate"
          adornmentType="%"
          onChange={e => setState('interest_rate', e.target.value)}
        />

        <CustomTextField value={loan_term} label="Loan Term" onChange={e => setState('loan_term', e.target.value)} />
        <CustomTextField
          adornmentType="$"
          value={closing_costs}
          label="Closing Costs"
          onChange={e => setState('closing_costs', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={repair_costs}
          label="Repair Costs"
          onChange={e => setState('repair_costs', e.target.value)}
        />
      </Container>
    );
  }
}

export default PropertyValue;
