import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import '../styles/app.css';
import Layout from './Layout'
import LandingPage from './LandingPage'
import Home from './Home'
import VisualContainer from './VisualContainer'
import VideoContainer from './VideoContainer'
import VisualMusicVideosContainer from './VisualMusicVideosContainer'
import VisualRecapVideosContainer from './VisualRecapVideosContainer'
import VisualDocVideosContainer from './VisualDocVideosContainer'
import VisualProjVideosContainer from './VisualProjVideosContainer'
import PhotoContainer from './PhotoContainer'
import PhotosFashionContainer from './PhotosFashionContainer'
import PhotosCommercialContainer from './PhotosCommercialContainer'
import PhotosProjectsContainer from './PhotosProjectsContainer'
import PhotosShowsContainer from './PhotosShowsContainer'
import PhotosPortraitContainer from './PhotosPortraitContainer'
import DesignContainer from './DesignContainer'
import DesignAlbumContainer from './DesignAlbumContainer'
import DesignBrandsContainer from './DesignBrandsContainer'
import DesignCommercialContainer from './DesignCommercialContainer'

const OuterRouter = ({children}) => <Router history={createBrowserHistory()}>{children}</Router>

const Content = ({store}) => (
	<Provider store={store}>
		<Layout>
		<Switch>
			<Route path="/" exact render={props => <LandingPage {...props} />} />
			<Route path="/home" exact render={props => <Home {...props} />} />
			<Route path="/visual" exact render={props => <VisualContainer {...props} />} />
			<Route path="/visual/video" exact render={props => <VideoContainer {...props} />} />
			<Route path="/visual/video/music-videos" exact render={props => <VisualMusicVideosContainer fetchObject={{postType: 'video', tags: ['musicvideos', 'musicvideo'], requestType: 'video/musicvideos'}} {...props} />} />
			<Route path="/visual/video/recap" exact render={props => <VisualRecapVideosContainer fetchObject={{postType: 'video', tags: ['recapvideos', 'recapvideo', 'recap'], requestType: 'video/recap'}} {...props} />} />
			<Route path="/visual/video/documentary" exact render={props => <VisualDocVideosContainer fetchObject={{postType: 'video', tags: ['documentaryvideos', 'documentaryvideo', 'docvideo', 'docvideos', 'doc'], requestType: 'video/documentary'}} {...props} />} />
			<Route path="/visual/video/projects" exact render={props => <VisualProjVideosContainer fetchObject={{postType: 'video', tags: 'projectvideos', requestType: 'video/projects'}} {...props} />} />
			<Route path="/visual/photo" exact render={props => <PhotoContainer {...props} /> } />
			<Route path="/visual/photo/fashion" exact render={props => <PhotosFashionContainer fetchObject={{postType: 'photo', tags: ['fashionphoto', 'fashionphotos'], requestType: 'photo/fashion'}}  {...props} /> } />
			<Route path="/visual/photo/commercial" exact render={props => <PhotosCommercialContainer fetchObject={{postType: 'photo', tags: ['commercialphotos', 'commercialphoto'], requestType: 'photo/commercial'}} {...props} /> } />
			<Route path="/visual/photo/projects" exact render={props => <PhotosProjectsContainer fetchObject={{postType: 'photo', tags: ['projectsphotos', 'projectphotos', 'projectsphoto', 'projectphoto'], requestType: 'photo/projects'}}  {...props} /> } />			
			<Route path="/visual/photo/shows" exact render={props => <PhotosShowsContainer fetchObject={{postType: 'photo', tags: ['showsphotos', 'showphotos', 'showsphoto', 'showphoto'], requestType: 'photo/shows'}}  {...props} /> } />
			<Route path="/visual/photo/portrait" exact render={props => <PhotosPortraitContainer fetchObject={{postType: 'photo', tags: ['portraitphotos', 'portraitphoto'], requestType: 'photo/portrait'}} {...props} /> } />
			<Route path="/visual/design" exact render={props => <DesignContainer {...props} /> } />
			<Route path="/visual/design/album-artwork" exact render={props => <DesignAlbumContainer fetchObject={{postType: 'photo', tags: ['albumartworkdesign', 'albumartworkdesigns'], requestType: 'design/albumartwork'}} {...props} /> } />
			<Route path="/visual/design/brands" exact render={props => <DesignBrandsContainer fetchObject={{postType: 'photo', tags: ['brandsdesign', 'branddesigns'], requestType: 'design/brands'}}   {...props} /> } />
			<Route path="/visual/design/commercial" exact render={props => <DesignCommercialContainer fetchObject={{postType: 'photo', tags: ['commercialdesign', 'commercialdesigns'], requestType: 'design/commercial'}} {...props} /> } />
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