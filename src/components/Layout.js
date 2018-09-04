import React, { Component, Fragment} from 'react'

export default class Layout extends Component {
  render() {
    return(
      <Fragment>
        <nav>
          <p>VVVisualVandals</p>
        </nav>
        <main>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}