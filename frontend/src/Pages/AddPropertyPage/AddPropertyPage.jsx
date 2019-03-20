import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import PropertyCalculator from '../PropertyCalculator/PropertyCalculator';
import PropertyStore from '../../Stores/PropertyStore';
import { Provider } from 'mobx-react';
import PropertyService from '../../Services/Property.service';
import CustomTextField from '../PropertyCalculator/CalculatePageComponents/CustomTextField';

class AddPropertyPage extends Component {
  constructor() {
    super();
    this.propertyStore = new PropertyStore();
    this.propertyService = new PropertyService();
    this.state = {
      property_number: '',
      property_street: '',
      foundOrCreated: false,
    };
  }

  onChange = key => event => {
    this.setState({ [key]: event.target.value });
  };

  findOrCreateProperty = () => {
    let property = Object.assign({}, this.state);
    delete property.foundOrCreated;
    this.propertyService.post(property).then(response => {
      this.propertyStore.initialize(response.data[0]);
    });
    // this.setState({ foundOrCreated: true });
  };

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
    const { foundOrCreated } = this.state;

    return (
      <div>
        <Provider PropertyStore={this.propertyStore}>
          <>
            <div style={{ marginBottom: 30 }}>
              <CustomTextField value={this.state.property_number} onChange={this.onChange('property_number')} label="Number" />
              <CustomTextField value={this.state.property_street} onChange={this.onChange('property_street')} label="Street" />

              {!foundOrCreated ? (
                <Button
                  style={{ marginBottom: 20, outline: 'none' }}
                  color="primary"
                  variant="outlined"
                  onClick={this.findOrCreateProperty}
                >
                  Find or Add Property
                </Button>
              ) : (
                <Button color="primary" variant="outlined" onClick={this.submit}>
                  Update
                </Button>
              )}
            </div>

            <PropertyCalculator />
          </>
        </Provider>
      </div>
    );
  }
}

export default AddPropertyPage;
