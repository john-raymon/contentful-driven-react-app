import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import VisualContainer from './components/VisualContainer'
import GenericPageContainer from './containers/GenericPageContainer'

const Routes = ({ location }) => 
  <Switch location={location}>
    <Route exact path="/" component={LandingPage} />
    <Route path="/visual" component={VisualContainer} />
    <Route exact path="/not-found" render={() => <p className="text-white">Page not found </p>} />
    <Route path="/:slug" component={GenericPageContainer} />
  </Switch>




export default Routes;