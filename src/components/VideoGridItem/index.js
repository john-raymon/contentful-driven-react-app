import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get'

export default class VideoGridItem extends Component {
  render() {  
    const video = get(this.props, 'video', {});
    const title = get(video, 'fields.title', '');
    const description = get(video, 'fields.description', '');
    const slug = get(video, 'fields.slug', '');
    const src = get(video, 'fields.videoFile.fields.file.url', '')
    const srcType = get(video, 'fields.videoFile.fields.file.contentType', '');
    console.log('my type is', srcType)
    return(
      <div className="sm-col sm-col-6 md-col-4 p3" style={{ height: "20rem"}}>
        <Link to={`/visual/video/${slug}`}>
          <video className="h100 w100" controls>
            <source src={src} type={srcType} />
            Your browser does not support the video tag.
          </video>
        </Link>
      </div>
    )
  }
}