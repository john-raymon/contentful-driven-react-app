import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get'

export default class VideoGridItem extends Component {
  render() {  
    const video = get(this.props, 'video', {});
    const title = get(video, 'fields.title', '');
    const description = get(video, 'fields.description', '');
    const slug = get(video, 'fields.slug', '');
    const thumbnailSrc = get(video, 'fields.thumbnail.fields.file.url', '')
    return(
      <div className="sm-col sm-col-6 md-col-4 p2 relative" style={{height: "20rem"}}>
          <Link to={`/visual/video/${slug}`}>
            <div className="relative w100 h100 flex flex-column justify-center center" style={{
              backgroundImage: `url(${thumbnailSrc})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}> 
              <div className="absolute t0 r0 l0 b0 bg-black-wash" />
              <p className="relative text-white echomotors text-sm">
                { title }
              </p>
            </div>
          </Link>
      </div>
    )
  }
}

