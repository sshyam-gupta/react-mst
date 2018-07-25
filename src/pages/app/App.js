import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>{routes}</Switch>
      </Router>
    );
  }
}

export default App;
