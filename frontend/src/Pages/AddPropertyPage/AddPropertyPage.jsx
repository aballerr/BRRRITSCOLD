import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import PropertyCalculator from '../PropertyCalculator/PropertyCalculator';
import PropertyStore from '../../Stores/PropertyStore';
import { Provider, observer } from 'mobx-react';
import PropertyService from '../../Services/Property.service';
import CustomTextField from '../PropertyCalculator/CalculatePageComponents/CustomTextField';

@observer
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
      console.log(response.data[0]);
      this.propertyStore.initialize(response.data[0]);
      this.setState({ foundOrCreated: true });
    });
  };

  update = () => {
    let property = this.propertyStore.getProperty();
    this.propertyService
      .put(property)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log('an error occured'));
  };

  clear = () => {
    let tempStore = new PropertyStore();
    this.propertyStore.initialize(tempStore.getProperty());
    this.setState({
      property_number: '',
      property_street: '',
      foundOrCreated: false,
    });
  };

  render() {
    const { foundOrCreated } = this.state;

    return (
      <div>
        <Provider PropertyStore={this.propertyStore}>
          <>
            <div style={{ marginBottom: 30 }}>
              {!foundOrCreated ? (
                <>
                  <CustomTextField value={this.state.property_number} onChange={this.onChange('property_number')} label="Number" />
                  <CustomTextField value={this.state.property_street} onChange={this.onChange('property_street')} label="Street" />
                </>
              ) : null}

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
                <>
                  <Button color="primary" variant="outlined" onClick={this.update}>
                    Update
                  </Button>
                  <Button onClick={this.clear} style={{ marginLeft: 20 }} color="secondary" variant="contained">
                    Clear!
                  </Button>
                </>
              )}
            </div>
            <PropertyCalculator />
            {/* {foundOrCreated ? <PropertyCalculator /> : null} */}
          </>
        </Provider>
      </div>
    );
  }
}

export default AddPropertyPage;
