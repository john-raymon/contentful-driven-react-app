import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import GenericPageContainer from 'containers/GenericPageContainer'
import AnnouncementContainer from 'containers/AnnouncementContainer'

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={GenericPageContainer} />
    <Route 
      exact 
      path="/announcements/:announcementHandle" 
      component={AnnouncementContainer} 
    />
    <Route path="/announcements" component={GenericPageContainer} />
    <Route path="/not-found" render={() => <p className="text-white">Page not found </p>} />
  </Switch>
)




export default Routes;