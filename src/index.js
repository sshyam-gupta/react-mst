import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './pages/app'

import registerServiceWorker from './registerServiceWorker'

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./pages/app', () => {
    renderApp()
  })
}
