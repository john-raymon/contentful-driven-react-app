import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get'
import flattenImage from 'util/flattenImage'

export default class VisualContainer extends Component {
  render() {
    const coverImage = get(this.props, 'block.fields.elementBackgroundImage', {});
    const { url: src, description: alt } = flattenImage(coverImage);
    return(
      <Link to={`info`}>
        <div 
        className="VisualBlock relative flex flex-column justify-center px2 py4 center"
        style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
        }}>
          <div className="absolute t0 r0 b0 l0 bg-translucent-black">
          </div>
            <div className="max-width-2 mx-auto">
              <p class="relative hero-title-text text-white">
                Visual
              </p>
            </div>
        </div>
      </Link>
    )
  }
}