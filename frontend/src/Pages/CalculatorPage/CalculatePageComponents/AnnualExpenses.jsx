import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CustomTextField from './CustomTextField';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

@inject('PropertyStore')
@observer
class AnnualExpenses extends Component {
  render() {
    const { PropertyStore } = this.props;
    const { vacancy, total_insurance, property_tax, setState, property_management_fee, property_management_placement_fee } = PropertyStore;

    return (
      <Container>
        <h4>Annual Expenses</h4>
        <CustomTextField
          adornmentType="$"
          value={property_tax}
          label="Property Tax"
          onChange={e => setState('property_tax', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={total_insurance}
          label="Total Insurance"
          onChange={e => setState('total_insurance', e.target.value)}
        />

        <CustomTextField adornmentType="%" value={vacancy} label="Vacancy" onChange={e => setState('vacancy', e.target.value)} />
        <CustomTextField
          adornmentType="%"
          value={property_management_fee}
          label="Management Fee"
          onChange={e => setState('property_management_fee', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={property_management_placement_fee}
          label="Placement Fee"
          onChange={e => setState('property_management_placement_fee', e.target.value)}
        />
      </Container>
    );
  }
}

export default AnnualExpenses;
