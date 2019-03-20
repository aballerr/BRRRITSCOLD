import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import PropertyCalculator from '../PropertyCalculator/PropertyCalculator';
import PropertyStore from '../../Stores/PropertyStore';
import { Provider } from 'mobx-react';
import PropertyService from '../../Services/Property.service';

class AddPropertyPage extends Component {
  constructor() {
    super();
    this.propertyStore = new PropertyStore();
    this.propertyService = new PropertyService();
  }

  submit = () => {
    let property = this.propertyStore.getProperty();
    this.propertyService
      .post(property)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log('an error occured'));
  };

  render() {
    return (
      <div>
        <Provider PropertyStore={this.propertyStore}>
          <>
            <Button style={{ marginBottom: 20, outline: 'none' }} color="primary" variant="outlined" onClick={this.submit}>
              Add Property
            </Button>
            <PropertyCalculator />
          </>
        </Provider>
      </div>
    );
  }
}

export default AddPropertyPage;
