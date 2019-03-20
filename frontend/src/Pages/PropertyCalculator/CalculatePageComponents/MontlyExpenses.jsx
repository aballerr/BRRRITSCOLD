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
    const { hoa, electricity, water, garbage, lawn, cap_ex, custom_maintenance_rule, setState } = PropertyStore;

    return (
      <Container>
        <h4>Monthly Expenses</h4>
        <CustomTextField
          adornmentType="$"
          value={cap_ex}
          label="Capital Expenditure Savings"
          onChange={e => setState('cap_ex', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={custom_maintenance_rule}
          label="Monthly Maintenance"
          onChange={e => setState('custom_maintenance_rule', e.target.value)}
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
