import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
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
      showPropertyInformation: false,
    };
  }

  handleChange = key => event => {
    if (key === 'hasDownPayment') this.setState(prevState => ({ hasDownPayment: !prevState.hasDownPayment }));
    else this.setState({ [key]: event.target.value });
  };

  calculate = () => {
    let res = this.propertyStore.calculateReturns();
    console.log(`The yearly return is: ${res.annualCashFlow}`);
    console.log(`The monthly cash flow is: ${res.monthlyCashFlow}`);
  };

  render() {
    const { showPropertyInformation } = this.state;

    return (
      <Container>
        <Provider PropertyStore={this.propertyStore}>
          <>
            {showPropertyInformation ? (
              <PropertInformation PropertyStore={this.propertyStore} />
            ) : (
              <div>
                <div style={{ marginTop: 40, display: 'flex' }}>
                  <div style={{}} />
                  <PropertyValue PropertyStore={this.propertyStore} />
                  <AnnualExpenses PropertyStore={this.propertyStore} />
                  <Income PropertyStore={this.propertyStore} />
                  <MontlyExpenses PropertyStore={this.propertyStore} />
                </div>
                <div>
                  <button onClick={this.calculate}>Calculate</button>
                </div>
              </div>
            )}
            <Button
              color="primary"
              variant="contained"
              style={{ position: 'absolute', top: 70, left: 20, width: 350, height: 30, outline: 'none' }}
              onClick={e => this.setState(prevState => ({ showPropertyInformation: !prevState.showPropertyInformation }))}
            >
              {showPropertyInformation ? 'Show Calculator' : 'Show Information'}
            </Button>
          </>
        </Provider>
      </Container>
    );
  }
}

export default CalculatorPage;
