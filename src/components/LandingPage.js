import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import globe from 'assets/images/globe.gif'
export default class LandingPage extends Component {
  render() {
    return(
      <div className="bg-black z-overlay fixed t0 l0 r0 b0 w100 h100 flex flex-column justify-center center">
        <div>
          <img src={globe} width="55rem"/>
        </div>
        <Link to="/home">
          <p className="echomotors text-xs text-white center">
            Enter
          </p>
        </Link>
      </div>
    )
  }
}