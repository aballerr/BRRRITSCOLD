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
class MontlyExpenses extends Component {
  render() {
    const { PropertyStore } = this.props;
    const { hoa, electricity, water, garbage, lawn, capEX, customMaitenanceValue, setState } = PropertyStore;

    return (
      <Container>
        <h4>Monthly Expenses</h4>
        <CustomTextField
          adornmentType="$"
          value={capEX}
          label="Capital Expenditure Savings"
          onChange={e => setState('capEX', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={customMaitenanceValue}
          label="Monthly Maintenance"
          onChange={e => setState('customMaitenanceValue', e.target.value)}
        />
        <CustomTextField adornmentType="$" value={hoa} label="HOA Fee" onChange={e => setState('hoa', e.target.value)} />
        <CustomTextField adornmentType="$" value={electricity} label="Electric" onChange={e => setState('electricity', e.target.value)} />
        <CustomTextField adornmentType="$" value={water} label="Water" onChange={e => setState('water', e.target.value)} />
        <CustomTextField adornmentType="$" value={garbage} label="Garbage" onChange={e => setState('garbage', e.target.value)} />
        <CustomTextField adornmentType="$" value={lawn} label="Lawn" onChange={e => setState('lawn', e.target.value)} />
      </Container>
    );
  }
}

export default MontlyExpenses;
