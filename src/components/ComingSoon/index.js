import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import globe from 'assets/images/globe.gif'

export class ComingSoonNotFixed extends Component {
  render() {
    return(
      <div className="bg-black relative w100 mx-auto h100 flex flex-column justify-center center">
        <div>
          <img src={globe} width="55rem"/>
        </div>
        <p className="echomotors text-xs text-white center">
          Coming Soon 
        </p>
      </div>
    )
  }
}

export default class ComingSoon extends Component {
  render() {
    return(
      <div className="bg-black z-overlay fixed t0 l0 r0 b0 w100 h100 flex flex-column justify-center center">
        <div>
          <img src={globe} width="55rem"/>
        </div>
        <p className="echomotors text-xs text-white center">
          Coming Soon 
        </p>
      </div>
    )
  }
}