import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import '../styles/app.css';
import Layout from './Layout'
import LandingPage from './LandingPage'
import Home from './Home'
import VisualContainer from './VisualContainer'
import VisualMusicVideosContainer from './VisualMusicVideosContainer'

const OuterRouter = ({children}) => <Router history={createBrowserHistory()}>{children}</Router>

const Content = ({store}) => (
	<Provider store={store}>
		<Layout>
		<Switch>
			<Route path="/" exact render={props => <LandingPage {...props} />} />
			<Route path="/home" exact render={props => <Home {...props} />} />
			<Route path="/visual" exact render={props => <VisualContainer {...props} />} />
			<Route path="/visual/music-videos" exact render={props => <VisualMusicVideosContainer {...props} />} />
			<Route render={() => <p>404 Not Found</p>} />
		</Switch>
		</Layout>
	</Provider>
)
const Root = ({store}) => (
	<OuterRouter>
		<Content store={store} />
	</OuterRouter>
)

export default Root;