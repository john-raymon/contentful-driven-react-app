import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Masonry from 'react-masonry-component';

import get from 'util/get'

import PhotoGridItem from 'components/PhotoGridItem'

class PhotoGrid extends Component {
  render() {
    const { block } = this.props;
    const title = get(block, 'fields.title', '');
    const gridItems = get(block, 'fields.photos', []);

    if (gridItems.length === 0) {
      return (
        <p>There is no content.</p>
      )
    } else {
      const photoGridItems = gridItems.map((photo, i) => {
          return (
                    <PhotoGridItem photo={photo} key={i} />
          )
        });
      return (
        <div className="max-width-4 mx-auto">
          <p className="echomotors text-sm text-white bold px3 py1 w100 mx-auto">
            { title }
          </p>
          <Masonry
              className={'PhotoGrid mx-auto'} // default ''
              elementType={'div'} // default 'div'
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
              imagesLoadedOptions={{ background: '.PhotoGrid__item' }} // default {}
          >
              {photoGridItems}
          </Masonry>
        </div>
      )
    }

  }
}

export default PhotoGrid;

