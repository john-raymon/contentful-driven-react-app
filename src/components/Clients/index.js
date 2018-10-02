import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get' 

export default class Clients extends Component {
  render() {
    const clients = get(this.props, 'block', {})
    const logos = get(clients, 'fields.logos', [])
    console.log(logos)
    return(
      <div>
        <p className="echomotors text-sm text-white center py2">Clients</p>
        <ul className="flex flex-row list-reset max-width-4 w100 mx-auto 
  flex-wrap justify-center">
        {
          logos.map((logo, i) => {
            return (
            <li className="left flex flex-column justify-center px2" style={{width: "15rem"}}>
              <div className="w100 mx-auto">
                <img className="w100 mx-auto" src={logo.fields.file.url}/> 
              </div>
            </li>          
            )
          })
        }
        </ul>
      </div>
    )
  }
}