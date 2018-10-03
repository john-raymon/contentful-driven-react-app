import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Routes from './routes'

import { initializeApplication } from './state/actions/applicationActions';

import globals from 'state/selectors/globals'

import get from 'util/get'
import { IDLE, FULFILLED } from './constants/Status'

import './styles/app.css';

import Nav from './components/Nav'
import Footer from './components/Footer'
import LandingPage from 'components/LandingPage'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {
      applicationStatus,
      actions: { initializeApplication }
    } = this.props;

    if (applicationStatus === IDLE) {
      initializeApplication();
    }
  }  

  render() {
    const { applicationStatus, globals } = this.props;
    if (applicationStatus !== FULFILLED) {
      return ( <LandingPage /> )
    } else {
      console.log('from app',this.props)
      return(
        <Fragment>
          <Nav />
          <main className="flex flex-column container">
            <Routes location={get(this, 'props.location')} /> 
          </main>
          <Footer globals={globals}/>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    applicationStatus: get(state, 'status.initializeApplication'),
    globals: globals(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        initializeApplication
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
