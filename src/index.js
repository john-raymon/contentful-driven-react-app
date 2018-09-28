import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import configureStore from 'util/configStore'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const store = configureStore(null, history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
