import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class PhotoMenu extends Component {
  render() {
    return(
      <ul className="list-reset center py3">
        <li>
          <Link to="photo/editorial">
            <p class="echomotors text-sm text-white"> Editorial </p>
          </Link>
        </li>
        <li>
          <Link to="photo/projects">
            <p class="echomotors text-sm text-white"> Projects </p>
          </Link>
        </li>
        <li>
          <Link to="photo/events">
            <p class="echomotors text-sm text-white"> Events </p>
          </Link>
        </li>   
        <li>
          <Link to="photo/places">
            <p class="echomotors text-sm text-white"> Places </p>
          </Link>
        </li>  
      </ul>
    )
  }
}