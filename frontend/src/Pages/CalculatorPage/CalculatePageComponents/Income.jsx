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
class Income extends Component {
  render() {
    const { PropertyStore } = this.props;
    const { other_monthly_income, monthly_gross_rent, setState } = PropertyStore;

    return (
      <Container>
        <h4>Monthly Income</h4>
        <CustomTextField
          adornmentType="$"
          value={monthly_gross_rent}
          label="Monthly Rent"
          onChange={e => setState('monthly_gross_rent', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={other_monthly_income}
          label="Other Income"
          onChange={e => setState('other_monthly_income', e.target.value)}
        />
      </Container>
    );
  }
}

export default Income;
