import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import VisualContainer from './components/VisualContainer'
import GenericPageContainer from './containers/GenericPageContainer'
const Routes = ({ location }) => {
console.log('this is the location', location)
  return (

  <Switch location={location}>
    <Route exact path="/" component={LandingPage} />
    <Route path="/hometwo"  component={Home} />
    <Route path="/visual" component={VisualContainer} /> />
    <Route component={GenericPageContainer} />
    <Route path="/not-found" render={() => <p>Page not found :(</p>} />
  </Switch>
)
}

export default Routes;