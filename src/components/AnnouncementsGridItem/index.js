import React, { Component } from 'react'
import Hero from 'components/Hero'

const AnnouncementsGridItem = ({announcement}) => {
  console.log('comp. of item', announcement)
  return ( 
    <div className="AnnouncementsGrid__item sm-col sm-col-6">
      <Hero
        block={announcement}
      />
    </div>
  )
}

export default AnnouncementsGridItem;
