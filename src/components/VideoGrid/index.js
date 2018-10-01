import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get'
import flattenImage from 'util/flattenImage'

import VideoGridItem from 'components/VideoGridItem'

class VideoGrid extends Component {
  render() {
    const { block } = this.props;
    const title = get(block, 'fields.title', '');
    const gridItems = get(block, 'fields.videos', []);

    if (gridItems.length === 0) {
      return (
        <p>There is no content.</p>
      )
    } else {
      return (
        <div className="VideoGrid max-width-4 w100 mx-auto clearfix mxn2">
          <p className="echomotors text-sm text-white bold pl2 py1">{  title }</p>
          {
            gridItems.map((video, i) => {
              return (
                <VideoGridItem video={video} key={i} />
              )
            })
          }
        </div>
      )
    }

  }
}

export default VideoGrid;