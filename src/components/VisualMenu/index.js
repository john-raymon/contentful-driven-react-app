import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class VisualMenu extends Component {
  render() {
    return(
      <ul className="list-reset center py3">
        <li>
          <Link to="visual/video">
            <p class="echomotors text-sm text-white"> 
              Video 
            </p>
          </Link>
        </li>
        <li>
          <Link to="visual/photo">
            <p class="echomotors text-sm text-white"> 
              Photo 
            </p>
          </Link>
        </li>
        <li>
          <Link to="visual/design">
            <p class="echomotors text-sm text-white"> 
              Design 
            </p>
          </Link>
        </li>
      </ul>
    )
  }
}