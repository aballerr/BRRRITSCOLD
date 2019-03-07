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
    const { vacancy, totalInsurance, propertyTax, setState, propertyManagementFee, propertyManagementPlacementFee } = PropertyStore;

    return (
      <Container>
        <h4>Annual Expenses</h4>
        <CustomTextField
          adornmentType="$"
          value={propertyTax}
          label="Property Tax"
          onChange={e => setState('propertyTax', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={totalInsurance}
          label="Total Insurance"
          onChange={e => setState('totalInsurance', e.target.value)}
        />

        <CustomTextField adornmentType="%" value={vacancy} label="Vacancy" onChange={e => setState('vacancy', e.target.value)} />
        <CustomTextField
          adornmentType="%"
          value={propertyManagementFee}
          label="Management Fee"
          onChange={e => setState('propertyManagementFee', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={propertyManagementPlacementFee}
          label="Placement Fee"
          onChange={e => setState('propertyManagementPlacementFee', e.target.value)}
        />
      </Container>
    );
  }
}

export default AnnualExpenses;
