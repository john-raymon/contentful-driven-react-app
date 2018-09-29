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
      <Link to={`annoucements/${slug}`}>
        <div 
        className="relative flex flex-column justify-center px2 center"
        style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh'
        }}>
          <div className="absolute t0 r0 b0 l0 bg-translucent-black">
          </div>
            <div className="max-width-2 mx-auto">
              <p class="relative hero-title-text text-white">
                { title }
              </p>
              <p class="relative hero-description-text text-white">
                { description }
              </p>
            </div>
        </div>
      </Link>
    )
  }
}