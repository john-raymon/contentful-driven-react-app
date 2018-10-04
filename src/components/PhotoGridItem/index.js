import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get'

export default class PhotoGridItem extends Component {
  render() {  
    const photo = get(this.props, 'photo', {});
    const title = get(photo, 'fields.title', '');
    const description = get(photo, 'fields.description', '');
    const slug = get(photo, 'fields.slug', '');
    const src = get(photo, 'fields.photoFile.fields.file.url', '')
    return(
      <div className="PhotoGrid__item left">
          <Link to={`/visual/photo/${slug}`}>
            <img src={src} className="w100" height="auto"/>
          </Link>
      </div>
    )
  }
}

