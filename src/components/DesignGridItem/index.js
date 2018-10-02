import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get'

export default class DesignGridItem extends Component {
  render() {  
    const design = get(this.props, 'design', {});
    const title = get(design, 'fields.title', '');
    const description = get(design, 'fields.description', '');
    const slug = get(design, 'fields.slug', '');
    const src = get(design, 'fields.photoFile.fields.file.url', '')
    return(
      <div className="DesignGrid__item left">
          <Link to={`/visual/design/${slug}`}>
            <img src={src} className="w100" height="auto"/>
          </Link>
      </div>
    )
  }
}

