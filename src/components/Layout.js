import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return(
      <Fragment>
        <nav>
          <Link to="/home">
            <p>VVVisualVandals</p>
          </Link>
        </nav>
        <main>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}