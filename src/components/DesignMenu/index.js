import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class DesignMenu extends Component {
  render() {
    return(
      <ul className="list-reset center py3">
        <li>
          <Link to="design/album-artwork">
            <p class="echomotors text-sm text-white"> Album Artwork </p>
          </Link>
        </li>
        <li>
          <Link to="design/brands">
            <p class="echomotors text-sm text-white"> Brands </p>
          </Link>
        </li>
        <li>
          <Link to="design/commercial">
            <p class="echomotors text-sm text-white"> Commerical </p>
          </Link>
        </li>
        <li>
          <Link to="design/commercial">
            <p class="echomotors text-sm text-white"> Digital </p>
          </Link>
        </li>
      </ul>
    )
  }
}