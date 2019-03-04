import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalculatorPage from './Pages/CalculatorPage/CalculatorPage';
import styled from 'styled-components';

const Container = styled.div`
  width: 97%;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/calculator" component={CalculatorPage} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;