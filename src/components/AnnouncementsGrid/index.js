import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import get from 'util/get'
import flattenImage from 'util/flattenImage'

import AnnouncementsGridItem from 'components/AnnouncementsGridItem'


class AnnouncementsGrid extends Component {
  render() {
    const { block } = this.props;
    const gridItems = get(block, 'fields.elementAnnouncements', []);
    const gridTitle = get(block, 'fields.elementTitle', '')
    const gridDescription = get(block, 'fields.elementGridDescription', '')
    return (
      <div class="w100">
        <div class="mx-auto max-width-5 px3 pb2">
          <p class="echomotors bold text-md pt2">
            { gridTitle }
          </p>
          <p class="worksans text-xsm line-height-sm">
            { gridDescription }
          </p>
        </div>
        <div class="AnnouncementsGrid clearfix max-width-5 mx-auto">
          {
            gridItems.map(( gridItem, i ) => {
              return (
                <AnnouncementsGridItem 
                  key={i}
                  announcement={gridItem}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default AnnouncementsGrid;