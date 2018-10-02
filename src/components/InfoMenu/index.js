import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import arrow from 'assets/images/arrow.png'

export default class InfoMenu extends Component {
  render() {
    return(
      <div className="flex flex-column items-center max-width-4 mx-auto center">
        <Link to="/bio">
          <p className="echomotors bold text-sm text-white center">
            Bio
          </p>
        </Link>
        <img src={arrow} className="py1" style={{width: "10px"}} />
        <Link to="/creds">
          <p className="echomotors bold text-sm text-white center">
            Creds
          </p>
        </Link>
        <img src={arrow} className="py1" style={{width: "10px"}} />
        <p className="echomotors bold text-sm text-white center">
          Contact
        </p>
      </div>
    )
  }
}