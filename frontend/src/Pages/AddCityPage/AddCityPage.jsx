import React, { Component } from 'react';
import CustomTextField from '../PropertyCalculator/CalculatePageComponents/CustomTextField';
import CityService from '../../Services/City.service';

class AddCityPage extends Component {
  constructor() {
    super();
    this.state = {
      city_name: '',
      population: 0,
      mean_income: 0,
      median_income: 0,
    };
    this.cityService = new CityService();
  }

  componentDidMount() {
    this.cityService.get().then(response => {
      console.log(response.data);
    });
  }

  handleChange = key => event => this.setState({ [key]: event.target.value });

  render() {
    const { city_name, population, mean_income, median_income } = this.state;

    return (
      <div className="addCityPage">
        <CustomTextField label="City Name" onChange={this.handleChange('city_name')} value={city_name} />
        <CustomTextField label="population" onChange={this.handleChange('population')} value={population} />
        <CustomTextField label="Mean Income" onChange={this.handleChange('mean_income')} value={mean_income} />
        <CustomTextField label="Median Income" onChange={this.handleChange('median_income')} value={median_income} />
      </div>
    );
  }
}

export default AddCityPage;
