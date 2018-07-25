import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import routes from './routes';
import Footer from '../../components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>{routes}</Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
