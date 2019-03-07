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
    const { otherMontlyIncome, monthlyGrossRent, setState } = PropertyStore;

    return (
      <Container>
        <h4>Monthly Income</h4>
        <CustomTextField
          adornmentType="$"
          value={monthlyGrossRent}
          label="Monthly Rent"
          onChange={e => setState('monthlyGrossRent', e.target.value)}
        />
        <CustomTextField
          adornmentType="$"
          value={otherMontlyIncome}
          label="Other Income"
          onChange={e => setState('otherMontlyIncome', e.target.value)}
        />
      </Container>
    );
  }
}

export default Income;
