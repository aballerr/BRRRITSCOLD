import React, { Component } from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import CustomTextField from '../PropertyCalculator/CalculatePageComponents/CustomTextField';
import CityService from '../../Services/City.service';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  text-align: center;
  margin-top: 50px;
`;

const Space = styled.span`
  width: 20px;
`;

class AddCityPage extends Component {
  constructor() {
    super();
    this.state = {
      city_name: '',
      population: 0,
      mean_income: 0,
      median_income: 0,
      cities: [],
    };
    this.cityService = new CityService();
  }

  componentDidMount() {
    this.cityService.get().then(response => {
      // console.log(response.data);
      this.setState({ cities: response.data }, () => {
        console.log(this.state);
      });
    });
  }

  handleChange = key => event => {
    if (key === 'city_name') this.setState({ [key]: event.target.value });
    else this.setState({ [key]: parseInt(event.target.value) });
  };

  element = (element, value) => {
    return (
      <>
        <b>{element}: </b> {value}
      </>
    );
  };

  addCity = () => {
    console.log(this.state);
    let city = Object.assign({}, this.state);
    delete city.cities;
    this.cityService.post(city).then(response => {
      if (!response.data[1]) {
        let keys = Object.keys(city);
        let prop = response.data[0];
        for (let key of keys) {
          this.setState({ [key]: prop[key] });
        }
      }
      console.log(response.data);
    });
  };

  render() {
    const { city_name, population, mean_income, median_income } = this.state;

    return (
      <Container>
        <CustomTextField label="City Name" onChange={this.handleChange('city_name')} value={city_name} />
        <CustomTextField label="population" onChange={this.handleChange('population')} value={population} />
        <CustomTextField label="Mean Income" onChange={this.handleChange('mean_income')} value={mean_income} />
        <CustomTextField label="Median Income" onChange={this.handleChange('median_income')} value={median_income} />
        <Button onClick={this.addCity} color="primary" variant="outlined">
          Add City
        </Button>

        {this.state.cities.map((city, index) => (
          <List key={index}>
            <ListItem>
              <b>City: </b> {city.city_name}
              <Space />
              <b> Mean Income: </b> {city.mean_income}
              <Space />
              <b>Median Income: </b> {city.median_income}
              <Space />
              <b>Population:</b> {city.population}
            </ListItem>
          </List>
        ))}
      </Container>
    );
  }
}

export default AddCityPage;
