import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import globe from 'assets/images/globe.gif'

export default class LoadingGlobe extends Component {
  render() {
    return(
      <div className="bg-black relative w100 mx-auto h100 flex flex-column justify-center center">
        <div className="mx-auto">
          <img src={globe} width="40rem"/>
        </div>
        <p className="echomotors text-xxs text-white center">
          Loading... 
        </p>
      </div>
    )
  }
}