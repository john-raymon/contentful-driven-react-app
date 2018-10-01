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
          <p class="echomotors text-sm text-white"> Recap </p>
        </li>
        <li>
          <p class="echomotors text-sm text-white"> Documentary </p>
        </li>
        <li>
          <p class="echomotors text-sm text-white"> Projects </p>
        </li>      
      </ul>
    )
  }
}