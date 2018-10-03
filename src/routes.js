import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import ComingSoon from 'components/ComingSoon'

import GenericPageContainer from 'containers/GenericPageContainer'
import AnnouncementContainer from 'containers/AnnouncementContainer'
import VisualDetailContainer from 'containers/VisualDetailContainer'

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/home" component={GenericPageContainer} />
    
    <Route exact path="/visual/video" component={GenericPageContainer} />
    <Route exact path="/visual/video/music-videos" component={GenericPageContainer} />
    <Route exact path="/visual/video/recap" component={GenericPageContainer} />
    <Route exact path="/visual/video/documentary" component={GenericPageContainer} />
    <Route exact path="/visual/video/projects" component={GenericPageContainer} />
    
    <Route exact path="/visual/photo" component={GenericPageContainer} />
    <Route exact path="/visual/photo/editorial" component={GenericPageContainer} />
    <Route exact path="/visual/photo/projects" component={GenericPageContainer} />
    <Route exact path="/visual/photo/events" component={GenericPageContainer} />
    <Route exact path="/visual/photo/places" component={GenericPageContainer} />

    <Route exact path="/visual/design" component={GenericPageContainer} />
    <Route exact path="/visual/design/album-artwork" component={GenericPageContainer} />
    <Route exact path="/visual/design/brands" component={GenericPageContainer} />
    <Route exact path="/visual/design/commercial" component={GenericPageContainer} />
    <Route exact path="/visual/design/digital" component={GenericPageContainer} />
    <Route exact path="/visual/design/flyer" component={GenericPageContainer} />

    <Route exact path="/visual/:visualType/:visualHandle" component={VisualDetailContainer} />
    <Route path="/visual" component={GenericPageContainer} />

    <Route path="/info" component={GenericPageContainer} />
    <Route path="/bio" component={GenericPageContainer} />
    <Route path="/creds" component={GenericPageContainer} />
    <Route 
      exact 
      path="/announcements/:announcementHandle" 
      component={AnnouncementContainer} 
    />
    <Route path="/announcements" component={GenericPageContainer} />
    <Route path="/global" component={ComingSoon} />
    <Route path="/store" component={ComingSoon} />

    <Route path="/not-found" render={() => <p className="text-white">Page not found </p>} />
  </Switch>
)




export default Routes;