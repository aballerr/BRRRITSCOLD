import React, { Component } from 'react';
import CustomTextField from './CustomTextField';
import { Provider } from 'mobx-react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import Todo from '../../todo';
import Test from './test';
import TestDos from './test2';
import { inject, observer } from 'mobx-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;
// @inject('Todo')
// @observer
class CalculatorPage extends Component {
  constructor() {
    super();
    this.state = {
      propertyValue: '100,000',
      purchasePrice: '80,000',
      downPayment: 25,
      hasDownPayment: true,
      interestRate: 5.0,
      loanTerm: 30,
      closingCosts: 3000,
    };

    this.todo = new Todo();
  }

  renderLoanInputs = () => {
    return (
      <>
        <CustomTextField
          adornmentType="%"
          label="Down Payment"
          value={this.state.downPayment}
          onChange={this.handleChange('downPayment')}
        />
        <CustomTextField
          adornmentType="%"
          label="Interest Rate"
          value={this.state.interestRate}
          onChange={this.handleChange('interestRate')}
        />
        <CustomTextField label="Loan Term" value={this.state.loanTerm} onChange={this.handleChange('loanTerm')} />
      </>
    );
  };

  handleChange = key => event => {
    if (key === 'hasDownPayment') this.setState(prevState => ({ hasDownPayment: !prevState.hasDownPayment }));
    else this.setState({ [key]: event.target.value });
  };

  render() {
    const { hasDownPayment } = this.state;

    return (
      <Container>
        <Provider Todo={this.todo}>
          <>
            <Test />
            <TestDos />
          </>
        </Provider>
        {/* <TextField label="Property Value" value={this.state.propertyValue} onChange={this.handleChange('propertyValue')} /> */}
        {/* <TextField label="Purchase Price" value={this.state.purchasePrice} onChange={this.handleChange('purchasePrice')} /> */}
        {/* <CustomTextField
          adornmentType="$"
          label="Property Value"
          value={this.state.propertyValue}
          onChange={this.handleChange('propertyValue')}
        />
        <CustomTextField
          adornmentType="$"
          label="Purchase Price"
          value={this.state.purchasePrice}
          onChange={this.handleChange('purchasePrice')}
        />
        <FormControlLabel
          control={<Switch checked={this.state.hasDownPayment} onChange={this.handleChange('hasDownPayment')} value="hasDownPayment" />}
          label="Using a loan?"
        />
        {hasDownPayment ? this.renderLoanInputs() : null}
        <CustomTextField
          adornmentType="$"
          label="Closing Costs"
          value={this.state.closingCosts}
          onChange={this.handleChange('closingCosts')}
        /> */}
      </Container>
    );
  }
}

export default CalculatorPage;
