import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import VisualContainer from './components/VisualContainer'
import GenericPageContainer from 'containers/GenericPageContainer'

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={GenericPageContainer} />
    <Route path="/visual" component={VisualContainer} />
    <Route path="/not-found" render={() => <p className="text-white">Page not found </p>} />
  </Switch>
)




export default Routes;