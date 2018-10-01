import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class PhotoMenu extends Component {
  render() {
    return(
      <ul className="list-reset center py3">
        <li>
          <p class="echomotors text-sm text-white"> Fashion </p>
        </li>
        <li>
          <p class="echomotors text-sm text-white"> Commercial </p>
        </li>
        <li>
          <p class="echomotors text-sm text-white"> Projects </p>
        </li>
        <li>
          <p class="echomotors text-sm text-white"> Shows </p>
        </li>   
        <li>
          <p class="echomotors text-sm text-white"> Portraits </p>
        </li>  
      </ul>
    )
  }
}