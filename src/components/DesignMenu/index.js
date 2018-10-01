import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class DesignMenu extends Component {
  render() {
    return(
      <ul className="list-reset center py3">
        <li>
          <p class="echomotors text-sm text-white"> Album Artwork </p>
        </li>
        <li>
          <p class="echomotors text-sm text-white"> Brands </p>
        </li>
        <li>
          <p class="echomotors text-sm text-white"> Commerical </p>
        </li>
      </ul>
    )
  }
}