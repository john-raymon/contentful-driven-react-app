import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Masonry from 'react-masonry-component';

import get from 'util/get'

import DesignGridItem from 'components/DesignGridItem'

class DesignGrid extends Component {
  render() {
    const { block } = this.props;
    const title = get(block, 'fields.title', '');
    const gridItems = get(block, 'fields.designs', []);

    if (gridItems.length === 0) {
      return (
        <p>There is no content.</p>
      )
    } else {
      const designGridItems = gridItems.map((design, i) => {
                return (
                  <DesignGridItem design={design} key={i} />
                )
              });
      return (
        <div className="max-width-4 mx-auto">
          <p className="echomotors text-sm text-white bold px3 py1 w100 mx-auto">
            { title }
          </p>
          <Masonry
              className={'DesignGrid mx-auto'} // default ''
              elementType={'div'} // default 'div'
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
              imagesLoadedOptions={{ background: '.DesignGrid__item' }} // default {}
          >
            {designGridItems}
          </Masonry>
        </div>
      )
    }

  }
}

export default DesignGrid;

