import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import '../styles/app.css';

const OuterRouter = ({children}) => <Router history={createBrowserHistory()}>{children}</Router>

const Content = ({store}) => (
	<Provider store={store}>
		<Switch>
			<Route path="/" exact render={() => <p>Enter</p>} />
			<Route path="/home" exact render={() => <p>dashboard</p>} />
			<Route render={() => <p>404 Not Found</p>} />
		</Switch>
	</Provider>
)
const Root = ({store}) => (
	<OuterRouter>
		<Content store={store} />
	</OuterRouter>
)

export default Root;