import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import configureStore from './util/configStore'
import { Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()} >
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
