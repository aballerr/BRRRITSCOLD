import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import CustomTextField from './CalculatePageComponents/CustomTextField';
import PropertyStore from '../../Stores/PropertyStore';
import PropertyValue from './CalculatePageComponents/PropertyValue';
import AnnualExpenses from './CalculatePageComponents/AnnualExpenses';
import MontlyExpenses from './CalculatePageComponents/MontlyExpenses';
import Income from './CalculatePageComponents/Income';
import PropertInformation from './PropertyInformation/PropertyInformation';

const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

class CalculatorPage extends Component {
  constructor() {
    super();
    this.propertyStore = new PropertyStore();
    this.state = {
      annualCashFlow: 0,
      monthlyCashFlow: 0,
    };
  }

  handleChange = key => event => {
    if (key === 'hasDownPayment') this.setState(prevState => ({ hasDownPayment: !prevState.hasDownPayment }));
    else this.setState({ [key]: event.target.value });
  };

  calculate = () => {
    const { annualCashFlow, monthlyCashFlow } = this.propertyStore.calculateReturns();
    this.setState({
      annualCashFlow,
      monthlyCashFlow,
    });
  };

  render() {
    return (
      <Container>
        <Provider PropertyStore={this.propertyStore}>
          <>
            <div>
              <div>
                <CustomTextField adornmentType="$" label="Annual Cash Flow" value={this.state.annualCashFlow} />
                <CustomTextField adornmentType="$" label="Monthly Cash Flow" value={this.state.monthlyCashFlow} />
                <Button color="primary" variant="outlined" onClick={this.calculate}>
                  Calculate
                </Button>
              </div>
              <div style={{ marginTop: 70, display: 'flex' }}>
                <PropertyValue PropertyStore={this.propertyStore} />
                <AnnualExpenses PropertyStore={this.propertyStore} />
                <Income PropertyStore={this.propertyStore} />
                <MontlyExpenses PropertyStore={this.propertyStore} />
                <PropertInformation PropertyStore={this.propertyStore} />
              </div>
            </div>
          </>
        </Provider>
      </Container>
    );
  }
}

export default CalculatorPage;
