import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './App.css';
import routes from './routes';
import Footer from '../../components/Footer';
import RootStore from '../../store';

class App extends Component {
  render() {
    return (
      <Provider {...RootStore}>
        <React.Fragment>
          <Router>
            <Switch>{routes}</Switch>
          </Router>
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
