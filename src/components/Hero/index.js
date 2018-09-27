import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import placeholderImage from './../../assets/images/hero_placeholder.jpg'

export default class Hero extends Component {
  render() {
    return(
      <Fragment> 
        <div className="">
          <img src={placeholderImage} className="w100"/>
        </div>
      </Fragment>
    )
  }
}