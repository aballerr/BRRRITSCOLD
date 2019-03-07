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
      propertyNumber,
      propertyStreet,
      propertyCity,
      propertyState,
      propertyZip,
      mlsNumber,
      description,
      bedrooms,
      bathrooms,
      totalSquareFeet,
      lotSizeSquareFeet,
      yearBuilt,
      units,
      heatingType,
      coolingType,
      wiringCondition,
      plumbingCondition,
      parkingType,
      setState,
    } = PropertyStore;

    return (
      <div>
        <InformationWrap>
          <h4>Location</h4>
          <CustomTextField value={propertyNumber} label="Property Number" onChange={e => setState('propertyNumber', e.target.value)} />
          <CustomTextField value={propertyStreet} label="Property Street" onChange={e => setState('propertyStreet', e.target.value)} />
          <CustomTextField value={propertyCity} label="City" onChange={e => setState('propertyCity', e.target.value)} />
          <CustomTextField value={propertyState} label="State" onChange={e => setState('propertyState', e.target.value)} />
          <CustomTextField value={propertyZip} label="Zip" onChange={e => setState('propertyZip', e.target.value)} />
          <CustomTextField value={mlsNumber} label="MLS" onChange={e => setState('mlsNumber', e.target.value)} />
        </InformationWrap>
        <InformationWrap>
          <h4>House Information</h4>
          <CustomTextField value={bedrooms} label="Bedrooms" onChange={e => setState('bedrooms', e.target.value)} />
          <CustomTextField value={bathrooms} label="Bathrooms" onChange={e => setState('bathrooms', e.target.value)} />
          <CustomTextField value={totalSquareFeet} label="Total Square Feet" onChange={e => setState('totalSquareFeet', e.target.value)} />
          <CustomTextField
            value={lotSizeSquareFeet}
            label="Lot Size Square Feet"
            onChange={e => setState('lotSizeSquareFeet', e.target.value)}
          />
          <CustomTextField value={yearBuilt} label="Year Built" onChange={e => setState('yearBuilt', e.target.value)} />
          <CustomTextField value={units} label="Number of Units" onChange={e => setState('units', e.target.value)} />
          <CustomTextField value={heatingType} label="Heating Type" onChange={e => setState('heatingType', e.target.value)} />
          <CustomTextField value={coolingType} label="Cooling Type" onChange={e => setState('coolingType', e.target.value)} />
          <CustomTextField value={wiringCondition} label="Wiring Condition" onChange={e => setState('wiringCondition', e.target.value)} />
          <CustomTextField
            value={plumbingCondition}
            label="Plumbing Condition"
            onChange={e => setState('plumbingCondition', e.target.value)}
          />
          <CustomTextField value={parkingType} label="Parking Type" onChange={e => setState('parkingType', e.target.value)} />
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
