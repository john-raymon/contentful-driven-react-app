import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import configureStore from './util/configStore'
import registerServiceWorker from './registerServiceWorker';



const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
