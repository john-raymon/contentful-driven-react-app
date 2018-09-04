import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
  render() {
    return(
      <Fragment>
        <Link to="/home">Enter</Link>
      </Fragment>
    )
  }
}