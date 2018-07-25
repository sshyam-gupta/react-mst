import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers/app';

import registerServiceWorker from './registerServiceWorker';

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    renderApp()
  })
}
