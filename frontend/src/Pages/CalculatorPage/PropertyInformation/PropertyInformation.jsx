import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CustomTextField from '../CalculatePageComponents/CustomTextField';
import styled from 'styled-components';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const InformationWrap = styled.div`
  margin-top: 100px;
`;

@inject('PropertyStore')
@observer
class PropertyInformation extends Component {
  render() {
    const { PropertyStore } = this.props;
    const {
      property_number,
      property_street,
      property_city,
      property_state,
      property_zip,
      mls_number,
      description,
      bedrooms,
      bathrooms,
      total_square_feet,
      lot_size_square_feet,
      year_built,
      units,
      heating_type,
      cooling_type,
      wiring_condition,
      plumbing_condition,
      parking_type,
      setState,
    } = PropertyStore;

    return (
      <div>
        <InformationWrap>
          <h4>Location</h4>
          <CustomTextField value={property_number} label="Property Number" onChange={e => setState('property_number', e.target.value)} />
          <CustomTextField value={property_street} label="Property Street" onChange={e => setState('property_street', e.target.value)} />
          <CustomTextField value={property_city} label="City" onChange={e => setState('property_city', e.target.value)} />
          <CustomTextField value={property_state} label="State" onChange={e => setState('property_state', e.target.value)} />
          <CustomTextField value={property_zip} label="Zip" onChange={e => setState('property_zip', e.target.value)} />
          <CustomTextField value={mls_number} label="MLS" onChange={e => setState('mls_number', e.target.value)} />
        </InformationWrap>
        <InformationWrap>
          <h4>House Information</h4>
          <CustomTextField value={bedrooms} label="Bedrooms" onChange={e => setState('bedrooms', e.target.value)} />
          <CustomTextField value={bathrooms} label="Bathrooms" onChange={e => setState('bathrooms', e.target.value)} />
          <CustomTextField
            value={total_square_feet}
            label="Total Square Feet"
            onChange={e => setState('total_square_feet', e.target.value)}
          />
          <CustomTextField
            value={lot_size_square_feet}
            label="Lot Size Square Feet"
            onChange={e => setState('lot_size_square_feet', e.target.value)}
          />
          <CustomTextField value={year_built} label="Year Built" onChange={e => setState('year_built', e.target.value)} />
          <CustomTextField value={units} label="Number of Units" onChange={e => setState('units', e.target.value)} />
          <CustomTextField value={heating_type} label="Heating Type" onChange={e => setState('heating_type', e.target.value)} />
          <CustomTextField value={cooling_type} label="Cooling Type" onChange={e => setState('cooling_type', e.target.value)} />
          <CustomTextField value={wiring_condition} label="Wiring Condition" onChange={e => setState('wiring_condition', e.target.value)} />
          <CustomTextField
            value={plumbing_condition}
            label="Plumbing Condition"
            onChange={e => setState('plumbing_condition', e.target.value)}
          />
          <CustomTextField value={parking_type} label="Parking Type" onChange={e => setState('parking_type', e.target.value)} />
        </InformationWrap>
        <InformationWrap>
          <Form>
            <FormGroup>
              <Label for="exampleText">Additional Comments</Label>
              <Input
                value={description}
                onChange={e => setState('description', e.target.value)}
                type="textarea"
                name="text"
                id="exampleText"
              />
            </FormGroup>
          </Form>
        </InformationWrap>
      </div>
    );
  }
}

export default PropertyInformation;
