import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class VideoMenu extends Component {
  render() {
    return(
      <ul className="list-reset center py3">
        <li>
          <Link to="video/music-videos">
            <p class="echomotors text-sm text-white"> Music Videos </p>
          </Link>
        </li>
        <li>
          <Link to="video/recap">
            <p class="echomotors text-sm text-white"> Recap </p>
          </Link>
        </li>
        <li>
          <Link to="video/documentary">
            <p class="echomotors text-sm text-white"> Documentary </p>
          </Link>
        </li>
        <li>
          <Link to="video/projects">
            <p class="echomotors text-sm text-white"> Projects </p>
          </Link>
        </li>      
      </ul>
    )
  }
}