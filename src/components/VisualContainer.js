import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

export default class VisualContainer extends Component {
  render() {
    return(
      <Fragment>
        <ul>
          <li>
            <Link to="/visual/music-videos">
              <p>Music Videos</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/recap">
              <p>Recap</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/documentary">
              <p>Documentary</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/projects">
              <p>Projects</p>
            </Link>
          </li>
        </ul>
      </Fragment>
    )
  }
}