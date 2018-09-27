import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
export default class Home extends Component {
  render() {
    return(
      <Fragment>
        <Hero />
        <ul>
          <li>
            <Link to="/info">
              <p>Info</p>
            </Link>
          </li>
          <li>
            <Link to="/visual">
              <p>Visual</p>
            </Link>
          </li>
          <li>
            <a href="http://global.vvvisualvandals.com">
              <p>Global</p>
            </a>
          </li>
        </ul>
      </Fragment>
    )
  }
}