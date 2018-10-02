import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get'
import flattenImage from 'util/flattenImage'

export default class Hero extends Component {
  render() {
    const coverImage = get(this.props, 'block.fields.elementBackgroundImage', {});
    const { url: src, description: alt } = flattenImage(coverImage);
    const title = get(this.props, 'block.fields.elementTitle', '');
    const description = get(this.props, 'block.fields.elementDescription', '');
    const slug = get(this.props, 'block.fields.slug', '');
    return(
      <Link to={`announcements/${slug}`}>
        <div 
        className="relative flex flex-column justify-center center"
        style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '36rem'        
      }}>
          <div className="absolute t0 r0 b0 l0 bg-black-wash">
          </div>
            <div className="max-width-2 w100 mx-auto px3">
              <p className="relative hero-title-text text-white pb1">
                { title }
              </p>
              <p className="relative hero-description-text text-white">
                { description }
              </p>
            </div>
        </div>
      </Link>
    )
  }
}