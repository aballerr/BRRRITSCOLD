import React, { Component } from 'react';
import PropertyCalculator from '../PropertyCalculator/PropertyCalculator';
import PropertyStore from '../../Stores/PropertyStore';
import { Provider } from 'mobx-react';

class CalculatorPage extends Component {
  constructor() {
    super();
    this.propertyStore = new PropertyStore();
  }

  render() {
    return (
      <div>
        <Provider PropertyStore={this.propertyStore}>
          <>
            <PropertyCalculator />
          </>
        </Provider>
      </div>
    );
  }
}

export default CalculatorPage;
