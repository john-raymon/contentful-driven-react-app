import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

export default class VisualContainer extends Component {
  render() {
    return(
      <div className="pushFromNav">
        <ul>
         <li>
            <Link to="/visual/video">
              <p>Video</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/photo">
              <p>Photo</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/design">
              <p>Design</p>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}